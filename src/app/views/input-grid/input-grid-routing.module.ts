import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputGridComponent} from './input-grid.component';




const routes: Routes = [
  {
    path: '',
    component: InputGridComponent,
    data: {
      title: 'InputGridComponent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputGridRoutingModule {}