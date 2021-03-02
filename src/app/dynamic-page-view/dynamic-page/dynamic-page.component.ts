import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {IModulePageConfiguration} from "../../models/IModulePageConfiguration";
import {DynamicPageStoreService} from "../dynamic-page-services/dynamic-page-store.service";
import {EActionConfigType} from "../../models/IActions";
import {DynamicMenuService} from "../../services/dynamic-menu.service";
import {combineLatest, zip} from "rxjs";
import {IPageActionResponse} from "../interfaces/IPageActionResponse";
import {filter, switchMap, takeUntil} from "rxjs/operators";
import {ITypePageViewConfig} from "../interfaces/ITypePageViewConfig";
import {IWidgetDataRequest} from "../interfaces/IWidgetDataRequest";
import {IAreasConfig} from "../interfaces/IAreasConfig";
import {IWidgetData} from "../interfaces/IWidgetData";
import {DocumentBaseComponent} from "../../containers/document-base.component";

@Component({
  selector: 'app-dynamic-page-view',
  template: `
    <app-widget-list [pageConfig]="pageConfig"></app-widget-list>`,
  styles: [`:host {
    display: block;
    height: 100%
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicPageComponent extends DocumentBaseComponent {
  private moduleKey: string = null;
  private configPath: string = null;
  private _pageConfig: any = null;

  public get pageConfig() {
    return this._pageConfig;
  }

  constructor(public dpStore: DynamicPageStoreService,
              private dynamicMenuService: DynamicMenuService) {
    super();
  }

  @Input('dataForComponent') set dataForComponent(data: { moduleKey: string, configPath: string, pageConfiguration: IModulePageConfiguration }) {
    this.moduleKey = data.moduleKey;
    this.configPath = data.configPath;
    this._pageConfig = data.pageConfiguration;
    this.dpStore.setState({typePageViewConfigs: this._pageConfig.typePageViewConfigs});

    console.log(data)

    this.executeInitialDataActions();
    this.getInitialWidgetsData();
    this.getWidgetsData();
  }

  private executeInitialDataActions(): void {
    let initialDataActions = this._pageConfig.actions.filter(action => action.configType === EActionConfigType.GET_DATA_REQUEST);
    if (initialDataActions && initialDataActions.length) {
      let requests = [];
      initialDataActions.forEach(action => requests.push(this.dynamicMenuService.executePageAction(this.moduleKey, action.actionName, action.execConfig.pageUID)));
      zip(...requests).subscribe((result: IPageActionResponse[]) => {
        let initialData: { dataPath: string, data: any }[] = [];
        result.forEach(res => initialData.push({dataPath: res.actionType, data: res.value}));
        this.dpStore.setState({initialWidgetData: initialData, isInitialDataLoaded: true});
      })
    } else {
      this.dpStore.setState({isInitialDataLoaded: true})
    }
  }

  private getInitialWidgetsData(): void {
    this.dpStore.select('typePageViewConfigs').pipe(
      filter(data => !!data),
      switchMap((typePageViewConfigs: ITypePageViewConfig[]) => {
        let initialWidgetDataRequests = [];
        this._pageConfig.viewConfig.config.areasConfig
          .filter((area: IAreasConfig) => area.widgetConfig?.options?.needsDataPreload)
          .forEach((area: IAreasConfig) => {
            let typePageViewConfig: ITypePageViewConfig = typePageViewConfigs.find(config => config.key === area.widgetConfig.options.page_key.value);
            initialWidgetDataRequests.push(this.dynamicMenuService.getFormDataInstance(this.moduleKey, typePageViewConfig.pageUID, typePageViewConfig.key, null));
          });
        return combineLatest(initialWidgetDataRequests);
      }),
      takeUntil(this.destroy$)
    ).subscribe((initWidgetData: IWidgetData[]) => {
      this.dpStore.setState({widgetData: initWidgetData});
    });
  }

  private getWidgetsData(): void {
    let widgetsDataRequest: IWidgetDataRequest = {id: null, type: null, key: null};
    this.dpStore.select('widgetDataRequest').pipe(
      filter(data => !!data),
      switchMap((wdr: IWidgetDataRequest) => {
        widgetsDataRequest.id = wdr.id;
        widgetsDataRequest.type = wdr.type;
        return this.dpStore.select('typePageViewConfigs')
      }),
      filter(data => !!data),
      switchMap((typePageViewConfigs: ITypePageViewConfig[]) => {
        widgetsDataRequest.key = typePageViewConfigs.find(config => config.key === widgetsDataRequest.type)?.pageUID;
        return this.dynamicMenuService.getFormDataInstance(this.moduleKey, widgetsDataRequest.key, widgetsDataRequest.type, widgetsDataRequest.id);
      }),
      takeUntil(this.destroy$)
    ).subscribe((widgetData: IWidgetData) => {
      this.dpStore.setState({widgetData: [widgetData]});
    });
  }
}
