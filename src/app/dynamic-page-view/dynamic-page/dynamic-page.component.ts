import {Component, Input} from "@angular/core";
import {IModulePageConfiguration} from "../../models/IModulePageConfiguration";

@Component({
  selector: 'app-dynamic-page-view',
  template: `<app-grid-container [gridTemplate]="pageConfig.viewConfig.config"></app-grid-container>`,
  styles: [`:host {display: block; height: 100%}`]
})
export class DynamicPageComponent {
  private moduleKey: string = null;
  private configPath: string = null;
  private pageConfig: IModulePageConfiguration = null;

  @Input('dataForComponent') set dataForComponent(data: { moduleKey: string, configPath: string, pageConfiguration: IModulePageConfiguration }) {
    this.moduleKey = data.moduleKey;
    this.configPath = data.configPath;
    this.pageConfig = data.pageConfiguration;
    console.log(this.pageConfig)
  }
}
