import {ChangeDetectionStrategy, Component, Inject, Optional} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {IWidgetTableConfig} from '../../interfaces/IWidgetTableConfig';
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from '../../dynamic-page-services/IWIdgetFacrotyInterfaces';
import {isArray} from 'ngx-bootstrap/chronos';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';


@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent extends DocumentBaseComponent {
  public widgetOptions: IWidgetTableConfig = null;
  public widgetData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IWidgetTableConfig>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IWidgetTableConfig, any]) => {
        this.widgetOptions = data[0];
        this.widgetData.next(data[1]);
      });
  }

  public selectedRows = [];
  public isChecked: boolean = false;

  public checkboxChecked(obj: any, event: any) {
    if (event.target.checked)
      (isArray(obj)) ? this.selectedRows = obj : this.selectedRows.push(obj);
    else
      (isArray(obj)) ? this.selectedRows = [] : this.selectedRows.splice(this.selectedRows.indexOf(obj), 1);
    this.dpStore.setButtonData({widgetData: this.selectedRows, fieldName: this.widgetOptions.fieldName.value});
  }
}
