import {IFormWidget} from '../../interfaces/IFormWidget';
import {Component, Inject, EventEmitter, Output, Optional} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DP_STORE} from '../../dynamic-page-services/IWIdgetFacrotyInterfaces';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {filter, map, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IFormWidget,
              private dpStore: DynamicPageStoreService) {
    console.log('modal data', data);
  }

  get updateData() {
    return this.data;
  }

  public submit() {
    console.log('modal data', this.updateData);
    const length = this.data.pageViewConfig.areasConfig
      .map(area => area.widgetConfig.options.fieldName).length;
    this.dpStore.setState({getWidgetDataTrigger: true});
    this.dpStore.select('widgetsData').pipe(
      filter(data => !!data),
      filter(data => data.length === length)
    ).subscribe(data => {
      const newWidgetsData = {};
      data.forEach(widgetData => newWidgetsData[widgetData.key] = widgetData.value);
      console.log('newWidgetsData', newWidgetsData);
      this.dpStore.setState({getWidgetDataTrigger: false, widgetsData: []});
    });

    this.dialogRef.close(this.updateData);
  }

  public hideModal(): void {
    this.dialogRef.close(null);
  }
}
