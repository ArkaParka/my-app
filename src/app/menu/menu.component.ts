import {Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {DynamicMenuService} from '../services/dynamic-menu.service';
import {FormGroup} from '@angular/forms';
import {ModalDirective} from "ngx-bootstrap/modal";
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Actions, FormActionTypes} from '../models/Actions.interface';
import {DataTypes} from '../models/DataTypes.interface';
import {ActivatedRoute} from '@angular/router';
import {
  NzTableQueryParams,
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder
} from 'ng-zorro-antd/table';
import {switchMap, takeUntil} from "rxjs/operators";
import {ModulePageConfiguration} from "../models/ModulePageConfiguration.interface";
import {ModuleData} from "../models/ModuleData.interface";
import {Subject, zip} from "rxjs";
import {Forms} from "../models/Forms.interface";
import {FieldGroup} from "../models/FieldGroup.interface";
import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'
import {clone} from "@ngx-formly/core/lib/utils";

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
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit, OnDestroy {
  testModel = {
    phoneInfos: [
      {type: null, phone: null}
    ],
    emails: [null]
  };

  moduleKey: string;
  configPath: string;

  isFormLoading: boolean = true;
  isModalDataLoading: boolean = false;

  public actions: Actions[];
  private dataTypes: DataTypes[];
  public fields: FormlyFieldConfig[];
  public form = new FormGroup({});
  public model: any = {};
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
  private one_id: string = null;
  private multy_id: string[] = [];

  public total = 1;
  listOfModuleData: object[] = [];
  public loadingTable = true;
  public pageSize = 10;
  pageIndex = 1;
  public checked = false;
  public indeterminate = false;
  listOfCurrentPageData: object[] = [];
  setOfCheckedId = new Set<string>();
  public listOfColumns: ColumnItem[];


  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;

  constructor(private dynamicMenuService: DynamicMenuService, private route: ActivatedRoute) {
    route.params.pipe(
      switchMap((params) => {
        this.isFormLoading = true;
        this.moduleKey = params['moduleKey'];
        this.configPath = params['configPath'];
        return this.dynamicMenuService.getModulePageConfiguration(this.moduleKey, this.configPath);
      }),
      takeUntil(this.destroy$)
    )
      .subscribe(resp => this.pageConfigurationCb(resp));
  }

  updateCheckedSet(item: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(item);
      this.REQ_ONE = false;
      this.REQ_MULTY = true;
      this.multy_id.push(item);
      this.oneIdTemplate(this.setOfCheckedId.size, item);
    } else {
      this.setOfCheckedId.delete(item);
      this.multy_id.splice(this.multy_id.indexOf(item), 1);
      this.oneIdTemplate(this.setOfCheckedId.size, this.multy_id[0]);
    }
    if (this.multy_id.length == 0 || !this.one_id) {
      this.REQ_ONE = false;
      this.REQ_MULTY = false;
    }
  }

  oneIdTemplate(size, item) {
    if (size == 1) {
      this.REQ_ONE = true;
      this.one_id = item;
    }
  }

  onItemChecked(item: string, checked: boolean): void {
    this.updateCheckedSet(item, checked);
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

  actionButtonClicked(e): void {
    let forms: Forms[];
    this.dataTypes.map(elem => forms = elem.forms);
    for (let item of this.actions) {
      if (e.target.value === item.execConfig.formActionType) {
        for (let elem of forms) {
          if (item.execConfig.formKey == elem.formKey) {
            this.putFormData = {
              indicator: e.target.value,
              formKey: elem.formKey,
              confirmMessage: item.execConfig.confirmMessage
            };
            this.dataTypes.map(elem => {
              forms = elem.forms;
              elem.forms.filter(item => {
                if (item.formKey == (this.putFormData as any)?.formKey) {
                  this.typeForm = elem.type;
                }
              });
            });

            if (e.target.value !== FormActionTypes.DELETE) {
              this.fields = this.generateFormlyFieldConfig([elem.schema], e.target.value);
            }
            if (e.target.value === FormActionTypes.UPDATE) {
              this.getFormDataInstance(this.typeForm);
            }
            if (e.target.value === FormActionTypes.CREATE) {
              console.log("CREATE-FIELDS",this.fields)
              console.log("CREATE-MODEL",this.model)
            }
            this.largeModal.show();
          }
        }
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

  getFieldGroupArray(fieldGroup: FieldGroup[], actionType: string) {
    return fieldGroup.map(fg => {
      let field = cloneDeep(fg.defaultProperties);

      if (field.type === 'array') console.log("old", field)

      field = this.modifyFormlyField(field, fg.additionalProperties, actionType);

      if (field.fieldArray && field.fieldArray.fieldGroup && field.fieldArray.fieldGroup.length) {
        let fieldArray = cloneDeep(field.fieldArray);
        field.fieldArray.fieldGroup = this.getFieldGroupArray(fieldArray.fieldGroup, actionType);
      }

      if (field.type === 'array') console.log("new", field)

      return field;
    });
  }

  generateFormlyFieldConfig(schema, actionType: string) { //schema:FieldGroup
    let result = new Array<any>();
    let fieldGroup: FieldGroup[] = get(schema, '[0].fieldGroup');

    fieldGroup = this.getFieldGroupArray(fieldGroup, actionType);

    result.push({
      fieldGroup: fieldGroup,
      fieldGroupClassName: schema[0].fieldGroupClassName
    });
    return result;
  }


  ngOnInit(): void {
  }

  disableFunc(type: string): boolean {
    switch (type) {
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
      default:
        break;
    }
  }

  pageConfigurationCb = (resp: ModulePageConfiguration) => {
    if (resp && resp.viewConfig && resp.dataTypes && resp.actions) {
      this.viewConfig = resp.viewConfig;
      this.dataTypes = resp.dataTypes;
      this.actions = resp.actions;
      this.makeListOfColumns(this.viewConfig?.config);
      this.idFieldName = this.viewConfig.config.idFieldName;

      // this.model = cloneDeep(this.testModel);

      this.isFormLoading = false;
    }
  };

  private makeListOfColumns(tableConfig: object): void {
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
        }
      }
    });
  }

  getModuleDataCb = (data: ModuleData) => {
    this.loadingTable = false;
    this.total = data.total_size;
    this.listOfModuleData = data.data;
  };

  addData(pageIndex: number,
          pageSize: number,
          sortField: string | null,
          sortOrder: string | null) {
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
    this.loadingTable = true;
    return this.dynamicMenuService.getModuleData(this.moduleKey, bodyForGetModuleData);
  }

  submit() {
  }

  public hideForm(): void {
    console.log(cloneDeep(this.model))
    this.form.reset();
    this.id = null;
    this.fields = null;
    // this.model = cloneDeep(this.testModel);
    this.largeModal.hide();
  }

  public done(): void {
    if ((this.putFormData as any).indicator === FormActionTypes.DELETE) {
      this.deleteFormDataInstance(this.typeForm);
    } else {
      this.putFormDataInstance();
    }
    this.hideForm();
  }

  private getFormDataInstance(typeForm: string): void {
    this.isModalDataLoading = true;
    this.dynamicMenuService.getFormDataInstance(this.moduleKey, (this.putFormData as any).formKey, typeForm, this.one_id).subscribe(data => {
      // this.model = data.data;
      this.hash = data.hash;
      this.id = data.id;
      // this.model = cloneDeep(this.testModel)
      // this.model.phoneInfos = cloneDeep(this.testModel.phoneInfos);
      // this.model.emails = cloneDeep(this.testModel.emails);

      console.log("EDIT-FIELDS",this.fields)
      console.log("EDIT-MODEL",this.model)
      // this.options.resetModel();
      this.isModalDataLoading = false;
    });
  }

  private putFormDataInstance(): void {

    this.bodyForRequest = {
      data: this.form.value,
      formKey: (this.putFormData as any)?.formKey,
      hash: this.hash,
      id: this.id,
      type: this.typeForm
    };

    if ((this.putFormData as any).indicator.includes('create')) {
      delete this.bodyForRequest.hash;
      delete this.bodyForRequest.id;
    }
    this.dynamicMenuService.putFormDataInstance(this.moduleKey, this.bodyForRequest).pipe(
      switchMap(data => {
        this.updateCheckedSet(data.id, null);
        return this.addData(this.pageIndex, this.pageSize, null, null);
      }),
      takeUntil(this.destroy$)
    ).subscribe((result) => this.getModuleDataCb(result));
  }

  private deleteFormDataInstance(typeForm: string): void {
    let deleteRequest = [];
    this.multy_id.forEach(elem => deleteRequest.push(this.dynamicMenuService.deleteFormDataInstance(this.moduleKey, (this.putFormData as any).formKey, typeForm, elem)));

    zip(...deleteRequest).pipe(
      switchMap(() => {
        return this.addData(this.pageIndex, this.pageSize, null, null);
      }),
      takeUntil(this.destroy$)
    ).subscribe((result) => {
      this.getModuleDataCb(result);
      this.multy_id = [];
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const {pageSize, pageIndex, sort, filter} = params;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.addData(pageIndex, pageSize, sortField, sortOrder)
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => this.getModuleDataCb(result));
  }

  modelChanged(event) {
    console.log(event)
  }
}
