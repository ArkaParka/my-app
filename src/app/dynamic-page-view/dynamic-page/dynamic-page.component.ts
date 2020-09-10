import {Component, Input} from "@angular/core";
import {IModulePageConfiguration} from "../../models/IModulePageConfiguration";
import {DynamicPageStoreService} from "../available-widgets/dynamic-page-services/dynamic-page-store.service";
import {mock} from "../../../../dynamic-page-mock";

@Component({
  selector: 'app-dynamic-page-view',
  template: `<app-grid-container [widgetOptions]="pageConfig.viewConfig.config"></app-grid-container>`,
  styles: [`:host {display: block;height: 100%}`]
})
export class DynamicPageComponent {
  private moduleKey: string = null;
  private configPath: string = null;
  private pageConfig: any = null;

  constructor(private dpStore: DynamicPageStoreService) {
  }

  @Input('dataForComponent') set dataForComponent(data: { moduleKey: string, configPath: string, pageConfiguration: IModulePageConfiguration }) {
    this.moduleKey = data.moduleKey;
    this.configPath = data.configPath;
    this.pageConfig = mock;
    //TODO: как бэк подправит конфиг - убрать заглушку
    // this.pageConfig = data.pageConfiguration;
    this.dpStore.setState({typePageViewConfigs: this.pageConfig.typePageViewConfigs});
  }
}
