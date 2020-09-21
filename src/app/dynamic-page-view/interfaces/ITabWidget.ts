import {IWidgetConfig} from "./IWidgetConfig";

export interface ITabWidget {
  title: string,
  config: { widgetConfig: IWidgetConfig }
}
