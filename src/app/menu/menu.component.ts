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
  private data;
  private putFormData;
  private hash: string = null;
  private idFieldName = null;
  private id: number = null;
  private bodyForRequest;
  public confirmMessage;
  private typeForm;
  public viewConfig;
  private gridApi: any;
  public dataChange: BehaviorSubject<any>;
  public options: FormlyFormOptions = {};

  constructor(private dynamicMenuService: DynamicMenuService) {
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
    let forms;
    this.dataTypes.map(elem => forms = elem.forms);

    for(let item of this.actions) {
      if (e.target['value'] == item['actionName']) {
        for(let elem of forms) {
          if (item['execConfig']['formKey'] == elem['formKey']) {
            this.putFormData = {
              indicator: e.target['value'],
              formKey: elem['formKey']
            };
            this.fields = [elem['schema']];
            console.log('this.form.value', this.form.value);
            this.form.reset();
            this.largeModal.show();
          }
        }
        if (item['execConfig']['confirmMessage']) {
          this.confirmMessage = item['execConfig']['confirmMessage'];
          this.putFormData = {
            indicator: e.target['value']
          };
          this.largeModal.show();
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
      if (this.putFormData.indicator.includes('edit')) {
        console.log(this.putFormData.indicator);
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
    
    
    const testModel = {
      "phoneInfos": [
          { "type": null, "phone": null }
      ],
      "emails": [ null ]
    };
    this.model = testModel;
  }

  public addData(): void {
    this.dynamicMenuService.getModuleData('staff-module', 'staff.all_person', {}).subscribe(data => {
      this.rowData = data.data;
    });
  }

  submit() {
  }

  public hideForm(): void {
    this.largeModal.hide();
  }

  public done(): void {
    this.create();
    if (this.putFormData.indicator.includes('delete')) {
      this.delete(this.typeForm);
    }
    this.largeModal.hide();
  }

  private create(): void {
    

    if (this.putFormData.indicator.includes('create')) {
      delete  this.bodyForRequest.hash;
      delete  this.bodyForRequest.id;
    }

    this.dynamicMenuService.putFormDataInstance("staff-module", this.bodyForRequest).subscribe(data => {
      console.log('Отвте от сервера', data);
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
    });
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
