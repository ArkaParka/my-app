import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {  
    path:'',
    data: {
      title: 'Штатная структура'
    },
    children: [
      {
        path: 'form-loader/:moduleKey/:configPath',
        component: MenuComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
