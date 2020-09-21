import {Component, Input, OnInit} from "@angular/core";
import {ITabTreeWidgetOptions} from "../../interfaces/ITabTreeWidgetOptions";
import {IWidgetConfig} from "../../interfaces/IWidgetConfig";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";
import {switchMap, tap} from "rxjs/operators";
import {IInitWidgetData} from "../../interfaces/IInitWidgetData";

@Component({
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabTreeComponent {
  private _widgetOptions: ITabTreeWidgetOptions;
  public widgetData: { dataPath: string, data: any }[] = [];

  @Input() set widgetOptions(value: ITabTreeWidgetOptions) {
    this._widgetOptions = value;
    this.tabs = this.widgetOptions.tabs.value;

    this.dpStore.select('isInitialDataLoaded').pipe(
      switchMap((isInitialData: boolean) => {
        return isInitialData ? this.dpStore.select('initialWidgetData') : null;
      }),
      tap((initialData: IInitWidgetData[]) => {
        if (initialData) {
          this.widgetData = initialData;
        }
      })
    ).subscribe();
  };

  get widgetOptions() {
    return this._widgetOptions;
  }

  private tabs: { title: string, config: { widgetConfig: IWidgetConfig } }[] = [];

  constructor(private dpStore: DynamicPageStoreService) {
  }

  public getWidgetData(dataPath: string) {
    return this.widgetData.find(data => data.dataPath === dataPath);
  }
}
