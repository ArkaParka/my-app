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

const AvailableWidgets = [
  BlankComponent,
  TabTreeComponent,
  TreeListComponent,
  GridContainerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    NzTreeModule,
    NzIconModule
  ],
  declarations: [
    DynamicPageMockComponent,
    GridItemComponent,
    DynamicPageComponent
  ],
  exports: [
    DynamicPageMockComponent,
    DynamicPageComponent
  ]
})
export class DynamicPageViewModule {

}
