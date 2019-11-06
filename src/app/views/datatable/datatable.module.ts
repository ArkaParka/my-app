import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {DatatableRoutingModule} from './datatable-routing.module';
import {CustomDatatableComponent} from './custom-datatable.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    DatatableRoutingModule
  ],
  declarations: [CustomDatatableComponent]
})
export class DatatableModule {}