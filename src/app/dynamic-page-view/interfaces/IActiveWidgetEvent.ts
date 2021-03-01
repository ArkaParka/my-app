import {IActiveWidgetAction} from './IActiveWidgetAction';

export interface IActiveWidgetEvent {
  eventType: string;
  dataType: string;
  actions: IActiveWidgetAction[];
}
