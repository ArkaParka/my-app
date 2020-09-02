import {Component, HostBinding, Input} from "@angular/core";
import cloneDeep from 'lodash/cloneDeep'
import {DomSanitizer} from "@angular/platform-browser";
import {IDynamicPageViewConfig} from "../../models/IDynamicPageViewConfig";

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent {
  private _gridTemplate: IDynamicPageViewConfig = null;
  get gridTemplate() {
    return this._gridTemplate;
  };

  @Input('gridTemplate') set gridTemplate(gridTemplate) {
    this._gridTemplate = cloneDeep(gridTemplate);
    this.setGridTemplate();
  };

  @HostBinding('style.grid-auto-rows') gridAutoRows;
  @HostBinding('style.grid-auto-columns') gridAutoColumns;
  @HostBinding('style.grid-template-areas') gridTA;
  @HostBinding('style.grid-template-columns') gridTemplateColumns;
  @HostBinding('style.grid-template-rows') gridTemplateRows;

  constructor(private sanitizer: DomSanitizer) {
  }

  setGridTemplate(): void {
    this.gridTemplate.gridTemplate.forEach((gtpl, i, array) => {
      array[i] = `\"${gtpl}\"`;
    });

    this.gridTA = this.sanitizer.bypassSecurityTrustStyle(`${this.gridTemplate.gridTemplate.join(' ')}`);
    this.gridTemplateColumns = this.sanitizer.bypassSecurityTrustStyle(`${this.gridTemplate.columnSize}`);
    this.gridTemplateRows = this.sanitizer.bypassSecurityTrustStyle(`${this.gridTemplate.rowSize}`);
  }
}
