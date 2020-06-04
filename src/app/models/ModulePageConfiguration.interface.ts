import { Actions } from './Actions.interface';
import { ViewConfiguration } from './ViewConfiguration.interface';
import { DataTypes } from './DataTypes.interface';

export interface ModulePageConfiguration {
    actions: Actions[], 
    viewConfig: ViewConfiguration,
    dataTypes: DataTypes[]
}
