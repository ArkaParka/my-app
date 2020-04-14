// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MenuRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    MenuComponent,
  ]
})
export class MenuModule { }
