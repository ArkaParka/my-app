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
import { ProjectsComponent } from './components/avaiableComponents/projects/projects.component';
import { NavInProjectComponent } from './components/avaiableComponents/nav-in-project/nav-in-project.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';


@NgModule({
  imports: [
    CommonModule,
    ContainerRouting,
    NzTreeModule
  ],
  declarations: [
    GridContainerComponent,
    DynamicComponentDirective,
    DynamicLayoutExampleComponent,
    GridItemComponent,
    DClayoutComponent,
    TestComponent,
    ProjectsComponent,
    NavInProjectComponent
  ],
  exports: [
    GridContainerComponent,
    NzTreeModule
  ],
  entryComponents: [
    TestComponent, 
    NavInProjectComponent, 
    ProjectsComponent
  ],
  
})
export class ContainerModule {
}
