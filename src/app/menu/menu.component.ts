import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DynamicMenuService } from '../services/dynamic-menu.service';
import { GridOptions } from 'ag-grid-community';
import { FormGroup } from '@angular/forms';
import {ModalDirective} from "ngx-bootstrap/modal";
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { Actions } from '../models/Actions.interface';
import { DataTypes } from '../models/DataTypes.interface';

@Component({
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

  public gridOptions: GridOptions = {};
  public rowData: object[] = [];
  public actions: Actions[];
  private dataTypes: DataTypes[];
  public fields: FormlyFieldConfig[];
  public form = new FormGroup({});
  public model: any = {};
  public data;
  public putFormData;
  private hash: string = null;
  private idFieldName = null;
  private id: number;
  private bodyForRequest;
  public confirmMessage;
  private typeForm;
  public viewConfig;
  private gridApi: any;
  public options: FormlyFormOptions = {};
  public deleteIndicator;
  private testModel = {
    phoneInfos: [
        { type: null, phone: null }
    ],
    emails: [ null ]
  };

  constructor(private dynamicMenuService: DynamicMenuService) {
    this.gridOptions = {};
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('warningModal') public warningModal: ModalDirective;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
    let forms;
    this.dataTypes.map(elem => forms = elem.forms);
    //TODO: отрефакторить это дерьмо
    for (let item of this.actions) {
      if (e.target['value'] == item['actionName']) {
        for (let elem of forms) {
          if (item['execConfig']['formKey'] == elem['formKey'] && (this.data || e.target['value'].includes('create'))) {
            this.confirmMessage = null;
            console.log('Нажатая кнопка', e.target['value'])
            this.putFormData = {
              indicator: e.target['value'],
              formKey: elem['formKey']
            };
            this.fields = [elem['schema']];
            this.largeModal.show();
          } else {
            if (item['execConfig']['confirmMessage'] && e.target['value'].includes('delete') && this.data) {
              this.confirmMessage = item['execConfig']['confirmMessage'];
              this.putFormData = {
                indicator: e.target['value']
              };
              this.largeModal.show();
            } else this.warningModal.show();
          }
        }  
      } 
    }

    if(this.putFormData && this.data) {
      this.dataTypes.map(elem => {
        forms = elem.forms
        elem.forms.filter(item => {
          if(item.formKey == this.putFormData?.formKey) {
            this.typeForm = elem.type;
          }
        });
      });
      this.bodyForRequest = {
        data: this.form.value,
        formKey: this.putFormData.formKey,
        hash: this.hash,
        id: this.id, 
        type: this.typeForm
      };
      this.idFieldName = this.viewConfig.config.idFieldName;
      if (e.target['value']?.includes('edit')) {
        this.edit(this.typeForm);
      } 
    }
  }

  ngOnInit(): void {
    this.workWithConfig();
    this.addData();
  }

  public workWithConfig(): void {
    this.dynamicMenuService.getModulePageConfiguration("staff-module", "staff.all_person").subscribe(resp => {
      this.viewConfig =  resp.viewConfig;
      this.dataTypes = resp.dataTypes;
      this.actions = resp.actions;
      this.gridOptions = this.viewConfig.config;
    });
    this.model = this.testModel;
  }

  public addData(): void {
    this.dynamicMenuService.getModuleData('staff-module', 'staff.all_person', {}).subscribe(data => {
      this.rowData = data.data;
    });
  }

  submit() {
  }

  public hideForm(): void {
    this.form.reset();
    this.data = null;
    this.largeModal.hide();
    this.warningModal.hide();
  }

  public done(): void {
    if (this.putFormData.indicator.includes('delete')) {
      this.delete(this.typeForm);
    }
    this.create();
    this.largeModal.hide();
  }

  private create(): void {
    if (this.putFormData.indicator.includes('create')) {
      delete  this.bodyForRequest.hash;
      delete  this.bodyForRequest.id;
    }

    console.log('Тело для запроса на сервер', this.bodyForRequest);

    this.dynamicMenuService.putFormDataInstance("staff-module", this.bodyForRequest).subscribe(data => {
      console.log('Отвте от сервера', data);
      //TODO: нужно мутировать данныне под формат таблицы
      // this.rowData.push(data.data);
      // this.gridApi.setRowData(this.rowData);
      // this.gridApi.refreshCells({force : true});
    });
    this.addData();
    this.gridApi.refreshCells({force : true});       
  }

  private edit(typeForm: string): void {
    this.id = this.data[this.idFieldName];
    this.dynamicMenuService.getFormDataInstance('staff-module', this.putFormData.formKey, typeForm, this.id).subscribe(data => {
      this.model = data.data;
      this.hash = data.hash;
      this.id = data.id;
      this.model.phoneInfos = this.model.phoneInfos.length > 0 ? this.model.phoneInfos : { type: null, phone: null} ;
      this.model.emails = this.model.emails.length > 0 ? this.model.emails : [null];
    });
    this.form.reset();
  }

  private delete(typeForm: string): void {
    this.dynamicMenuService.deleteFormDataInstance('staff-module', this.putFormData.formKey, typeForm, this.id).subscribe();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  rowClicked(event) {
    this.data = event.data;
  }

}
