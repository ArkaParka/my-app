import {IWidgetEventAction} from "./IWidgetEventAction";
import {ITypePageViewConfig} from "./ITypePageViewConfig";
import {IInitWidgetData} from "./IInitWidgetData";

export interface IDynamicPageStore {
  widgetAction: IWidgetEventAction[];
  typePageViewConfigs: ITypePageViewConfig[];
  initialWidgetData: IInitWidgetData[];
  isInitialDataLoaded: boolean;
}
