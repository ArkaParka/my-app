import {IFormWidget} from '../../interfaces/IFormWidget';
import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {filter, takeUntil, tap} from 'rxjs/operators';
import {EActionTypes} from '../../interfaces/EEventTypes';
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {isArray} from "ngx-bootstrap/chronos";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends DocumentBaseComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { config: IFormWidget, widgetData: any, action: string },
              private dpStore: DynamicPageStoreService) {
    super();
    this.dpStore.setState({widgetData: data.widgetData});
    console.log('modal data', data);
  }

  get updateData() {
    console.log('updateData', this.data.widgetData);
    const resIdArr = [];
    if (this.data.action === EActionTypes.DELETE) {
      this.data.widgetData.forEach((item, index) => {
        resIdArr[index] = {id: item.id};
      });
      return resIdArr;
    }
    return this.data.widgetData;
  }

  public submit() {
    const length = this.data.config.pageViewConfig.areasConfig
      .map(area => area.widgetConfig.options.fieldName).length;
    console.log("modal fields count", length);
    this.dpStore.setState({getWidgetDataTrigger: true});
    this.dpStore.select('modalWidgetsData').pipe(
      tap(data => {
        console.log('data', data);
        console.log('length', length);
      }),
      filter(data => !!data),
      filter(data => data.length === length),
      takeUntil(this.destroy$)
    ).subscribe(data => {
      console.log('data edit', data, this.data.widgetData);
      if (!this.data.widgetData) {
        this.data.widgetData = {};
      }
      data.forEach(widgetData => this.data.widgetData[widgetData.key] = widgetData.value);
      this.dpStore.setState({getWidgetDataTrigger: false, modalWidgetsData: []});
      this.dialogRef.close(this.updateData);
    });

    if (isArray(this.data.widgetData))
      this.dialogRef.close(this.updateData);
  }

  public hideModal(): void {
    this.dialogRef.close(null);
  }
}
