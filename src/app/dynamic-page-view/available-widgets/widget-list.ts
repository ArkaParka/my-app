import {BlankComponent} from "./blank-component/blank-component";
import {TabTreeComponent} from "./tabs-component/tabs.component";
import {GridContainerComponent} from "../grid-container/grid-container.component";
import {LabelComponent} from "./label/label.component";

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
  }
];


export function getDynamicWidget(widgetName: string) {
  return widgetList.find(widget => widget.widgetName === widgetName)
    || widgetList.find(widget => widget.widgetName === 'BLANK');
}
