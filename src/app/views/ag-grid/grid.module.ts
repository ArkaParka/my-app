import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {GridRoutingModule} from './grid-routing.module';
import {GridComponent} from './grid.component';




@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    GridRoutingModule
  ],
  declarations: [GridComponent]
})
export class GridModule {}