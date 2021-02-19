import {IDynamicTableColumnConfig} from './IDynamicTableColumnConfig';

export interface IWidgetTableConfig {
  fieldName: {value: string};
  columns: { value: IDynamicTableColumnConfig[] };
  additionalProperties: { value: any };
}
