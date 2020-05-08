import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DynamicMenuService } from './dynamic-menu.service';
import { GridOptions } from 'ag-grid-community';
import { FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';


@Component({
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

  public gridOptions: GridOptions;
  public rowData: any;
  public actions: object[];
  public fields: FormlyFieldConfig[];
  public form = new FormGroup({});
  public model: any;
  private data: object;
  private buttonIndicator;
  private gridApi: any;
  public dataChange: BehaviorSubject<any>;
  public options: FormlyFormOptions = {};

  constructor(private dynamicMenuService: DynamicMenuService,  private formlyJsonschema: FormlyJsonschema,) {
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild('warningModal') public warningModal: ModalDirective;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
    switch(e.target['value']) {
      case "insert": {
        this.buttonIndicator = e.target['value'];
        this.largeModal.show();
        break;
      }
      case "edit": {
        const selected = this.gridApi.getSelectedRows();
        if (this.data) {
          this.buttonIndicator = e.target['value'];
          //this.model = selected;
          this.model = this.data;
          this.largeModal.show();
        } else {
          this.warningModal.show();
        }
        break;
      }
      case "delete": {
        if (this.data) {
          this.smallModal.show();
        } else {
          this.warningModal.show();
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  ngOnInit(): void {
    this.workWithConfig();
    this.addData();
    //тестовый пример
    this.dynamicMenuService.loadExample().subscribe(asw => {
      //this.fields = [this.formlyJsonschema.toFieldConfig(asw.schema)];
      this.fields = asw.schema;
      console.log("Форма", this.fields);
      this.model = asw.model;
    });
    
  }

  public workWithConfig(): void {
    this.dynamicMenuService.getModuleMenuFormConfig("test", "test").subscribe(resp => {
      this.gridOptions = resp.dataFromViewConfig;
      //this.fields = resp.dataFromDataTypes;
      this.actions = resp.dataFromActions;
    });
  }

  public async addData(): Promise<void> {
    this.rowData = await this.dynamicMenuService.getModuleData("test", "test", 10).toPromise();
  }

  submit() {
    //console.log("Данные", this.model);
  }

  public hideForm(): void {
    this.largeModal.hide();
  }

  public add(): void {
    switch(this.buttonIndicator) { 
      case "insert": { 
        this.dynamicMenuService.setModuleData(this.form.value).subscribe(resp => {
          this.rowData.push(resp);
          this.gridApi.setRowData(this.rowData);
          this.gridApi.refreshCells({force : true});
        });
        break; 
      } 
      case "edit": {
        this.dynamicMenuService.editModuleData(this.model.id, this.form.value).subscribe(resp => {
          this.rowData.map(elem => {
            if (elem.id == resp.id) {
              return resp;
            }
            return elem;
          });
          this.gridApi.setRowData(this.rowData);
          this.gridApi.refreshCells({force : true});
        });
        break; 
      } 
      default: {  
         break; 
      } 
   } 
    this.largeModal.hide();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  rowClicked(event) {
    //this.data = event.data;
  }

  public hideModal(): void {
    this.smallModal.hide();
  }

  public delete(): void {
    // const selected = this.gridApi.getSelectedRows();
    // console.log("Выбранная строка", selected);
    //this.dynamicMenuService.deleteModuleData(this.data['id']);
    this.gridApi.refreshCells();
    this.smallModal.hide();
  }

}
