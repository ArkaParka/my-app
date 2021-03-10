import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input} from "@angular/core";
import {WidgetListItem, WidgetsFactoryService} from "../../dynamic-page-services/widgets-factory.service";
import {IWidgetOptions} from "../../interfaces/IWidgetOptions";
import {IDynamicPageViewConfig} from "../../../models/IDynamicPageViewConfig";
import {IViewConfig} from "../../../models/ViewConfiguration.interface";
import {IModulePageConfiguration} from "../../../models/IModulePageConfiguration";
import {IAreasConfig} from "../../interfaces/IAreasConfig";
import {map, switchMap} from "rxjs/operators";
import {combineLatest} from "rxjs";

@Component({
  selector: "app-widget-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngFor="let widget of widgetService.widgetList(widgetAreas)|async">
      <app-widget-wrapper
        [widgetComponent]="widget.widgetComponentType"
        [data]="widget.widgetData">
      </app-widget-wrapper>
    </ng-container>
  `
})
export class WidgetListComponent implements OnInit {
  private _pageConfig: IModulePageConfiguration;

  @Input()
  public set pageConfig(options: IModulePageConfiguration | IDynamicPageViewConfig) {
    // console.log('widget-list options', options)
    if ((options as IModulePageConfiguration).viewConfig) {
      this._pageConfig = options as IModulePageConfiguration;
      this.widgetAreas = ((options as IModulePageConfiguration).viewConfig.config as IDynamicPageViewConfig).areasConfig;
    } else {
      this.widgetAreas = (options as IDynamicPageViewConfig).areasConfig;
      // console.log("попались", options)
    }

    // this.widgetService.widgetList(this.widgetAreas).pipe(
    //   switchMap(widgets => {
    //     let arr = [];
    //     widgets.forEach(widget => arr.push(widget.widgetData.getData()))
    //     return combineLatest(arr);
    //   })
    // ).subscribe(data=>{
    //   console.log('widget-data', data)
    // })
    // console.log('widget-list areas', this.widgetAreas)
  };

  public get pageConfig() {
    return this._pageConfig;
  }

  public widgetAreas: IAreasConfig[] = [];

  public get widgets(): WidgetListItem[] {
    return this._widgets;
  }

  private _widgets: WidgetListItem[];

  constructor(public widgetService: WidgetsFactoryService) {
  }

  public ngOnInit(): void {
  }
}
