import {ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {BreakpointObserver} from "@angular/cdk/layout";
import {BreakpointState} from "@angular/cdk/layout/breakpoints-observer";
import {DynamicLayoutConfig} from "../../../../src/app/models/DynamicLayoutConfig";
import cloneDeep from 'lodash/cloneDeep'

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent implements OnInit {
  activeTemplate: DynamicLayoutConfig = null;
  private breakPoints: Array<string> = [];
  private _gridTemplate: Array<DynamicLayoutConfig> = [];
  get gridTemplate() {
    return this._gridTemplate;
  };

  @Input('grid-template') set gridTemplate(gridTemplate) {
    this._gridTemplate = cloneDeep(gridTemplate);
    this.gridTemplate.forEach(template => {
      this.breakPoints.push(template.breakPoint);
      template.gridTemplate.forEach((gtpl, i, array) => {
        array[i] = `\"${gtpl}\"`;
      });
    });
    this.breakpointObserver.observe(this.breakPoints).subscribe(res => this.breakPointCb(res));
    this.cd.detectChanges();
  };

  @HostBinding('style.grid-auto-rows') gridAutoRows;
  @HostBinding('style.grid-template-areas') gridTA;


  constructor(private sanitizer: DomSanitizer, private breakpointObserver: BreakpointObserver, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.gridAutoRows = this.sanitizer.bypassSecurityTrustStyle(`minmax(100px,auto)`);
  }

  breakPointCb = (res: BreakpointState) => {
    let breakpoint = Object.keys(res.breakpoints).find(key => res.breakpoints[key] === true);
    this.activeTemplate = this.gridTemplate.find(template => template.breakPoint === breakpoint);
    this.gridTA = this.sanitizer.bypassSecurityTrustStyle(`${this.activeTemplate.gridTemplate.join(' ')}`);
  }

}
