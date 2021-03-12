import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  QueryList,
  ViewChildren
} from '@angular/core';
import {ITabTreeWidgetOptions} from '../../interfaces/ITabTreeWidgetOptions';
import {IWidgetConfig} from '../../interfaces/IWidgetConfig';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {IInitWidgetData} from '../../interfaces/IInitWidgetData';
import {DocumentBaseComponent} from '../../../containers/document-base.component';
import {TabDirective} from 'ngx-bootstrap/tabs';

@Component({
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabTreeComponent extends DocumentBaseComponent implements AfterViewInit {
  private _widgetOptions: ITabTreeWidgetOptions;
  public tabData: { dataPath: string, data: any }[] = [];
  public tabs: { title: string, config: { widgetConfig: IWidgetConfig } }[] = [];

  private index: number;
  @ViewChildren(TabDirective) tabArray: QueryList<TabDirective>;

  onChanged(index: number) {
    this.index = index;
    this.tabArray.toArray().forEach(tab => tab.active = false);
    this.tabArray.toArray()[this.index].active = true;
  }

  ngAfterViewInit() {}

  @Input() set widgetOptions(value: ITabTreeWidgetOptions) {
    this._widgetOptions = value;
    this.tabs = this.widgetOptions.tabs.value;

    this.dpStore.select('isInitialDataLoaded').pipe(
      switchMap((isInitialData: boolean) => {
        return isInitialData ? this.dpStore.select('initialWidgetData') : null;
      }),
      tap((initialData: IInitWidgetData[]) => {
        if (initialData) {
          this.tabData = initialData;
        }
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  get widgetOptions() {
    return this._widgetOptions;
  }

  constructor(private dpStore: DynamicPageStoreService) {
    super();
  }

  public getWidgetData(dataPath: string) {
    return this.tabData.find(data => data.dataPath === dataPath);
  }
}
