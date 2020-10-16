import {Component, HostBinding, Input} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {IWidgetConfig} from "../interfaces/IWidgetConfig";
import {IWidgetEventAction} from "../interfaces/IWidgetEventAction";
import {mergeMap, switchMap, takeUntil, tap} from "rxjs/operators";
import {ITypePageViewConfig} from "../interfaces/ITypePageViewConfig";
import {DynamicPageStoreService} from "../dynamic-page-services/dynamic-page-store.service";
import {EActionTypes} from "../interfaces/EActionTypes";
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import {IAreasConfig} from "../interfaces/IAreasConfig";
import {DocumentBaseComponent} from "../../containers/document-base.component";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent extends DocumentBaseComponent {

  private _widgetConfig: IWidgetConfig = null;
  private _gridAreaName: string = null;
  private _columnFlow: string = null;
  private currentDisplayEvent: IWidgetEventAction = null;
  private displayEventViewConfig: ITypePageViewConfig = null;

  @HostBinding('style.grid-area') gridArea;
  @HostBinding('style.display') display;
  @HostBinding('style.grid-template-areas') areaGridTemplate;
  @HostBinding('style.grid-template-columns') gridTemplateColumns;
  @HostBinding('style.grid-template-rows') gridTemplateRows;
  @HostBinding('style.justify-items') justifyItems;

  constructor(private sanitizer: DomSanitizer,
              private dpStore: DynamicPageStoreService) {
    super();
  }

  @Input('areaConfig') set areaConfig(value: IAreasConfig) {
    this._widgetConfig = value.widgetConfig;
    this._gridAreaName = value.areaName;
    this._columnFlow = value.widgetFlow;
  }

  get gridAreaName() {
    return this._gridAreaName;
  }

  get columnFlow() {
    return this._columnFlow;
  }

  get widgetConfig() {
    return this._widgetConfig;
  }

  ngOnInit(): void {
    this.gridArea = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaName}`);

    let columnFlow = this.columnFlow === 'left' ? 'start' : this.columnFlow === 'right' ? 'end' : this.columnFlow === 'auto' ? 'center' : null;
    this.justifyItems = this.sanitizer.bypassSecurityTrustStyle(`${columnFlow}`);

    this.dpStore.select("widgetAction").pipe(
      switchMap((events: IWidgetEventAction[]) => {
        let displayEvent: IWidgetEventAction = events
          .filter(event => event.options.targetArea === this.gridAreaName)
          .find(event => event.actionType === EActionTypes.DISPLAY_WIDGET);
        this.currentDisplayEvent = isEqual(this.currentDisplayEvent, displayEvent) ? undefined : displayEvent;
        return this.dpStore.select("typePageViewConfigs");
      }),
      tap((typePageConfigs: ITypePageViewConfig[]) => {
        if (this.currentDisplayEvent) {
          //TODO: как только бэк изменит значения, поменять config.key на config.pageUID
          this.displayEventViewConfig = typePageConfigs.find(config => config.key === this.currentDisplayEvent.options.widgetConfig.options.page_key.value);
          if (this.displayEventViewConfig) {
            this._widgetConfig = {
              type: 'INNER_GRID',
              options: {innerGridConfig: {value: this.displayEventViewConfig.viewConfig}}
            };
          }
        }
      }),
      takeUntil(this.destroy$)
    ).subscribe();

  }
}
