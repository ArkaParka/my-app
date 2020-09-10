import {IWidgetEventAction} from "./IWidgetEventAction";

export interface IWidgetEvent {
  eventType: string;
  dataType: string;
  actions: IWidgetEventAction[]
}
