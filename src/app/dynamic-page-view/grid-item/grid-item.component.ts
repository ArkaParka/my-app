import {Component, HostBinding, Input} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {IWidgetConfig} from "../interfaces/IWidgetConfig";
import {IWidgetEventAction} from "../interfaces/IWidgetEventAction";
import {mergeMap, tap} from "rxjs/operators";
import {ITypePageViewConfig} from "../interfaces/ITypePageViewConfig";
import {DynamicPageStoreService} from "../available-widgets/dynamic-page-services/dynamic-page-store.service";
import {EActionTypes} from "../interfaces/EActionTypes";
import isEqual from 'lodash/isEqual'

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {
  componentsArray: any[];

  @Input('areaName') areaName: string;
  @Input('gridAreaName') gridAreaName: string;
  @HostBinding('style.grid-area') gridArea;
  @HostBinding('style.display') display;
  @HostBinding('style.grid-template-areas') areaGridTemplate;
  @HostBinding('style.grid-template-columns') gridTemplateColumns;
  @HostBinding('style.grid-template-rows') gridTemplateRows;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.gridArea = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaName}`);

    this.dpStore.select("widgetAction").pipe(
      mergeMap((events: IWidgetEventAction[]) => {
        let displayEvent: IWidgetEventAction = events
          .filter(event => event.options.targetArea === this.gridAreaName)
          .find(event => event.actionType === EActionTypes.DISPLAY_WIDGET);
        this.currentDisplayEvent = isEqual(this.currentDisplayEvent, displayEvent) ? undefined : displayEvent;
        return this.dpStore.select("typePageViewConfigs");
      }),
      tap((typePageConfigs: ITypePageViewConfig[]) => {
        if (this.currentDisplayEvent) {
          this.displayEventViewConfig = typePageConfigs.find(config => config.key === this.currentDisplayEvent.options.widgetConfig.options.page_key.value);
          if (this.displayEventViewConfig) {
            this._widgetConfig = {
              type: 'INNER_GRID',
              options: {innerGridConfig: {value: this.displayEventViewConfig.viewConfig}}
            };
          }
        }
      })
    ).subscribe();

  }
}
