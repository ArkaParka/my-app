import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DynamicMenuService } from './dynamic-menu.service';
import { GridOptions } from 'ag-grid-community';
import { FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

  public gridOptions: GridOptions;
  public configData;
  public rowData: any;
  public actions: object[];
  public fields: FormlyFieldConfig[];
  public form = new FormGroup({});
  public model: any = {};
  public data: object;
  gridApi: any;
  gridColumnApi: any;

  constructor(private dynamicMenuService: DynamicMenuService) {
    console.log("Тест");  
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
    if (e.target['value'] == "insert") {
      this.largeModal.show();
    }
    if (e.target['value'] == "edit") {
      if (this.data) {
        console.log("Данные для изменения", this.data);
        this.model = this.data;
        this.largeModal.show();
        //this.gridApi.refreshCells();
      } else {
        alert("Выберите подразделение для правки");
      }
    }
    if (e.target['value'] == "delete") {
  
    }
  }

  ngOnInit(): void {
    this.workWithConfig();
    this.rowData = this.dynamicMenuService.getModuleData("test", "test", 10);
  }

  public workWithConfig(): void {
    this.dynamicMenuService.getModuleMenuFormConfig("test", "test").subscribe(resp => {
      this.gridOptions = resp.dataFromViewConfig;
      this.fields = resp.dataFromDataTypes;
      this.actions = resp.dataFromActions;
    }); 
  }

  public submit(): void {
    console.log("Данные", this.model);
  }

  public hideForm(): void {
    this.largeModal.hide();
  }

  public add(): void {
    this.largeModal.hide();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  rowClicked(event) {
    this.data = event.data;
  }

}
