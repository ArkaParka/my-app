import {IActiveWidgetEvent} from './IActiveWidgetEvent';

export interface IButtonWidgetOptions {
  additionalProperties?: {value: {}};
  events?: {value: IActiveWidgetEvent[]};
  relatedDataWidget?: {value?: {fieldName?: string, useWhen?: string}};
  fieldName?: {value: string};
  height?: {value: string};
  label?: {value: string};
  width?: {value: string};
}
