import {IWidgetEventAction} from "./IWidgetEventAction";

export interface IWidgetEvent {
  eventType: string;
  dataType: string;
  actions: IWidgetEventAction[]
}

export enum EEventTypes {
  ON_SELECT='ON_SELECT'
}
