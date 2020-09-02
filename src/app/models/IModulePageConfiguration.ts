import {IActions} from './IActions';
import {IViewConfig} from './ViewConfiguration.interface';
import {IDataTypes} from './IDataTypes';

export interface IModulePageConfiguration {
  actions: IActions[],
  viewConfig: IViewConfig,
  dataTypes: IDataTypes[],
  typePageViewConfig?: any[]
}
