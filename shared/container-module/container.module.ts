import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { GridContainerComponent } from './components/grid-container/grid-container.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GridContainerComponent, GridItemComponent],
  exports: [GridContainerComponent, GridItemComponent]
})
export class ContainerModule {
}
