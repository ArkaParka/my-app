import {NgModule} from "@angular/core";
import {TableViewComponent} from "./table-view.component";
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
    TableViewComponent
  ],
  declarations: [
    TableViewComponent
  ]
})
export class TableViewModule {

}
