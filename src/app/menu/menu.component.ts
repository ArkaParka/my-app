import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DynamicMenuService } from '../services/dynamic-menu.service';
import { GridOptions } from 'ag-grid-community';
import { FormGroup } from '@angular/forms';
import {ModalDirective} from "ngx-bootstrap/modal";
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Actions } from '../models/Actions.interface';
import { DataTypes } from '../models/DataTypes.interface';
import { Subject, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

  moduleKey: string;
  configPath: string

  public gridOptions: GridOptions;
  public rowData: object[] = [];
  public actions: Actions[];
  private dataTypes: DataTypes[];
  public fields: FormlyFieldConfig[];
  public form = new FormGroup({});
  public model: any = {};
  public putFormData: object = {};
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
  public REQ_ONE;
  public REQ_MULTY;
  public NO_REQ = null;
  private currentPage;
  private getPageSize;
  private sortModel;


  constructor(private dynamicMenuService: DynamicMenuService, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.moduleKey = params['moduleKey'];
      this.configPath = params['configPath'];
    });
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('warningModal') public warningModal: ModalDirective;
  @ViewChild('pageSize') public pageSize: ElementRef;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
    let forms;
    this.dataTypes.map(elem => forms = elem.forms);
    //TODO: отрефакторить это дерьмо
    for (let item of this.actions) {
      if (e.target['value'] == item['actionName']) {
        for (let elem of forms) {
          if (item['execConfig']['formKey'] == elem['formKey'] && (this.REQ_ONE || e.target['value'].includes('create'))) {
            this.putFormData = {
              indicator: e.target['value'],
              formKey: elem['formKey'],
              confirmMessage: item['execConfig']['confirmMessage']
            };
            if (!e.target['value'].includes('delete')) {
              this.fields = [elem['schema']];
            }
            this.largeModal.show();
          } else this.warningModal.show();
        }  
      } 
    }

    if(this.putFormData && this.REQ_ONE) {
      this.dataTypes.map(elem => {
        forms = elem.forms
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
      this.idFieldName = this.viewConfig.config.idFieldName;
      if (e.target['value']?.includes('edit')) {
        this.getFormDataInstance(this.typeForm);
      } 
    }
  }

  ngOnInit(): void {
    this.workWithConfig();
    this.addData();
  }

  disableFunc(type: string): boolean {
    switch(type) {
      case 'NO_REQ':
        return false;
        break;
      case 'REQ_ONE':
        if(this.REQ_ONE) {
          return false;
        } else return true;
        break;
      case 'REQ_MULTY':
        if(this.REQ_MULTY) {
          return false;
        } else return true;
        break;
      default: break;
    }
  }

  public workWithConfig(): void {
    this.dynamicMenuService.getModulePageConfiguration(this.moduleKey, this.configPath).subscribe(resp => {
      this.viewConfig =  resp.viewConfig;
      this.dataTypes = resp.dataTypes;
      this.actions = resp.actions;
      this.gridOptions = resp.viewConfig.config;
    });
    const testModel = {
      phoneInfos: [
          { type: null, phone: null }
      ],
      emails: [ null ]
    };
    this.model = testModel;
  }

  public addData(): void {
    this.sortModel = this.sortModel ? this.sortModel : null;
    const bodyForGetModuleData = {
      action_name: this.configPath,
      order_info: [
        this.sortModel
      ],
      page_info: {
        pageIndex: this.currentPage,
        pageSize: this.getPageSize
      }
    };
    this.dynamicMenuService.getModuleData( this.moduleKey, bodyForGetModuleData).subscribe(data => {
      this.rowData = data.data;
    });
  }

  submit() {
  }

  public hideForm(): void {
    this.form.reset();
    this.REQ_ONE = null;
    this.REQ_MULTY = null;
    this.id = null;
    this.largeModal.hide();
    this.warningModal.hide();
  }

  public done(): void {
    if ((this.putFormData as any).indicator.includes('delete')) {
      this.deleteFormDataInstance(this.typeForm);
    } else {
      this.putFormDataInstance();
    }
    
    this.addData();
    this.gridApi.refreshCells({force : true});
    this.largeModal.hide();
  }

  private putFormDataInstance(): void {
    if ((this.putFormData as any).indicator.includes('create')) {
      delete  this.bodyForRequest.hash;
      delete  this.bodyForRequest.id;
    }

    this.dynamicMenuService.putFormDataInstance( this.moduleKey, this.bodyForRequest).subscribe();       
  }

  private getFormDataInstance(typeForm: string): void {
    this.id = this.REQ_ONE[this.idFieldName];
    this.dynamicMenuService.getFormDataInstance( this.moduleKey, (this.putFormData as any).formKey, typeForm, this.id).subscribe(data => {
      this.model = data.data;
      this.hash = data.hash;
      this.id = data.id;
      this.model.phoneInfos = this.model.phoneInfos.length > 0 ? this.model.phoneInfos : { type: null, phone: null} ;
      this.model.emails = this.model.emails.length > 0 ? this.model.emails : [null];
    });
    this.form.reset();
  }

  private deleteFormDataInstance(typeForm: string): void {
    this.REQ_MULTY.map(elem => {
      this.id = elem[this.idFieldName];
      this.dynamicMenuService.deleteFormDataInstance( this.moduleKey, (this.putFormData as any).formKey, typeForm, this.id).subscribe();
    });
    
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.paginationSetPageSize(this.pageSize.nativeElement.value);
  }

  rowClicked(event) {
    this.REQ_ONE = event.data;
    this.REQ_MULTY = this.gridApi.getSelectedRows();
    if (this.REQ_MULTY.length > 1) {
      this.REQ_ONE = null;
    }
    this.currentPage = this.gridOptions.api.paginationGetCurrentPage();
    this.getPageSize = this.gridOptions.api.paginationGetPageSize();
    this.sortModel = this.gridOptions.api.getSortModel().map(elem => {
      return {
        field_path: elem.colId,
        order: elem.sort
      }
    });
  }

  setPageSize($event) {
    this.gridApi.paginationSetPageSize($event.target.valueAsNumber);
  }

}
