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
        path: '',
        redirectTo: 'division-structure'
      },
      {
        path: 'division-structure',
        component: MenuComponent,
        data: {
          title: 'Структура подразделения'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
