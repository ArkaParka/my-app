import {ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {GridAreaConfig} from "../../../../src/app/models/GridAreaConfig";
import cloneDeep from 'lodash/cloneDeep'

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  private _gridAreaTemplate: GridAreaConfig;
  get gridAreaTemplate() {
    return this._gridAreaTemplate
  };

  @Input('grid-area-config') set gridAreaTemplate(gridAreaTemplate: GridAreaConfig) {
    this._gridAreaTemplate = cloneDeep(gridAreaTemplate);
    this.gridAreaTemplate.gridAreaTemplate.forEach((gat, i, array) => {
      array[i] = `\"${gat}\"`;
    });
    this.cd.detectChanges();
  };

  @Input('value') value;
  @Input('gridAreaName') gridAreaName: string;
  @HostBinding('style.grid-area') gridArea;
  @HostBinding('style.grid-template-areas') areaGridTemplate;

  constructor(private sanitizer: DomSanitizer,
              private cd: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    if (this.gridAreaName) {
      this.gridArea = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaName}`);
      this.areaGridTemplate = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaTemplate.gridAreaTemplate.join(' ')}`);
    }
  }
}
