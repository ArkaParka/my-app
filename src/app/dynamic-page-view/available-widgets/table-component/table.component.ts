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
  private _widgetOptions: IWidgetTableConfig;
  public data: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  get widgetOptions() {
    return this._widgetOptions;
  }

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<any>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IWidgetTableConfig, any]) => {
        this._widgetOptions = data[0];
        this.data.next(data[1]);
      });
  }
}
