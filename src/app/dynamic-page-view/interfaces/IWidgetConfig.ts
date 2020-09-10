import {IWidgetOptions} from "./IWidgetOptions";

export interface IWidgetConfig {
  type: string;
  options: IWidgetOptions;
  dataType?: any;
}
