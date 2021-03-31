import {IWidgetEventAction} from "./IWidgetEventAction";
import {ITypePageViewConfig} from "./ITypePageViewConfig";
import {IInitWidgetData} from "./IInitWidgetData";
import {IWidgetData} from "./IWidgetData";
import {IWidgetDataRequest} from "./IWidgetDataRequest";
import {IActiveWidgetAction} from './IActiveWidgetAction';
import {IFormWidget} from './IFormWidget';

export interface IDynamicPageStore {
  widgetAction: IWidgetEventAction[];
  activeWidgetAction: IActiveWidgetAction[]; // <<
  typePageViewConfigs: ITypePageViewConfig[];
  initialWidgetData: IInitWidgetData[];
  isInitialDataLoaded: boolean;
  widgetData: IWidgetData[];
  widgetDataRequest: IWidgetDataRequest;
  needsDetectChanges: boolean;
  forms: IFormWidget[];
  getWidgetDataTrigger: boolean;
  modalWidgetsData: any[];
}
