import {Injectable, InjectionToken} from "@angular/core";
import {Type} from "@angular/core";
import {BehaviorSubject, Observable, of} from "rxjs";
import {BlankComponent} from "../available-widgets/blank-component/blank-component";
import {Widget} from "ngx-schema-form";
import {TabTreeComponent} from "../available-widgets/tabs-component/tabs.component";
import {IAreasConfig} from "../interfaces/IAreasConfig";
import {TextareaComponent} from "../available-widgets/textarea-component/textarea.component";
import {PageViewComponent} from "../available-widgets/page-view-component/page-view.component";
import {GridContainerComponent} from "../grid-container/grid-container.component";
import {LabelComponent} from "../available-widgets/label/label.component";
import {InputTextComponent} from "../available-widgets/input-component/input-text.component";
import {InputNumberComponent} from "../available-widgets/input-component/input-number.component";
import {InputCheckboxComponent} from "../available-widgets/input-component/input-checkbox.component";
import {IDynamicWidget} from "../interfaces/IDynamicWidget";

export interface WidgetData<T> {
  getData(): Observable<T>;
}

export const WIDGET_DATA: InjectionToken<WidgetData<any>> = new InjectionToken("WIDGET_DATA");
export const DP_STORE: InjectionToken<WidgetData<any>> = new InjectionToken("DP_STORE");

export interface WidgetData<T> {
  getData(): Observable<T>;
}


export interface WidgetListItem {
  alias: string;
  widgetComponentType: Type<any>;
  widgetData: WidgetData<any>;
}

@Injectable({
  providedIn: "root"
})
export class WidgetsFactoryService {
  private readonly allWidgets: WidgetListItem[];

  public widgetList(areas: IAreasConfig[]): Observable<WidgetListItem[]> {
    let allWidgets = this.initFullWidgetList();

    let arr: WidgetListItem[] = areas.reduce((acc: any, area) => {
      let widget = allWidgets.find(widget => widget.alias === area.widgetConfig.type)
        || allWidgets.find(widget => widget.alias === 'BLANK');

      console.log(`${area.areaName}: ${area.widgetConfig.options?.page_key?.value || area.widgetConfig.options.innerGridConfig?.value?.type}`, area?.widgetConfig?.options)

      widget.widgetData.getData = () => {
        return of(area.widgetConfig.options)
      };
      acc.push(widget);
      return acc;
    }, []);

    return of(arr)
  }

  constructor() {
  }

  protected initFullWidgetList(): WidgetListItem[] {
    return [
      // {
      //   alias: 'INNER_GRID',
      //   widgetComponentType: PageViewComponent,
      //   widgetData: {
      //     getData(): Observable<any> {
      //       return of(null)
      //     }
      //   }
      // },
      {
        alias: 'PAGE_VIEW',
        widgetComponentType: PageViewComponent,
        widgetData: {
          getData(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'BLANK',
        widgetComponentType: BlankComponent,
        widgetData: {
          getData(): Observable<any> {
            return of(null);
          }
        }
      },
      {
        alias: 'TABS',
        widgetComponentType: TabTreeComponent,
        widgetData: {
          getData(): Observable<any> {
            return of(null);
          }
        }
      },
      {
        alias: 'LABEL',
        widgetComponentType: LabelComponent,
        widgetData: {
          getData(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'INPUT_STRING',
        widgetComponentType: InputTextComponent,
        widgetData: {
          getData(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'INPUT_NUMBER',
        widgetComponentType: InputNumberComponent,
        widgetData: {
          getData(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'INPUT_BOOLEAN',
        widgetComponentType: InputCheckboxComponent,
        widgetData: {
          getData(): Observable<any> {
            return of(null)
          }
        }
      },
      {
        alias: 'TEXTAREA',
        widgetComponentType: TextareaComponent,
        widgetData: {
          getData(): Observable<any> {
            return of(null)
          }
        }
      },
    ];
  }
}

