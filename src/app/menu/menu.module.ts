import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MenuRoutingModule,
    AgGridModule.withComponents([]),
    NzTableModule,
    ScrollingModule,
    DragDropModule
  ],
  declarations: [ MenuComponent ]
})
export class MenuModule { }
