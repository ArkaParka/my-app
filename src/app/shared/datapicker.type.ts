import { Component, OnInit, OnDestroy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'custom-datepicker',
    template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <legend *ngIf="to.description">{{ to.description }}</legend>
    <nz-date-picker
      [nzShowTime]="showTime"
      nzFormat="dd.MM.yyyy"
      nzPlaceHolder="Выберите дату/время"
      ngModel
      (ngModelChange)="onChange($event)"
      (nzOnOk)="onChange($event)"
    ></nz-date-picker>
    `
})
export class CustomDatePickerbComponent extends FieldType implements OnInit {

    public showTime: any = false;

    constructor() {
        super();
    }

    ngOnInit(): void {
        if ((this.field as any).widgetOptions.showTime == true) {
            this.showTime = { nzFormat: 'HH:mm' };
        }
    }

    public onChange(result: string): void {
        if (result) {
            console.log('Selected Time: ', result);
            if ((this.field as any).widgetOptions.showTime == true) {
                this.formControl.setValue(result.toLocaleString().substring(0, 10));
            } else  this.formControl.setValue(result.toLocaleString());
        }
      }

}
