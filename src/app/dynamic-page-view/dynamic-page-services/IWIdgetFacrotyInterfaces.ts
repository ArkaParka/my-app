import {InjectionToken, Type} from "@angular/core";
import {Observable} from "rxjs";

export const WIDGET_OPTIONS: InjectionToken<WidgetOptions<any>> = new InjectionToken("WIDGET_OPTIONS");
export const DP_STORE: InjectionToken<WidgetOptions<any>> = new InjectionToken("DP_STORE");
export const BC_STORE: InjectionToken<WidgetOptions<any>> = new InjectionToken("BC_STORE");

export interface WidgetOptions<T> {
  getOptions(): Observable<T>;

  getAreaName?(): Observable<string>;

  getWidgetData?(): Observable<any>;
}

export interface WidgetListItem {
  alias: string;
  widgetComponentType: Type<any>;
  widgetData: WidgetOptions<any>;
}
