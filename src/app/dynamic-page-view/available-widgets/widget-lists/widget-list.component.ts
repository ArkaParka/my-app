import {Component, ChangeDetectionStrategy, Input, HostBinding} from "@angular/core";
import {WidgetListItem, WidgetsFactoryService} from "../../dynamic-page-services/widgets-factory.service";
import {IDynamicPageViewConfig} from "../../../models/IDynamicPageViewConfig";
import {IModulePageConfiguration} from "../../../models/IModulePageConfiguration";
import {IAreasConfig} from "../../interfaces/IAreasConfig";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {takeUntil} from "rxjs/operators";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: "app-widget-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-widget-wrapper *ngFor="let widget of widgetList; let i=index"
                        [widgetComponent]="widget.widgetComponentType"
                        [data]="widget.widgetData"
                        [areaViewConfig]="viewConfig.areasConfig[i]">
    </app-widget-wrapper>
  `,
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent extends DocumentBaseComponent {
  @Input()
  public set pageConfig(options: IModulePageConfiguration | IDynamicPageViewConfig) {
    if ((options as IModulePageConfiguration).viewConfig)
      this.viewConfig = (options as IModulePageConfiguration).viewConfig.config as IDynamicPageViewConfig;
    else this.viewConfig = options as IDynamicPageViewConfig;

    this.widgetAreas = this.viewConfig.areasConfig;

    this.widgetService.widgetList(this.widgetAreas)
      .pipe(takeUntil(this.destroy$))
      .subscribe((widgets: WidgetListItem[]) => {
        this.widgetList = widgets;
      });

    this.setGridTemplate();
  };

  @HostBinding('style.grid-auto-rows') gridAutoRows;
  @HostBinding('style.grid-auto-columns') gridAutoColumns;
  @HostBinding('style.grid-template-areas') gridTemplateAreas;
  @HostBinding('style.grid-template-columns') gridTemplateColumns;
  @HostBinding('style.grid-template-rows') gridTemplateRows;

  public widgetAreas: IAreasConfig[] = [];
  public widgetList: WidgetListItem[] = [];
  public viewConfig: IDynamicPageViewConfig;

  constructor(private widgetService: WidgetsFactoryService,
              private sanitizer: DomSanitizer) {
    super();
  }

  setGridTemplate(): void {
    this.viewConfig.gridTemplate.forEach((gtpl, i, array) => {
      array[i] = `\"${gtpl}\"`;
    });

    this.gridTemplateAreas = this.sanitizer.bypassSecurityTrustStyle(`${this.viewConfig.gridTemplate.join(' ')}`);
    this.gridTemplateColumns = this.sanitizer.bypassSecurityTrustStyle(`${this.viewConfig.columnSize}`);
    this.gridTemplateRows = this.sanitizer.bypassSecurityTrustStyle(`${this.viewConfig.rowSize}`);
  }
}
