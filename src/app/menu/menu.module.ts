import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MenuRoutingModule} from './menu-routing.module';
import {MenuComponent} from './menu.component';
import {AgGridModule} from 'ag-grid-angular';
import {SharedModule} from '../shared/shared.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {NzTableModule} from 'ng-zorro-antd/table';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DynamicMenuServiceInterceptor} from "../services/dynamic-menu-service-interceptor";
import {NzNotificationModule} from "ng-zorro-antd";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MenuRoutingModule,
    AgGridModule.withComponents([]),
    NzTableModule,
    NzNotificationModule,
    ScrollingModule,
    DragDropModule,
  ],
  declarations: [MenuComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DynamicMenuServiceInterceptor,
      multi: true
    },
  ]
})
export class MenuModule {
}
