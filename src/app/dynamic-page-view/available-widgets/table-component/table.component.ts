import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ITabTreeWidgetOptions} from '../../interfaces/ITabTreeWidgetOptions';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {IInitWidgetData} from '../../interfaces/IInitWidgetData';
import {IDynamicTableColumnConfig} from '../../interfaces/IDynamicTableColumnConfig';
import {BehaviorSubject} from 'rxjs';
import {IWidgetTableConfig} from '../../interfaces/IWidgetTableConfig';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  private _widgetOptions: IWidgetTableConfig;

  public data: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  @Input() set widgetOptions(value: IWidgetTableConfig) {
    this._widgetOptions = value;
    console.log('table headerConfig', value);
  }

  get widgetOptions() {
    return this._widgetOptions;
  }
  @Input() set widgetData(value) {
    this.data.next(value);
  }

  ngOnInit() {
  }

  constructor() { }

}
