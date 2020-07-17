import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicMenuService } from '../services/dynamic-menu.service';
import { FieldType } from '@ngx-formly/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, filter, tap, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'select-with-search',
    template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <legend *ngIf="to.description">{{ to.description }}</legend>
    <nz-date-picker
      [nzShowTime]="showTime"
      nzFormat="yyyy-MM-dd HH:mm"
      nzPlaceHolder="Выберите дату/время"
      ngModel
      (ngModelChange)="onChange($event)"
      (nzOnOk)="onOk($event)"
    ></nz-date-picker>
    `
})
export class CustomDataPickerbComponent extends FieldType implements OnInit {

    public showTime = false;

    constructor() {
        super();
    }

    ngOnInit(): void {
        //{ nzFormat: 'HH:mm' }
    }

    public onOk(result: Date | Date[] | null): void {
        this.formControl.setValue(result);
    }

}
