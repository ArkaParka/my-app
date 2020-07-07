import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridContainerComponent} from './components/grid-container/grid-container.component';
import {GridItemComponent} from './components/grid-item/grid-item.component';
import {DynamicLayoutExampleComponent} from "./components/dynamic-layout/dynamic-layout-example.component";
import {ContainerRouting} from "./container.routing";
import {
  DynamicComponentDirective,
} from "./components/grid-item-content/dynamic-component-directive";
import {TestComponent} from './components/avaiableComponents/test.component';
import {ProjectsComponent} from './components/avaiableComponents/projects/projects.component';
import {NavInProjectComponent} from './components/avaiableComponents/nav-in-project/nav-in-project.component';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzTabContentNzTreeComponent} from './components/avaiableComponents/nav-in-project/nzTab-content-nzTree.component';
import {ClaimComponent} from "./components/avaiableComponents/claim-component/claim.component";


@NgModule({
  imports: [
    CommonModule,
    ContainerRouting,
    NzTreeModule,
    NzTabsModule
  ],
  declarations: [
    GridContainerComponent,
    DynamicComponentDirective,
    DynamicLayoutExampleComponent,
    GridItemComponent,
    TestComponent,
    ProjectsComponent,
    NavInProjectComponent,
    NzTabContentNzTreeComponent,
    ClaimComponent
  ],
  exports: [
    GridContainerComponent,
    NzTreeModule,
    NzTabsModule
  ],
  entryComponents: [
    TestComponent,
    NavInProjectComponent,
    ProjectsComponent,
    ClaimComponent
  ],

})
export class ContainerModule {
}
