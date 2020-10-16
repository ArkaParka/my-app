import {Component, HostBinding, Input} from "@angular/core";
import cloneDeep from 'lodash/cloneDeep'
import {DomSanitizer} from "@angular/platform-browser";
import {IDynamicPageViewConfig} from "../../models/IDynamicPageViewConfig";
import {IWidgetOptions} from "../interfaces/IWidgetOptions";

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent {
  private _widgetOptions: IDynamicPageViewConfig = null;

  @Input('widgetOptions') set widgetOptions(gridTemplate) {
    this._widgetOptions = (gridTemplate as IWidgetOptions).innerGridConfig && (gridTemplate as IWidgetOptions).innerGridConfig.value
      ? (gridTemplate as IWidgetOptions).innerGridConfig.value
      : gridTemplate;
    this.setGridTemplate();
  };

  get widgetOptions() {
    return this._widgetOptions;
  };

  @HostBinding('style.grid-auto-rows') gridAutoRows;
  @HostBinding('style.grid-auto-columns') gridAutoColumns;
  @HostBinding('style.grid-template-areas') gridTA;
  @HostBinding('style.grid-template-columns') gridTemplateColumns;
  @HostBinding('style.grid-template-rows') gridTemplateRows;

  constructor(private sanitizer: DomSanitizer) {
  }

  setGridTemplate(): void {
    this.widgetOptions.gridTemplate.forEach((gtpl, i, array) => {
      array[i] = `\"${gtpl}\"`;
    });

    this.gridTA = this.sanitizer.bypassSecurityTrustStyle(`${this.widgetOptions.gridTemplate.join(' ')}`);
    this.gridTemplateColumns = this.sanitizer.bypassSecurityTrustStyle(`${this.widgetOptions.columnSize}`);
    this.gridTemplateRows = this.sanitizer.bypassSecurityTrustStyle(`${this.widgetOptions.rowSize}`);
  }
}
