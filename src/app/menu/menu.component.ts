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
  public templateCtx = {};
  public fields: FormlyFieldConfig[];
  public form = new FormGroup({});
  public model: any = {};
  public gridApi;

  constructor(private callRequestForGetModuleConfig: DynamicMenuService) {
    console.log("Тест");  
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
    if (e.target['value'] == this.templateCtx['value']) {
      this.largeModal.show();
      console.log("Нажатие мышки", e.target['value']);
    }
  }

  ngOnInit (): void {
    this.workWithConfig();
  }

  public workWithConfig(): void {
    this.callRequestForGetModuleConfig.getModuleMenuFormConfig("test", "test").subscribe(resp => {
      this.gridOptions = resp.dataFromViewConfig;
      this.fields = resp.dataFromDataTypes;
      this.templateCtx = {
        value: resp.dataFromActions.actionName,
        title: resp.dataFromActions.actionTitle
      }
    });
    this.rowData = this.callRequestForGetModuleConfig.getModuleData("test", "test", 10);
  }

  public submit(): void {
    alert(JSON.stringify(this.model));
  }

  public hideForm(): void {
    this.largeModal.hide();
  }

  public add(): void {
    this.largeModal.hide();
  }

}
