import {NgModule} from "@angular/core";
import {DynamicPageMockComponent} from "./dynamic-page-mock/dynamic-page-mock.component";
import {GridContainerComponent} from "./grid-container/grid-container.component";
import {GridItemComponent} from "./grid-item/grid-item.component";
import {CommonModule} from "@angular/common";
import {DynamicPageComponent} from "./dynamic-page/dynamic-page.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicPageMockComponent,
    GridContainerComponent,
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
