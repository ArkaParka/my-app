import {IWidgetConfig} from "./IWidgetConfig";

export interface IWidgetAction {
  actionType: string;
  options: {
    targetArea: string;
    widgetConfig: IWidgetConfig;
  }
}
