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
import { ProjectsComponent } from './components/avaiableComponents/projects/projects.component';
import { NavInProjectComponent } from './components/avaiableComponents/nav-in-project/nav-in-project.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTabContentNzTreeComponent } from './components/avaiableComponents/nav-in-project/nzTab-content-nzTree.component';
import { HeaderForProductsComponent } from './components/avaiableComponents/header/header.component';
import { ClaimComponent } from './components/avaiableComponents/claim-component/claim.component';
import {NzColDirective, NzDatePickerModule, NzGridModule} from "ng-zorro-antd";
import {NgSelectModule} from "@ng-select/ng-select";
import {SharedModule} from "../../src/app/shared/shared.module";
import {ElementContainerComponent} from "./components/avaiableComponents/element-container/element-container.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContainerRouting,
    NzTreeModule,
    NzTabsModule,
    NzDropDownModule,
    NzGridModule,
    NzDatePickerModule
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
    HeaderForProductsComponent,
    ClaimComponent,
    ElementContainerComponent
  ],
  exports: [
    GridContainerComponent,
    NzTreeModule,
    NzTabsModule,
    NzDropDownModule
  ],
  entryComponents: [
    TestComponent, 
    NavInProjectComponent, 
    ProjectsComponent,
    HeaderForProductsComponent,
    ClaimComponent,
    ElementContainerComponent
  ],
})
export class ContainerModule {
}
