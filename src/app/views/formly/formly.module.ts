import { NgModule } from '@angular/core';
import {FormlyComponent} from './formly.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {FormlyRoutingModule} from './formly-routing.module';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormlyRoutingModule
  ],
  declarations: [FormlyComponent]
})
export class FormlyModule {}