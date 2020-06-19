import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DynamicMenuService } from '../services/dynamic-menu.service';
import { GridOptions, IDatasource, IGetRowsParams, Module } from 'ag-grid-community';
import { FormGroup } from '@angular/forms';
import {ModalDirective} from "ngx-bootstrap/modal";
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Actions } from '../models/Actions.interface';
import { DataTypes } from '../models/DataTypes.interface';
import { ActivatedRoute } from '@angular/router';
import { NzTableQueryParams, NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
//import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model'

interface ColumnItem {
  name: string;
  nzColumnKey?: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}

@Component({
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.scss' ]
})

export class MenuComponent implements OnInit {

  moduleKey: string;
  configPath: string

  public actions: Actions[];
  private dataTypes: DataTypes[];
  public fields: FormlyFieldConfig[];
  public form = new FormGroup({});
  public model: any = {};
  //public data;
  //TODO: заменить any на нормальную модель
  public putFormData: any = {};
  private hash: string = null;
  private idFieldName = null;
  private id: string;
  private bodyForRequest;
  public confirmMessage;
  private typeForm;
  public viewConfig;
  public options: FormlyFormOptions = {};
  private REQ_ONE;
  private REQ_MULTY;
  private one_id: string = '';
  private multy_id: string[] = [];

  public total = 1;
  listOfModuleData: object[] = [];
  loading = true;
  public pageSize = 10;
  pageIndex = 1;
  public checked = false;
  public indeterminate = false;
  listOfCurrentPageData: object[] = [];
  setOfCheckedId = new Set<string>();
  public listOfColumns: ColumnItem[];

  constructor(private dynamicMenuService: DynamicMenuService, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.moduleKey = params['moduleKey'];
      this.configPath = params['configPath'];
    });
  }

  updateCheckedSet(login: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(login);
      this.REQ_ONE = false;
      this.REQ_MULTY = true;
      this.multy_id.push(login);
      this.oneIdTemplate(this.setOfCheckedId.size, login);
    } else {
      this.setOfCheckedId.delete(login);
      this.multy_id.splice( this.multy_id.indexOf(login), 1);
      this.oneIdTemplate(this.setOfCheckedId.size, login);
    }
    if (this.setOfCheckedId.size == 0) {
      this.REQ_ONE = false;
      this.REQ_MULTY = false;
    }
  }

  oneIdTemplate (size, login) {
    if (size == 1) {
      this.REQ_ONE = true;
      this.one_id = login;
    }
  }

  onItemChecked(login: string, checked: boolean): void {
    this.updateCheckedSet(login, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item[this.idFieldName], value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: object[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item[this.idFieldName]));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item[this.idFieldName])) && !this.checked;
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
    let forms;
    this.dataTypes.map(elem => forms = elem.forms);
    for (let item of this.actions) {
      if (e.target['value'] == item['actionName']) {
        for (let elem of forms) {
          if (item['execConfig']['formKey'] == elem['formKey']) {
            this.putFormData = {
              indicator: e.target['value'],
              formKey: elem['formKey'],
              confirmMessage: item['execConfig']['confirmMessage']
            };
            if (!e.target['value'].includes('delete')) {
              this.fields = [elem['schema']];
            }
            this.largeModal.show();
          }
        }
      }
    }

    if (this.putFormData) {
      this.dataTypes.map(elem => {
        forms = elem.forms;
        elem.forms.filter(item => {
          if(item.formKey == (this.putFormData as any)?.formKey) {
            this.typeForm = elem.type;
          }
        });
      });
      this.bodyForRequest = {
        data: this.form.value,
        formKey: (this.putFormData as any)?.formKey,
        hash: this.hash,
        id: this.id,
        type: this.typeForm
      };

      if (e.target['value']?.includes('edit')) {
        this.getFormDataInstance(this.typeForm);
      }
      this.REQ_ONE = null;
      this.REQ_MULTY = null;
    }
  }

  ngOnInit(): void {
    this.workWithConfig();
  }

  disableFunc(type: string): boolean {
    switch(type) {
      case 'NO_REQ':
        return false;
      case 'REQ_ONE':
        if (this.REQ_ONE) {
          return false;
        } else return true;
      case 'REQ_MULTY':
        if (this.REQ_MULTY) {
          return false;
        } else return true;
      default: break;
    }
  }

  private workWithConfig(): void {
    this.dynamicMenuService.getModulePageConfiguration(this.moduleKey, this.configPath).subscribe(resp => {
      this.viewConfig =  resp.viewConfig;
      this.dataTypes = resp.dataTypes;
      this.actions = resp.actions;
      //this.gridOptions = resp.viewConfig.config;
      this.makeListOfColumns(this.viewConfig.config);
      this.idFieldName = this.viewConfig.config.idFieldName;
    });
    const testModel = {
      phoneInfos: [
          { type: null, phone: null }
      ],
      emails: [ null ]
    };
    this.model = testModel;
  }

  private makeListOfColumns (tableConfig: object): void {
   // console.log('Кофигурация таблицы', tableConfig);
    this.listOfColumns = tableConfig['columnDefs'].map(elem => {
      if (elem.sortable == false) {
        return {
          name: elem.headerName,
          columnKey: elem.field,
        }
      } else {
      return {
        name: elem.headerName,
        columnKey: elem.field,
        sortFn: elem.sortable
      }}
    });
  }
  private addData(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null
    ): void {
    const bodyForGetModuleData = {
      action_name: this.configPath,
      order_info: [
        {
          field_path: sortField,
          order: sortOrder
        }
      ],
      page_info: {
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    };
    this.loading = true;
    this.dynamicMenuService.getModuleData(this.moduleKey, bodyForGetModuleData).subscribe(data => {
      this.loading = false;
      this.total =  data.total_size;
      this.listOfModuleData = data.data;
    });
  }

  submit() { }

  public hideForm(): void {
    this.form.reset();
    this.REQ_ONE = null;
    this.REQ_MULTY = null;
    this.id = null;
    this.largeModal.hide();
  }

  public done(): void {
    if ((this.putFormData as any).indicator.includes('delete')) {
      this.deleteFormDataInstance(this.typeForm);
    } else {
      this.putFormDataInstance();
    }
    this.form.reset();
    this.largeModal.hide();
    this.addData(this.pageIndex, this.pageSize, null, null);
  }

  private putFormDataInstance(): void {
    if ((this.putFormData as any).indicator.includes('create')) {
      delete  this.bodyForRequest.hash;
      delete  this.bodyForRequest.id;
    }
    this.dynamicMenuService.putFormDataInstance(this.moduleKey, this.bodyForRequest).subscribe();
  }

  private getFormDataInstance(typeForm: string): void {
    this.dynamicMenuService.getFormDataInstance( this.moduleKey, (this.putFormData as any).formKey, typeForm, this.one_id).subscribe(data => {
      this.model = data.data;
      this.hash = data.hash;
      this.id = data.id;
      this.model.phoneInfos = this.model.phoneInfos.length > 0 ? this.model.phoneInfos : { type: null, phone: null} ;
      this.model.emails = this.model.emails.length > 0 ? this.model.emails : [null];
    });
    this.form.reset();
  }

  private deleteFormDataInstance(typeForm: string): void {
    this.multy_id.map(elem => {
      this.dynamicMenuService.deleteFormDataInstance( this.moduleKey, (this.putFormData as any).formKey, typeForm, elem).subscribe();
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.addData(pageIndex, pageSize, sortField, sortOrder);
  }
}
