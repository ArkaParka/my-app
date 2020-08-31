import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu.component";
import {NzTableModule} from "ng-zorro-antd";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    NzTableModule,
    SharedModule,
    CommonModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule {

}
