import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridContainerComponent} from './components/grid-container/grid-container.component';
import {GridItemComponent} from './components/grid-item/grid-item.component';
import {DynamicLayoutExampleComponent} from "./components/dynamic-layout-example/dynamic-layout-example.component";
import {ContainerRouting} from "./container.routing";
import {
  DynamicComponentDirective,
} from "./components/grid-item-content/dynamic-component-directive";


@NgModule({
  imports: [
    CommonModule,
    ContainerRouting
  ],
  declarations: [
    GridContainerComponent,
    GridItemComponent,
    DynamicComponentDirective,
    DynamicLayoutExampleComponent
  ],
  exports: [
    GridContainerComponent,
    GridItemComponent,
  ]
})
export class ContainerModule {
}
