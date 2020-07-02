import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridContainerComponent} from './components/grid-container/grid-container.component';
import {GridItemComponent} from './components/grid-item/grid-item.component';
import {DynamicLayoutExampleComponent} from "./components/dynamic-layout/dynamic-layout-example.component";
import {ContainerRouting} from "./container.routing";
import {
  DynamicComponentDirective,
} from "./components/grid-item-content/dynamic-component-directive";
import { TestComponent } from './components/avaiableComponents/test.component';
import { DClayoutComponent } from './components/dynamic-layout/dc-layout';


@NgModule({
  imports: [
    CommonModule,
    ContainerRouting
  ],
  declarations: [
    GridContainerComponent,
    DynamicComponentDirective,
    DynamicLayoutExampleComponent,
    GridItemComponent,
    DClayoutComponent,
    TestComponent,
    DynamicComponentDirective
  ],
  exports: [
    GridContainerComponent,
  ],
  entryComponents: [TestComponent],
})
export class ContainerModule {
}
