import {ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import cloneDeep from 'lodash/cloneDeep'
import {GridArea} from "../../../../src/app/models/GridArea";
import { GridLayoutService } from '../dynamic-layout/grid-layout.service';
import {EventBusService} from "../event-bus/event-bus.service";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  componentsArray: any[];

  @Input('areaName') areaName:string;
  @Input('gridAreaName') gridAreaName: string;
  @HostBinding('style.grid-area') gridArea;
  @HostBinding('style.grid-template-areas') areaGridTemplate;
  @HostBinding('style.grid-template-columns') gridTemplateColumns;
  @HostBinding('style.grid-template-rows') gridTemplateRows;

  constructor(private sanitizer: DomSanitizer,
              private cd: ChangeDetectorRef,
              private gridLayoutService: GridLayoutService,
              private eventBus: EventBusService) {
  }

  ngOnInit(): void {
    this.gridArea = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaName}`);
    this.gridLayoutService.getGridAreaConfiguration(this.areaName).subscribe(data => {
      this.componentsArray = data;
      console.log(this.componentsArray)
    });

  }
}
