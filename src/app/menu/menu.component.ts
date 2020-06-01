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

  constructor(private dynamicMenuService: DynamicMenuService) {
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {

  }

  ngOnInit(): void {
    this.workWithConfig();
    this.addData();

  }

  public workWithConfig(): void {

  }

  public addData(): void {

  }

  submit() {
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
    //this.data = event.data;
  }

  public hideModal(): void {
    this.largeModal.hide();
  }

  public delete(): void {
    // const selected = this.gridApi.getSelectedRows();
    this.gridApi.refreshCells();
    this.largeModal.hide();
  }

}
