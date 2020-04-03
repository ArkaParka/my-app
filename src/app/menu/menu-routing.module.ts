import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {  
    path:'',
    component: MenuComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
    data: {
      title: 'Menu'
    },
    // children:[
    //   {
    //     path:'menu/:item', 
    //     component: MenuComponent
    //   }
    // ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
