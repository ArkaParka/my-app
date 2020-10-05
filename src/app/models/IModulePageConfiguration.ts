import {IActions} from './IActions';
import {IViewConfig} from './ViewConfiguration.interface';
import {IDataTypes} from './IDataTypes';
import {ITypePageViewConfig} from "../dynamic-page-view/interfaces/ITypePageViewConfig";

export interface IModulePageConfiguration {
  actions: IActions[],
  viewConfig: IViewConfig,
  dataTypes: IDataTypes[],
  typePageViewConfigs?: ITypePageViewConfig[]
}
