import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicMenuService } from '../services/dynamic-menu.service';
import { FieldType } from '@ngx-formly/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, filter, tap, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { IfStmt } from '@angular/compiler';

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
