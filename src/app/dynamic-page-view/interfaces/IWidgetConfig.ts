import {IWidgetOptions} from "./IWidgetOptions";
import {ILinkWidgetOptions} from './ILinkWidgetOptions';

export interface IWidgetConfig {
  type: string;
  options: IWidgetOptions;
  dataType?: any;
}
