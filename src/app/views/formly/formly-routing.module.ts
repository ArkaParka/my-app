import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormlyComponent} from './formly.component';



const routes: Routes = [
  {
    path: '',
    component: FormlyComponent,
    data: {
      title: 'FormlyComponent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormlyRoutingModule {}