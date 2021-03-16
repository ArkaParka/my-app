import {Injectable, InjectionToken} from "@angular/core";
import {Type} from "@angular/core";
import {Observable, of} from "rxjs";
import {BlankComponent} from '../available-widgets/blank-component/blank-component';
import {TabTreeComponent} from "../available-widgets/tabs-component/tabs.component";
import {IAreasConfig} from "../interfaces/IAreasConfig";
import {TextareaComponent} from "../available-widgets/textarea-component/textarea.component";
import {PageViewComponent} from "../available-widgets/page-view-component/page-view.component";
import {LabelComponent} from "../available-widgets/label/label.component";
import {InputTextComponent} from "../available-widgets/input-component/input-text.component";
import {InputNumberComponent} from "../available-widgets/input-component/input-number.component";
import {InputCheckboxComponent} from "../available-widgets/input-component/input-checkbox.component";
import {TableComponent} from "../available-widgets/table-component/table.component";
import {ButtonComponent} from "../available-widgets/button/button.component";
import {DynamicPageStoreService} from "./dynamic-page-store.service";
import {LinkComponent} from '../available-widgets/link/link.component';


export const WIDGET_OPTIONS: InjectionToken<WidgetOptions<any>> = new InjectionToken("WIDGET_OPTIONS");
export const DP_STORE: InjectionToken<WidgetOptions<any>> = new InjectionToken("DP_STORE");

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

@Injectable({
  providedIn: "root"
})
export class WidgetsFactoryService {

  public widgetList(areas: IAreasConfig[]): Observable<WidgetListItem[]> {
    let arr: WidgetListItem[] = areas.reduce((acc: any, area) => {
      let allWidgets = this.initFullWidgetList();

      let widget = allWidgets.find(widget => widget.alias === area.widgetConfig.type)
        || allWidgets.find(widget => widget.alias === 'BLANK');

      widget.widgetData.getOptions = () => {
        return of(area.widgetConfig.options)
      };
      widget.widgetData.getAreaName = () => {
        return of(area.areaName)
      };
      widget.widgetData.getWidgetData = () => {
        return this.dpStore.selectDeepByFilter('widgetData', area.widgetConfig?.options?.fieldName?.value)
      };

      acc.push(widget);
      return acc;
    }, []);

    return of(arr)
  }

  constructor(private dpStore: DynamicPageStoreService) {
  }

  protected initFullWidgetList(): WidgetListItem[] {
    return [
      {
        alias: 'INNER_GRID',
        widgetComponentType: PageViewComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'PAGE_VIEW',
        widgetComponentType: PageViewComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'BLANK',
        widgetComponentType: BlankComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null);
          }
        }
      },
      {
        alias: 'TABS',
        widgetComponentType: TabTreeComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null);
          }
        }
      },
      {
        alias: 'LABEL',
        widgetComponentType: LabelComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'INPUT_STRING',
        widgetComponentType: InputTextComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'INPUT_NUMBER',
        widgetComponentType: InputNumberComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'INPUT_BOOLEAN',
        widgetComponentType: InputCheckboxComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'TEXTAREA',
        widgetComponentType: TextareaComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'TABLE',
        widgetComponentType: TableComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'BUTTON',
        widgetComponentType: ButtonComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'SIMPLE_LINK',
        widgetComponentType: LinkComponent,
        widgetData: {
          getOptions(): Observable<any> {
            return of(null);
          }
        }
      }
    ];
  }
}

