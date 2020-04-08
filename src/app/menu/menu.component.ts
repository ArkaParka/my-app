import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DynamicMenuService } from './dynamic-menu.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

  public gridOptions: GridOptions;
  public configData;
  public rowData: any;

  constructor(private callRequestForGetModuleConfig: DynamicMenuService) {
    console.log("Тест");  
  }

  ngOnInit () {
    this.workWithConfig();
  }

  public workWithConfig() {
    this.callRequestForGetModuleConfig.getModuleMenuFormConfig("test", "test").subscribe(resp => {
      this.configData = resp.dataFromViewConfig;
      //console.log("Тест answer data", this.configData.columnDefs);
    });
    this.rowData = this.callRequestForGetModuleConfig.getModuleData("test", "test", 10);
    this.gridOptions = this.configData;
  }

}
