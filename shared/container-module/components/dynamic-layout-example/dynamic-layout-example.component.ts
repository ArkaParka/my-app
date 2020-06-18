import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicLayoutConfig} from "../../../../src/app/models/DynamicLayoutConfig";
import {GridLayoutService} from "./grid-layout.service";
import {zip} from "rxjs";

@Component({
  selector: 'app-form-loader',
  templateUrl: './dynamic-layout-example.component.html',
  styleUrls: ['./dynamic-layout-example.component.scss']
})
export class DynamicLayoutExampleComponent {
  gridTemplate: DynamicLayoutConfig[];
  gridConfig1: DynamicLayoutConfig[];
  gridConfig2: DynamicLayoutConfig[];

  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private gridLayoutService: GridLayoutService) {
    zip(this.gridLayoutService.getGridCOnfiguration1(), this.gridLayoutService.getGridCOnfiguration2()).subscribe(result => {
      this.gridConfig1 = result[0];
      this.gridConfig2 = result[1];
      this.gridTemplate = this.gridConfig1;
      this.isLoading = false;
    })
  }

  template1 = () => {
    this.gridTemplate = this.gridConfig1
  };
  template2 = () => {
    this.gridTemplate = this.gridConfig2
  };


}
