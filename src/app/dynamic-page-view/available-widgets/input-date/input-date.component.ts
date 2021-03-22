import { Component, OnInit } from '@angular/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-input-date',
  template: '<nz-date-picker [(ngModel)]="date" nzFormat="dd.MM.yyyy"></nz-date-picker>',
  styles: [`.cdk-overlay-pane {z-index: 3000!important;}`],
})

export class InputDateComponent implements OnInit {
  date: any;

  constructor() { }

  ngOnInit(): void {
  }

}
