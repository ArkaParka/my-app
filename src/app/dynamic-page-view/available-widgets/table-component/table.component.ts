import {Component, Input, OnInit} from '@angular/core';
import {ITabTreeWidgetOptions} from '../../interfaces/ITabTreeWidgetOptions';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {IInitWidgetData} from '../../interfaces/IInitWidgetData';
import {IDynamicTableColumnConfig} from '../../interfaces/IDynamicTableColumnConfig';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  private _widgetOptions: {headerConfig: IDynamicTableColumnConfig[]};

  @Input() set widgetOptions(value: {headerConfig: IDynamicTableColumnConfig[]}) {
    this._widgetOptions = value;
  }

  get widgetOptions() {
    return this._widgetOptions;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
