import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DynamicMenuService } from '../services/dynamic-menu.service';
import { GridOptions } from 'ag-grid-community';
import { FormGroup } from '@angular/forms';
import {ModalDirective} from "ngx-bootstrap/modal";
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

  public gridOptions: GridOptions = {};
  public rowData;
  public actions: object[];
  public fields: FormlyFieldConfig[];
  public form = new FormGroup({});
  public model: any;
  private data: object;
  private buttonIndicator;
  private gridApi: any;
  public dataChange: BehaviorSubject<any>;
  public options: FormlyFormOptions = {};

  constructor(private dynamicMenuService: DynamicMenuService) {
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
    this.largeModal.show();
  }

  ngOnInit(): void {
    this.workWithConfig();
    this.addData();

  }

  public workWithConfig(): void {
    this.dynamicMenuService.getModulePageConfiguration('staff-module', 'staff.all_person').subscribe(data => {
      this.actions = data.actions;
      this.gridOptions = data.viewConfig.config;
      let schema = data.dataTypes.map(data => {
        return data.forms.map(item => {
          return item.schema;
        });
      });
      this.fields = schema[0];
      console.log('this.fields',   this.fields);
      this.model = {
        phoneInfos: [{ type: null, phone: null }],
        emails: [ null ]
      };
    });
  }

  public addData(): void {
    const bodyForModuleData = {
      action_name: 'staff.all_person',
      order_info: [
        {
          field_path: null,
          order: null
        }
      ],
      page_info: {
        pageIndex: 0,
        pageSize: 10
      }
    };
    this.dynamicMenuService.getModuleData('staff-module', bodyForModuleData).subscribe(data => {
      this.rowData = data.data;
    });
  }

  submit() {
  }

  public hideForm(): void {
    this.largeModal.hide();
  }

  public add(): void {
    const data = this.form.value;
    //data['id'] = null;
    const bodyForFormDataInstance = {
      data: data,
      formKey: 'user_form',
      type: 'UserFormItem'
    }
    this.dynamicMenuService.putFormDataInstance('staff-module', 'user_form', bodyForFormDataInstance).subscribe();
    this.largeModal.hide();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  rowClicked(event) {
    
    //this.data = event.data;
  }

  public delete(): void {
    // const selected = this.gridApi.getSelectedRows();
    this.gridApi.refreshCells();
    this.largeModal.hide();
  }

}
