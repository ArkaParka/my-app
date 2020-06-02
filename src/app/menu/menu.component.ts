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
  public rowData: any;
  public actions: Actions[];
  private dataTypes: DataTypes[];
  public fields: FormlyFieldConfig[];
  public form = new FormGroup({});
  public model: any = {};
  private data: object;
  private putFormData;
  private hash: string = null;
  private id: number = null;
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
            this.largeModal.show();
          }
        }
      }
    }
  }

  ngOnInit(): void {
    this.workWithConfig();
    this.addData();
  }

  public workWithConfig(): void {
    this.dynamicMenuService.getModulePageConfiguration("staff-module", "staff.all_person").subscribe(resp => {
      this.gridOptions = resp.viewConfig.config;
      this.dataTypes = resp.dataTypes;
      this.actions = resp.actions;
      console.log(this.dataTypes)
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
      console.log('getModuleData', data.data);
      this.rowData = data.data;
    });
  }

  submit() {
  }

  public hideForm(): void {
    this.largeModal.hide();
  }

  public done(): void {
    let typeForm;
    this.dataTypes.map(elem => {
      elem.forms.filter(item => {
        if(item.formKey == this.putFormData?.formKey) {
          typeForm = elem.type;
        }
      });
    });
    if (this.putFormData.indicator.includes('create')) {
      this.create(typeForm);
    }
    if (this.putFormData.indicator.includes('edit')) {
      this.edit(typeForm);
    }
    if (this.putFormData.indicator.includes('delete')) {
      this.delete(typeForm);
    }
    this.largeModal.hide();
  }

  private create(typeForm: string): void {
    const body = {
      data: this.form.value,
      formKey: this.putFormData.formKey,
      hash: this.hash, //удалить если не заработает
      id: this.id, //удалить если не заработатет
      type: typeForm
    };

    this.dynamicMenuService.putFormDataInstance("staff-module", body).subscribe();
    this.addData();
    this.gridApi.refreshCells({force : true});
  }

  private edit(typeForm: string): void {
    // this.dynamicMenuService.getFormDataInstance('staff-module', 'staff.all_person', typeForm, this.id).subscribe(data => {

    // });
  }

  private delete(typeForm: string): void {

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  rowClicked(event) {
    this.data = event.data;
    console.log('rowClicked', this.data);
  }

}
