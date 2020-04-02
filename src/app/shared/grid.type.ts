import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { GridOptions } from 'ag-grid-community';
import { GridFormlyCellComponent } from './grid-formly-cell.component';
import {GridFormlyFormCellComponent} from './grid-formly-form-cell.component';

@Component({
  selector: 'formly-field-grid',
  template: `
    <div [ngStyle]="style">
      <ag-grid-angular
          #agGrid
          style="width: 100%; height: 100%"
          class="className"
          [gridOptions]="gridOptions"
          [rowData]="model"
          [editType]="'fullRow'"
          (cellValueChanged)="onCellValueChanged($event)"
          (firstDataRendered)="onFirstDataRendered($event)">
      </ag-grid-angular>
    </div>
  `,
})

export class GridTypeComponent extends FieldArrayType implements OnInit {
  // TODO: add explicit constructor

  @ViewChild('agGrid') agGrid: TemplateRef<any>;

  gridOptions: GridOptions;
  style: any = {};

  ngOnInit() {
    console.log(this)
    this.style = {
      width: this.to.width,
      height: this.to.height,
    };
    console.log(this.to)
    // map cell Renderer to Formly Component
    this.to.gridOptions.columnDefs.forEach(column => column.cellRendererFramework = GridFormlyFormCellComponent);

    // set grid options and context of the parent formly field
    const gridOptions: GridOptions = this.to.gridOptions || {};
    gridOptions.context = {
      parentField: this.field,
    };

    this.gridOptions = gridOptions;
  }


  onCellValueChanged($event) {
    console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}

