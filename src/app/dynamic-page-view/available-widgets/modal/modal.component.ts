import {IFormWidget} from '../../interfaces/IFormWidget';
import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {filter, tap} from 'rxjs/operators';
import {EActionTypes} from '../../interfaces/EEventTypes';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { config: IFormWidget, widgetData: any[], action: string },
              private dpStore: DynamicPageStoreService) {
    this.dpStore.setState({widgetData: data.widgetData});
  }

  get updateData() {
    const resIdArr = [];
    if (this.data.action === EActionTypes.DELETE) {
      this.data.widgetData.forEach((item, index) => resIdArr[index] = {id: item.id});
      console.log('resArr', resIdArr);
      return resIdArr;
    }
    return this.data.widgetData[0];
  }

  public submit() {
    const length = this.data.config.pageViewConfig.areasConfig
      .map(area => area.widgetConfig.options.fieldName).length;
    this.dpStore.setState({getWidgetDataTrigger: true});
    this.dpStore.select('modalWidgetsData').pipe(
      filter(data => !!data),
      filter(data => data.length === length)
    ).subscribe(data => {
      console.log('data', this.data.widgetData);
      if (!this.data.widgetData) {
        this.data.widgetData[0] = {};
      }
      data.forEach(widgetData => this.data.widgetData[0][widgetData.key] = widgetData.value);
      this.dpStore.setState({getWidgetDataTrigger: false, modalWidgetsData: []});
    });

    this.dialogRef.close(this.updateData);
  }

  public hideModal(): void {
    this.dialogRef.close(null);
  }
}
