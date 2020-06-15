import {Component, OnInit, HostListener, ViewChild} from '@angular/core';
import {DynamicMenuService} from '../services/dynamic-menu.service';
import {GridOptions} from 'ag-grid-community';
import {FormGroup} from '@angular/forms';
import {ModalDirective} from "ngx-bootstrap/modal";
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Actions, FormActionTypes} from '../models/Actions.interface';
import {DataTypes} from '../models/DataTypes.interface';
import {Subject, BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import cloneDeep from 'lodash/cloneDeep'
import {FieldGroup} from "../models/FieldGroup.interface";
import {FieldGroupDefaultProperties} from "../models/FieldGroupDefaultProperties";
import get from 'lodash/get'
import {Forms} from "../models/Forms.interface";

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
  //public data;
  //TODO: заменить any на нормальную модель
  public putFormData: any = {};
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
  private REQ_ONE;
  private REQ_MULTY;
  private currentPage;
  private pageSize;


  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('warningModal') public warningModal: ModalDirective;

  constructor(private dynamicMenuService: DynamicMenuService, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.moduleKey = params['moduleKey'];
      this.configPath = params['configPath'];
    });
  }

  actionButtonClicked(e): void {
    let forms: Forms[];
    this.dataTypes.map(elem => forms = elem.forms);
    //TODO: отрефакторить это дерьмо
    for (let item of this.actions) {
      if (e.target.value === item.execConfig.formActionType) {
        for (let elem of forms) {
          if (item.execConfig.formKey == elem.formKey) {
            this.putFormData = {
              indicator: e.target.value,
              formKey: elem.formKey,
              confirmMessage: item.execConfig.confirmMessage
            };
            if (e.target.value !== FormActionTypes.DELETE) {
              this.fields = this.generateFormlyFieldConfig([elem.schema], e.target.value);
            }
            this.largeModal.show();
          }
        }
      }
    }


    if (this.putFormData && this.REQ_ONE) {
      this.dataTypes.map(elem => {
        forms = elem.forms;
        elem.forms.filter(item => {
          if (item.formKey == (this.putFormData as any)?.formKey) {
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
      if (e.target.value === FormActionTypes.UPDATE) {
        this.getFormDataInstance(this.typeForm);
      }
    }
  }

  modifyFormlyField(field, additionalProperties, actionType) {
    let newField = cloneDeep(field);
    if (additionalProperties) {
      if (additionalProperties.readOnly && additionalProperties.readOnly.length) {
        if (additionalProperties.readOnly.includes(actionType)) {
          newField.templateOptions.readonly = true;
        }
      }
    }
    return newField;
  }


  generateFormlyFieldConfig(schema, actionType: string) { //schema:FieldGroup
    let result = new Array<any>();
    let fieldGroup: FieldGroup[] = get(schema, '[0].fieldGroup');

    fieldGroup = fieldGroup.map(fg => {
      let field = cloneDeep(fg.defaultProperties);
      field = this.modifyFormlyField(field, fg.additionalProperties, actionType);
      return field;
    });

    result.push({
      fieldGroup: fieldGroup,
      fieldGroupClassName: schema[0].fieldGroupClassName
    });

    return result;
  }


  ngOnInit(): void {
    this.workWithConfig();
    this.addData();
  }

  public workWithConfig(): void {
    this.dynamicMenuService.getModulePageConfiguration(this.moduleKey, this.configPath).subscribe(resp => {
      this.viewConfig = resp.viewConfig;
      this.dataTypes = resp.dataTypes;
      this.actions = resp.actions;
      this.gridOptions = resp.viewConfig.config;
    });
    //checkboxSelection: true
    const testModel = {
      phoneInfos: [
        {type: null, phone: null}
      ],
      emails: [null]
    };
    this.model = testModel;
  }

  public addData(): void {
    const bodyForGetModuleData = {
      action_name: this.configPath,
      order_info: [
        {
          field_path: null,
          order: null
        }
      ],
      page_info: {
        pageIndex: this.currentPage,
        pageSize: this.pageSize
      }
    };
    this.dynamicMenuService.getModuleData(this.moduleKey, bodyForGetModuleData).subscribe(data => {
      this.rowData = data.data;
    });
  }

  submit() {
  }

  public hideForm(): void {
    this.form.reset();
    this.REQ_ONE = null;
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
    this.gridApi.refreshCells({force: true});
    this.largeModal.hide();
  }

  private putFormDataInstance(): void {
    if ((this.putFormData as any).indicator.includes('create')) {
      delete this.bodyForRequest.hash;
      delete this.bodyForRequest.id;
    }

    this.dynamicMenuService.putFormDataInstance(this.moduleKey, this.bodyForRequest).subscribe();
  }

  private getFormDataInstance(typeForm: string): void {
    this.id = this.REQ_ONE[this.idFieldName];
    this.dynamicMenuService.getFormDataInstance(this.moduleKey, (this.putFormData as any).formKey, typeForm, this.id).subscribe(data => {
      this.model = data.data;
      this.hash = data.hash;
      this.id = data.id;
      this.model.phoneInfos = this.model.phoneInfos.length > 0 ? this.model.phoneInfos : {type: null, phone: null};
      this.model.emails = this.model.emails.length > 0 ? this.model.emails : [null];
    });
    this.form.reset();
  }

  private deleteFormDataInstance(typeForm: string): void {
    this.REQ_MULTY.map(elem => {
      this.id = elem[this.idFieldName];
      this.dynamicMenuService.deleteFormDataInstance(this.moduleKey, (this.putFormData as any).formKey, typeForm, this.id).subscribe();
    });

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  rowClicked(event) {
    this.REQ_ONE = event.data;
    this.REQ_MULTY = this.gridApi.getSelectedRows();
    this.currentPage = this.gridOptions.api.paginationGetCurrentPage();
    this.pageSize = this.gridOptions.api.paginationGetPageSize()
  }

}
