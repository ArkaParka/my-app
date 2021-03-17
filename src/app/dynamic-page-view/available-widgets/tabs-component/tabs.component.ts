import {ChangeDetectionStrategy, Component, Inject, Optional, QueryList, ViewChildren} from "@angular/core";
import {IWidgetConfig} from "../../interfaces/IWidgetConfig";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";
import {filter, switchMap} from "rxjs/operators";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {combineLatest} from "rxjs";
import {TabDirective} from 'ngx-bootstrap/tabs';
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/IWIdgetFacrotyInterfaces";

@Component({
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabTreeComponent extends DocumentBaseComponent {
  public tabData: { dataPath: string, data: any }[] = [];
  public tabs: { title: string, config: { widgetConfig: IWidgetConfig } }[] = [];

  private index: number;
  @ViewChildren(TabDirective) tabArray: QueryList<TabDirective>;

  onChanged(index: number) {
    this.index = index;
    this.tabArray.toArray().forEach(tab => tab.active = false);
    this.tabArray.toArray()[this.index].active = true;
  }

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<any>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService) {
    super();

    this.dpStore.select('isInitialDataLoaded').pipe(
      filter(data => !!data),
      switchMap(() => combineLatest(this.widgetOptionsGetter.getOptions(), this.dpStore.select('initialWidgetData')))
    ).subscribe(([widgetData, initialData]) => {
      this.tabs = widgetData?.tabs?.value;
      this.tabData = initialData;
    });
  }

  public getWidgetData(dataPath: string) {
    return this.tabData.find(data => data.dataPath === dataPath);
  }
}
