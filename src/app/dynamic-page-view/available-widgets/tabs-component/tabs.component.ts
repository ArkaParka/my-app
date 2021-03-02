import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from "@angular/core";
import {ITabTreeWidgetOptions} from "../../interfaces/ITabTreeWidgetOptions";
import {IWidgetConfig} from "../../interfaces/IWidgetConfig";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";
import {mergeMap, switchMap, takeUntil, tap} from "rxjs/operators";
import {IInitWidgetData} from "../../interfaces/IInitWidgetData";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {DP_STORE, WIDGET_DATA, WidgetData} from "../../dynamic-page-services/widgets-factory.service";
import {combineLatest} from "rxjs";

@Component({
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabTreeComponent extends DocumentBaseComponent {
  public tabData: { dataPath: string, data: any }[] = [];
  public tabs: { title: string, config: { widgetConfig: IWidgetConfig } }[] = [];

  constructor(@Optional() @Inject(WIDGET_DATA) readonly widgetData: WidgetData<any>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService) {
    super();

    combineLatest(this.widgetData.getData(), this.dpStore.select('isInitialDataLoaded'))
      .pipe(
        mergeMap(widgetData => {
          this.tabs = widgetData[0]?.tabs?.value;
          return widgetData[1] ? this.dpStore.select('initialWidgetData') : null;
        }),
        tap((initialData: IInitWidgetData[]) => {
          if (initialData)
            this.tabData = initialData
        }),
        takeUntil(this.destroy$))
      .subscribe();

  }

  public getWidgetData(dataPath: string) {
    return this.tabData.find(data => data.dataPath === dataPath);
  }
}
