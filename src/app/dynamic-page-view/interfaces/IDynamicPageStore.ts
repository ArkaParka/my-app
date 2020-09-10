import {IWidgetEventAction} from "./IWidgetEventAction";
import {ITypePageViewConfig} from "./ITypePageViewConfig";

export interface IDynamicPageStore {
  widgetAction: IWidgetEventAction[];
  typePageViewConfigs: ITypePageViewConfig[];
}
