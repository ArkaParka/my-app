import {Component, OnInit, ViewChild} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'formly-ag-grid-form-cell',
  template: `<formly-field [field]="getField()"></formly-field>`,
})
export class GridFormlyFormCellComponent implements ICellRendererAngularComp, OnInit {
  private params: any;

  ngOnInit() {
    console.log(this.params)
  }

  agInit(params: any): void {
    this.params = params;
    this.getField();
  }

  refresh(): boolean {
    return false;
  }

  getField(): FormlyFieldConfig {
    const rowIndex = this.params.rowIndex;
    const prop = this.params.colDef.field;
    const fg =  this.params.context.parentField.fieldGroup;

    return fg[rowIndex].fieldGroup.find(f => f.key === prop);
  }
}

