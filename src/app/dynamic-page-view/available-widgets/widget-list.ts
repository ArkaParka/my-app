import {BlankComponent} from "./blank-component/blank-component";
import {TabTreeComponent} from "./tabs-component/tabs.component";
import {GridContainerComponent} from "../grid-container/grid-container.component";
import {LabelComponent} from "./label/label.component";
import {InputTextComponent} from "./input-component/input-text.component";
import {TextareaComponent} from "./textarea-component/textarea.component";
import {PageViewComponent} from "./page-view-component/page-view.component";
import {InputNumberComponent} from "./input-component/input-number.component";
import {InputCheckboxComponent} from "./input-component/input-checkbox.component";

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
    widgetName: 'INPUT_STRING',
    component: InputTextComponent
  },
  {
    widgetName: 'INPUT_NUMBER',
    component: InputNumberComponent
  },
  {
    widgetName: 'INPUT_BOOLEAN',
    component: InputCheckboxComponent
  },
  {
    widgetName: 'TEXTAREA',
    component: TextareaComponent
  },
  {
    widgetName: 'PAGE_VIEW',
    component: PageViewComponent
  }
];


export function getDynamicWidget(widgetName: string) {
  // if (widgetName === 'TABS' || widgetName === 'PAGE_VIEW' || widgetName === 'INNER_GRID')
    return widgetList.find(widget => widget.widgetName === widgetName)
      || widgetList.find(widget => widget.widgetName === 'BLANK');
  // else return widgetList.find(widget => widget.widgetName === 'BLANK');
}
