import {IWidgetConfig} from "./IWidgetConfig";

export interface ITabTree {
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
