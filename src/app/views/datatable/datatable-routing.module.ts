import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomDatatableComponent} from './custom-datatable.component';





const routes: Routes = [
  {
    path: '',
    component: CustomDatatableComponent,
    data: {
      title: 'CustomDatatableComponent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatatableRoutingModule {}