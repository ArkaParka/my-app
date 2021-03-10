import {ChangeDetectionStrategy, Component, Host, Inject, Input, OnInit, Optional, Self, SkipSelf} from "@angular/core";
import {IDynamicPageViewConfig} from "../../../models/IDynamicPageViewConfig";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";
import {ITypePageViewConfig} from "../../interfaces/ITypePageViewConfig";
import {filter, takeUntil, tap} from "rxjs/operators";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {DP_STORE, WIDGET_DATA, WidgetData} from "../../dynamic-page-services/widgets-factory.service";
import {combineLatest} from "rxjs";
import {IWidgetOptions} from "../../interfaces/IWidgetOptions";

@Component({
  template: `
    <app-widget-list [pageConfig]="innerPageViewConfig"></app-widget-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageViewComponent extends DocumentBaseComponent {
  public innerPageViewConfig: IDynamicPageViewConfig;

  constructor(@Optional() @Inject(WIDGET_DATA) readonly widgetData: WidgetData<any>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService) {
    super();

    combineLatest(this.widgetData.getData(), this.dpStore.select('typePageViewConfigs'))
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if ((data[0] as IWidgetOptions)?.page_key?.value) {
          this.innerPageViewConfig = (data[1] as ITypePageViewConfig[])
            .find(config => config.key === (data[0] as IWidgetOptions)?.page_key?.value)?.viewConfig;
        } else this.innerPageViewConfig = (data[0] as IWidgetOptions)?.innerGridConfig?.value;
      })
  }
}
