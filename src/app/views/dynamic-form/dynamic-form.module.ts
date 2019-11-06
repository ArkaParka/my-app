import { NgModule } from '@angular/core';
import {DynamicFormRoutingModule} from './dynamic-form-routing.module';
import {DynamicFormComponent} from "./dynamic-form.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SchemaFormModule} from "ngx-schema-form";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DynamicFormRoutingModule,
    HttpClientModule,
    SchemaFormModule.forRoot()
  ],
  declarations: [DynamicFormComponent]
})
export class DynamicFormModule { }