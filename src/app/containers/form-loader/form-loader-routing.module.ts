import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoaderComponent } from './form-loader.component';

const routes: Routes = [
  {  
    path:'',
    data: {
      title: 'Штатная структура'
    },
    children: [
      {
        path: 'form-loader/:moduleKey/:configPath',
        component: FormLoaderComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormLoaderRoutingModule {}
