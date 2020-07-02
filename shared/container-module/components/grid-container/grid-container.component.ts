import {ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {BreakpointObserver} from "@angular/cdk/layout";
import {BreakpointState} from "@angular/cdk/layout/breakpoints-observer";
import {DynamicLayoutConfig} from "../../../../src/app/models/DynamicLayoutConfig";
import cloneDeep from 'lodash/cloneDeep'
import {switchMap, tap} from "rxjs/operators";
import {Observable, of, zip} from "rxjs";
import {GridLayoutService} from "../dynamic-layout-example/grid-layout.service";
import {GridArea} from "../../../../src/app/models/GridArea";

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent implements OnInit {

  private _gridTemplate: DynamicLayoutConfig = null;
  get gridTemplate() {
    return this._gridTemplate;
  };

  @Input('grid-template') set gridTemplate(gridTemplate) {
    this._gridTemplate = cloneDeep(gridTemplate);
    this.setGridTemplate();
    this.cd.detectChanges();
  };

  @HostBinding('style.grid-auto-rows') gridAutoRows;
  @HostBinding('style.grid-auto-columns') gridAutoColumns;
  @HostBinding('style.grid-template-areas') gridTA;
  @HostBinding('style.grid-template-columns') gridTemplateColumns;


  constructor(private sanitizer: DomSanitizer,
              private breakpointObserver: BreakpointObserver,
              private cd: ChangeDetectorRef,
              private gridLayoutService: GridLayoutService) {
  }

  ngOnInit(): void {
    this.gridAutoRows = this.sanitizer.bypassSecurityTrustStyle(`minmax(100px,auto)`);
  }

  setGridTemplate(): void {
    this.gridTemplate.gridTemplate.forEach((gtpl, i, array) => {
      array[i] = `\"${gtpl}\"`;
    });

    this.gridTA = this.sanitizer.bypassSecurityTrustStyle(`${this.gridTemplate.gridTemplate.join(' ')}`);
    this.gridTemplateColumns = this.sanitizer.bypassSecurityTrustStyle(`${this.gridTemplate.columnSize}`);

    console.log(this.gridTemplate);
  }


}
