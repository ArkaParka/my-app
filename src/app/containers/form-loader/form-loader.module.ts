import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormLoaderRoutingModule} from './form-loader-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {NzTableModule} from 'ng-zorro-antd/table';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NzNotificationModule} from "ng-zorro-antd";
import { SharedModule } from '../../shared/shared.module';
import { FormLoaderComponent } from './form-loader.component';
import { DynamicMenuServiceInterceptor } from '../../services/dynamic-menu-service-interceptor';
import { MenuComponent } from '../../menu/menu.component';
import { ContainerModule } from '../../../../shared/container-module/container.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormLoaderRoutingModule,
    AgGridModule.withComponents([]),
    NzTableModule,
    NzNotificationModule,
    ScrollingModule,
    DragDropModule,
    ContainerModule,
  ],
  declarations: [
    FormLoaderComponent,
    MenuComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DynamicMenuServiceInterceptor,
      multi: true
    },
  ]
})
export class FormLoaderModule {
}
