import {ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import cloneDeep from 'lodash/cloneDeep'
import {GridArea} from "../../../../src/app/models/GridArea";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  private _gridAreaTemplate: GridArea;
  get gridAreaTemplate() {
    return this._gridAreaTemplate
  };

  @Input('grid-area-config') set gridAreaTemplate(gridAreaTemplate: GridArea) {
    this._gridAreaTemplate = cloneDeep(gridAreaTemplate);
    this.gridAreaTemplate.areaTemplate.forEach((gat, i, array) => {
      array[i] = `\"${gat}\"`;
    });
    this.cd.detectChanges();
    console.log(this.gridAreaTemplate)
  };

  @Input('value') value;
  @Input('gridAreaName') gridAreaName: string;
  @HostBinding('style.grid-area') gridArea;
  @HostBinding('style.grid-template-areas') areaGridTemplate;
  @HostBinding('style.grid-template-columns') gridTemplateColumns;
  @HostBinding('style.grid-template-rows') gridTemplateRows;

  constructor(private sanitizer: DomSanitizer,
              private cd: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    if (this.gridAreaName) {
      this.gridArea = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaName}`);
      this.areaGridTemplate = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaTemplate.areaTemplate.join(' ')}`);
    }
    this.gridTemplateColumns = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaTemplate.areaColumnSize}`);
    if (this.gridAreaTemplate.areaRowSize) {
      this.gridTemplateRows = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaTemplate.areaRowSize}`);
    }
  }
}
