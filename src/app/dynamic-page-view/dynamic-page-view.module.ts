import {NgModule} from "@angular/core";
import {DynamicPageMockComponent} from "./dynamic-page-mock/dynamic-page-mock.component";
import {GridContainerComponent} from "./grid-container/grid-container.component";
import {GridItemComponent} from "./grid-item/grid-item.component";
import {CommonModule} from "@angular/common";
import {DynamicPageComponent} from "./dynamic-page/dynamic-page.component";
import {BlankComponent} from "./available-widgets/blank-component/blank-component";
import {DynamicWidgetDirective} from "./available-widgets/dynamic-widget.directive";
import {TabTreeComponent} from "./available-widgets/tabs-component/tabs.component";
import {TabsModule} from "ngx-bootstrap/tabs";
import {NzIconModule, NzTreeModule} from "ng-zorro-antd";
import {TreeListComponent} from "./available-widgets/tree-list-component/tree-list.component";
import {LabelComponent} from "./available-widgets/label/label.component";
import {InputComponent} from "./available-widgets/input-component/input.component";
import {SharedModule} from "../shared/shared.module";
import {TextareaComponent} from "./available-widgets/textarea-component/textarea.component";

const AvailableWidgets = [
  BlankComponent,
  TabTreeComponent,
  TreeListComponent,
  GridContainerComponent,
  LabelComponent,
  InputComponent,
  TextareaComponent
];

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    NzTreeModule,
    NzIconModule,
    SharedModule
  ],
  declarations: [
    DynamicPageMockComponent,
    GridItemComponent,
    DynamicPageComponent,
    DynamicWidgetDirective,
    ...AvailableWidgets
  ],
  exports: [
    DynamicPageMockComponent,
    DynamicPageComponent
  ],
  entryComponents: [
    ...AvailableWidgets
  ]
})
export class DynamicPageViewModule {

}
