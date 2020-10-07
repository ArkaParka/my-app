import {BlankComponent} from "./blank-component/blank-component";
import {TabTreeComponent} from "./tabs-component/tabs.component";
import {GridContainerComponent} from "../grid-container/grid-container.component";
import {LabelComponent} from "./label/label.component";
import {InputComponent} from "./input-component/input.component";
import {TextareaComponent} from "./textarea-component/textarea.component";
import {PageViewComponent} from "./page-view-component/page-view.component";

const widgetList:
  {
    widgetName: string;
    component: any
  } [] = [
  {
    widgetName: 'BLANK',
    component: BlankComponent
  },
  {
    widgetName: 'TABS',
    component: TabTreeComponent
  },
  {
    widgetName: 'INNER_GRID',
    component: GridContainerComponent
  },
  {
    widgetName: 'LABEL',
    component: LabelComponent
  },
  {
    widgetName: 'INPUT',
    component: InputComponent
  },
  {
    widgetName: 'TEXTAREA',
    component: TextareaComponent
  },
  {
    //TODO: разбираться с PAGE_VIEW
    widgetName: 'PAGE_VIEW',
    component: PageViewComponent
  }
];


export function getDynamicWidget(widgetName: string) {
  return widgetList.find(widget => widget.widgetName === widgetName)
    || widgetList.find(widget => widget.widgetName === 'BLANK');
}
