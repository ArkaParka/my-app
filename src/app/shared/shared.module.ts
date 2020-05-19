import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FormlyFieldConfig, FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {ObjectTypeComponent} from "./object.type";
import {ArrayTypeComponent} from "./array.type";
import {NullTypeComponent} from "./null.type";
import { MultiSchemaTypeComponent } from "./multischema.type";
import {CommonModule} from "@angular/common";
import {AgGridModule} from "ag-grid-angular";
import {GridFormlyCellComponent} from "./grid-formly-cell.component";
import {GridTypeComponent} from "./grid.type";
import {FormlyFieldButton} from "./button-type.component";
import {GridFormlyFormCellComponent} from "./grid-formly-form-cell.component";
import {CustomGridTypeComponent} from "./custom-grid.type";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import {ModalModule} from "ngx-bootstrap/modal";
import {DatatableType} from "./datatable/datatable.type";
import { CustomSelectTypeComponent } from './custom-select.type';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { SearchDefaultComponent } from './select-with-search-default.type';

export function minItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have fewer than ${field.templateOptions.minItems} items`;
}

export function maxItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.templateOptions.maxItems} items`;
}

export function minlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be shorter than ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be longer than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `should be >= ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field: FormlyFieldConfig) {
  return `should be <= ${field.templateOptions.max}`;
}

export function multipleOfValidationMessage(err, field: FormlyFieldConfig) {
  return `should be multiple of ${field.templateOptions.step}`;
}

export function exclusiveMinimumValidationMessage(err, field: FormlyFieldConfig) {
  return `should be > ${field.templateOptions.step}`;
}

export function exclusiveMaximumValidationMessage(err, field: FormlyFieldConfig) {
  return `should be < ${field.templateOptions.step}`;
}

export function constValidationMessage(err, field: FormlyFieldConfig) {
  return `should be equal to constant "${field.templateOptions.const}"`;
}

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    ModalModule.forRoot(),
    AgGridModule.withComponents([GridFormlyCellComponent, GridFormlyFormCellComponent]),
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Это поле обязательно' },
        { name: 'null', message: 'should be null' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'multipleOf', message: multipleOfValidationMessage },
        { name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage },
        { name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage },
        { name: 'minItems', message: minItemsValidationMessage },
        { name: 'maxItems', message: maxItemsValidationMessage },
        { name: 'uniqueItems', message: 'should NOT have duplicate items' },
        { name: 'const', message: constValidationMessage },
      ],
      types: [
        { name: 'string', extends: 'input' },
        {
          name: 'datatable2',
          component: DatatableType
        },
        {
          name: 'datatable',
          component: CustomGridTypeComponent,
          defaultOptions: {
            templateOptions: {
              columnMode: 'force',
              rowHeight: 'auto',
              headerHeight: '40',
              footerHeight: '40',
              limit: '10',
              scrollbarH: 'true',
              reorderable: 'reorderable',
            },
          },
        },
        {
          name: 'grid',
          component: GridTypeComponent,
          defaultOptions: {
            templateOptions: {
              width: '100%',
              height: '400px',
            },
          },
        },
        {
          name: 'button',
          component: FormlyFieldButton,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              btnType: 'default',
              type: 'button',
            },
          },
        },
        {
          name: 'grid',
          component: GridTypeComponent,
          defaultOptions: {
            templateOptions: {
              width: '100%',
              height: '400px',
            },
          },
        },
        { name: 'custom-input', component: GridFormlyFormCellComponent },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        { name: 'boolean', extends: 'checkbox' },
        { name: 'enum', extends: 'select' },
        { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'custom-select-with-search', component: CustomSelectTypeComponent },
        { name: 'select-with-search', component: SearchDefaultComponent },
      ],
    }),
    FormlyBootstrapModule,
    HttpClientModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    NgSelectModule,
    NgOptionHighlightModule,
    FormsModule
  ],
  declarations: [
    NullTypeComponent,
    ArrayTypeComponent,
    ObjectTypeComponent,
    MultiSchemaTypeComponent,
    GridFormlyCellComponent,
    GridTypeComponent,
    FormlyFieldButton,
    GridFormlyFormCellComponent,
    CustomGridTypeComponent,
    DatatableType,
    CustomSelectTypeComponent,
    SearchDefaultComponent
  ],
  exports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    HttpClientModule,
    GridFormlyCellComponent,
    GridTypeComponent,
    FormlyFieldButton,
    GridFormlyFormCellComponent,
    CustomGridTypeComponent,
    NgxDatatableModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    AgGridModule,
    ModalModule,
    NgSelectModule,
    NgOptionHighlightModule,
    FormsModule
  ]
})
export class SharedModule {}
