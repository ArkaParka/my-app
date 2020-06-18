import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DynamicLayoutExampleComponent} from "./components/dynamic-layout-example/dynamic-layout-example.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'example'
  },
  {
    path: 'example',
    component: DynamicLayoutExampleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRouting {}
