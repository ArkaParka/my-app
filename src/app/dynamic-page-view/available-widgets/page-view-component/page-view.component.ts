import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional} from "@angular/core";
import {IDynamicPageViewConfig} from "../../../models/IDynamicPageViewConfig";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";
import {ITypePageViewConfig} from "../../interfaces/ITypePageViewConfig";
import {switchMap, takeUntil} from "rxjs/operators";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";
import {combineLatest} from "rxjs";
import {IWidgetOptions} from "../../interfaces/IWidgetOptions";
import {IWidgetEventAction} from "../../interfaces/IWidgetEventAction";
import {EActionTypes} from "../../interfaces/EActionTypes";
import isEqual from 'lodash/isEqual';

@Component({
  template: `
    <app-widget-list [pageConfig]="innerPageViewConfig"></app-widget-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageViewComponent extends DocumentBaseComponent {
  public innerPageViewConfig: IDynamicPageViewConfig;
  private widgetListAreaName: string;
  private currentDisplayEvent: IWidgetEventAction = null;
  private displayEventViewConfig: ITypePageViewConfig = null;

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetData: WidgetOptions<any>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService,
              private cd: ChangeDetectorRef) {
    super();

    combineLatest(this.widgetData.getOptions(), this.dpStore.select('typePageViewConfigs'), this.widgetData.getAreaName())
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.widgetListAreaName = data[2];

        if ((data[0] as IWidgetOptions)?.page_key?.value) {
          this.innerPageViewConfig = (data[1] as ITypePageViewConfig[])
            .find(config => config.key === (data[0] as IWidgetOptions)?.page_key?.value)?.viewConfig;
        } else this.innerPageViewConfig = (data[0] as IWidgetOptions)?.innerGridConfig?.value;
      });

    this.dpStore.select("widgetAction").pipe(
      switchMap((events: IWidgetEventAction[]) => {
        let displayEvent: IWidgetEventAction = events
          .filter(event => event.options.targetArea === this.widgetListAreaName)
          .find(event => event.actionType === EActionTypes.DISPLAY_WIDGET);

        this.currentDisplayEvent = isEqual(this.currentDisplayEvent, displayEvent) ? undefined : displayEvent;
        return this.dpStore.select("typePageViewConfigs");
      }),
      takeUntil(this.destroy$))
      .subscribe(((typePageConfigs: ITypePageViewConfig[]) => {
          if (this.currentDisplayEvent) {
            //TODO: как только бэк изменит значения, поменять config.key на config.pageUID
            this.displayEventViewConfig = typePageConfigs.find(config => config.key === this.currentDisplayEvent.options.widgetConfig.options.page_key.value);
            if (this.displayEventViewConfig) {
              this.innerPageViewConfig = this.displayEventViewConfig.viewConfig;
              this.cd.detectChanges();
            }
          }
        }
      ));
  }
}
