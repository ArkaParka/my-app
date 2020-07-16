import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DynamicLayoutComponent} from "./components/dynamic-layout/dynamic-layout-example.component";

const routes: Routes = [
  {
    path: 'example',
    component: DynamicLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRouting {}
