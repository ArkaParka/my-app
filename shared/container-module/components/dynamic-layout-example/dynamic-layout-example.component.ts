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
  gridTemplate: DynamicLayoutConfig;

  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private gridLayoutService: GridLayoutService) {
    this.gridLayoutService.getGridConfiguration().subscribe(result => {
      this.gridTemplate = result;
      this.isLoading = false;
    })
  }


}
