// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { DefaultLayoutComponent } from '../containers/default-layout/default-layout.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  declarations: [
    MenuComponent,
    DefaultLayoutComponent
  ]
})
export class MenuModule { }
