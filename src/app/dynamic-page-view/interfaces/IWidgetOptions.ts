import {IWidgetEvent} from "./IWidgetEvent";
import {IDynamicPageViewConfig} from "../../models/IDynamicPageViewConfig";

export interface IWidgetOptions {
  events?: {
    value: IWidgetEvent[];
    page_key?: {
      value: string
    }
  };
  get_data_path?: {
    value: string;
  };
  url?: string;
  innerGridConfig?: {
    value: IDynamicPageViewConfig
  };
  width?: {
    value?: string;
  }
  height?: {
    value?: string;
  };
}
