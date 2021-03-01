import {IWidgetEventAction} from "./IWidgetEventAction";
import {ITypePageViewConfig} from "./ITypePageViewConfig";
import {IInitWidgetData} from "./IInitWidgetData";
import {IWidgetData} from "./IWidgetData";
import {IWidgetDataRequest} from "./IWidgetDataRequest";
import {IActiveWidgetAction} from './IActiveWidgetAction';

export interface IDynamicPageStore {
  widgetAction: IWidgetEventAction[];
  activeWidgetAction: IActiveWidgetAction[]; // <<
  typePageViewConfigs: ITypePageViewConfig[];
  initialWidgetData: IInitWidgetData[];
  isInitialDataLoaded: boolean;
  widgetData: IWidgetData[];
  widgetDataRequest: IWidgetDataRequest;
  needsDetectChanges: boolean;
}
