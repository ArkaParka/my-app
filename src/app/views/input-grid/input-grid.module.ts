import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {InputGridRoutingModule} from './input-grid-routing.module';
import {InputGridComponent} from './input-grid.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    InputGridRoutingModule
  ],
  declarations: [InputGridComponent]
})
export class InputGridModule {}