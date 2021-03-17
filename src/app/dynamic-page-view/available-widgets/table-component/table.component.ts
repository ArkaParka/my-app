import {ChangeDetectionStrategy, Component, Inject, Optional} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {IWidgetTableConfig} from '../../interfaces/IWidgetTableConfig';
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/IWIdgetFacrotyInterfaces";

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent extends DocumentBaseComponent {
  public widgetOptions: IWidgetTableConfig = null;
  public widgetData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IWidgetTableConfig>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IWidgetTableConfig, any]) => {
        this.widgetOptions = data[0];
        this.widgetData.next(data[1]);
      });
  }
}
