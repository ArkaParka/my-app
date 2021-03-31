import {IFormWidget} from '../../interfaces/IFormWidget';
import {Component, Inject, EventEmitter, Output, Optional} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {filter, map, switchMap, tap} from 'rxjs/operators';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { config: IFormWidget, widgetData: any },
              private dpStore: DynamicPageStoreService) {
    console.log(data);
    // this.dpStore.setState({widgetData: data.widgetData});
  }

  private newWidgetsData = {};

  get updateData() {
    return this.newWidgetsData;
  }

  public submit() {
    const length = this.data.config.pageViewConfig.areasConfig
      .map(area => area.widgetConfig.options.fieldName).length;
    this.dpStore.setState({getWidgetDataTrigger: true});
    this.dpStore.select('modalWidgetsData').pipe(
      filter(data => !!data),
      filter(data => data.length === length)
    ).subscribe(data => {
      data.forEach(widgetData => this.newWidgetsData[widgetData.key] = widgetData.value);
      this.dpStore.setState({getWidgetDataTrigger: false, modalWidgetsData: []});
    });

    this.dialogRef.close(this.updateData);
  }

  public hideModal(): void {
    this.dialogRef.close(null);
  }
}
