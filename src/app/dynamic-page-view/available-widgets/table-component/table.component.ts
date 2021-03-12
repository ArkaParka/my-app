import {ChangeDetectionStrategy, Component, Inject, Optional} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {IWidgetTableConfig} from '../../interfaces/IWidgetTableConfig';
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";
import {DocumentBaseComponent} from "../../../containers/document-base.component";

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent extends DocumentBaseComponent {
  private _widgetOptions: BehaviorSubject<IWidgetTableConfig> = new BehaviorSubject<IWidgetTableConfig>(null);
  public _widgetData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  public get widgetOptions(): IWidgetTableConfig {
    return this._widgetOptions.getValue();
  }

  public get widgetData(): any {
    return this._widgetData.getValue();
  }

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IWidgetTableConfig>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IWidgetTableConfig, any]) => {
        this._widgetOptions.next(data[0]);
        this._widgetData.next(data[1]);
      });
  }
}
