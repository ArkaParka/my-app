import {IWidgetConfig} from "./IWidgetConfig";

export interface ITabTreeWidgetOptions {
  tabs: {
    value: [
      {
        title: string;
        config: {
          widgetConfig: IWidgetConfig
        }
      }
    ]
  }
}
