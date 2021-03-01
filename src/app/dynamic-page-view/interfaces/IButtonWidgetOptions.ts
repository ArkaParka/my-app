import {IActiveWidgetEvent} from './IActiveWidgetEvent';

export interface IButtonWidgetOptions {
  additionalProperties?: {value: {}};
  events?: {value: IActiveWidgetEvent[]};
  fieldName?: {value: string};
  height?: {value: string};
  label?: {value: string};
  width?: {value: string};
}
