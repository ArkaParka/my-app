import {Component, Input} from "@angular/core";
import {IModulePageConfiguration} from "../../models/IModulePageConfiguration";
import {DynamicPageStoreService} from "../dynamic-page-services/dynamic-page-store.service";
import {EActionConfigType} from "../../models/IActions";
import {DynamicMenuService} from "../../services/dynamic-menu.service";
import {zip} from "rxjs";
import {IPageActionResponse} from "../interfaces/IPageActionResponse";

@Component({
  selector: 'app-dynamic-page-view',
  template: `
    <app-grid-container *ngIf="this.dpStore.select('isInitialDataLoaded')|async"
                        [widgetOptions]="pageConfig.viewConfig.config"></app-grid-container>`,
  styles: [`:host {
    display: block;
    height: 100%
  }`]
})
export class DynamicPageComponent {
  private moduleKey: string = null;
  private configPath: string = null;
  private pageConfig: any = null;

  constructor(public dpStore: DynamicPageStoreService,
              private dynamicMenuService: DynamicMenuService) {
  }

  @Input('dataForComponent') set dataForComponent(data: { moduleKey: string, configPath: string, pageConfiguration: IModulePageConfiguration }) {
    this.moduleKey = data.moduleKey;
    this.configPath = data.configPath;
    // this.pageConfig = mock;
    this.pageConfig = data.pageConfiguration;

    let initialDataActions = this.pageConfig.actions.filter(action => action.configType === EActionConfigType.GET_DATA_REQUEST);
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
    this.dpStore.setState({typePageViewConfigs: this.pageConfig.typePageViewConfigs});
  }
}
