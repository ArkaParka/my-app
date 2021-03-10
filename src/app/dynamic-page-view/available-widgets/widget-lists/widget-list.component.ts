import {Component, ChangeDetectionStrategy, ViewEncapsulation, Input, OnChanges, SimpleChanges} from "@angular/core";
import {WidgetListItem, WidgetsFactoryService} from "../../dynamic-page-services/widgets-factory.service";
import {IDynamicPageViewConfig} from "../../../models/IDynamicPageViewConfig";
import {IModulePageConfiguration} from "../../../models/IModulePageConfiguration";
import {IAreasConfig} from "../../interfaces/IAreasConfig";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: "app-widget-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngFor="let widget of widgetList">
      <app-widget-wrapper
        [widgetComponent]="widget.widgetComponentType"
        [data]="widget.widgetData">
      </app-widget-wrapper>
    </ng-container>
  `
})
export class WidgetListComponent extends DocumentBaseComponent {
  @Input()
  public set pageConfig(options: IModulePageConfiguration | IDynamicPageViewConfig) {
    if ((options as IModulePageConfiguration).viewConfig) {
      this.widgetAreas = ((options as IModulePageConfiguration).viewConfig.config as IDynamicPageViewConfig).areasConfig;
    } else {
      this.widgetAreas = (options as IDynamicPageViewConfig).areasConfig;
    }

    this.widgetService.widgetList(this.widgetAreas)
      .pipe(takeUntil(this.destroy$))
      .subscribe((widgets: WidgetListItem[]) => {
        this.widgetList = widgets;
      })
  };

  public widgetAreas: IAreasConfig[] = [];
  public widgetList: WidgetListItem[] = [];

  constructor(public widgetService: WidgetsFactoryService) {
    super();
  }
}
