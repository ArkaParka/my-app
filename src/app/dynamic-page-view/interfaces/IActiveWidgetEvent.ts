import {IActiveWidgetAction} from './IActiveWidgetAction';
import {EEventTypes} from './EEventTypes';

export interface IActiveWidgetEvent {
  eventType: EEventTypes;
  dataType: string;
  actions: IActiveWidgetAction[];
}
