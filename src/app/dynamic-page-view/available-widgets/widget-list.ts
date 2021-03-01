import {BlankComponent} from "./blank-component/blank-component";
import {TabTreeComponent} from "./tabs-component/tabs.component";
import {GridContainerComponent} from "../grid-container/grid-container.component";
import {LabelComponent} from "./label/label.component";
import {InputTextComponent} from "./input-component/input-text.component";
import {TextareaComponent} from "./textarea-component/textarea.component";
import {PageViewComponent} from "./page-view-component/page-view.component";
import {InputNumberComponent} from "./input-component/input-number.component";
import {InputCheckboxComponent} from "./input-component/input-checkbox.component";
import {TableComponent} from "./table-component/table.component"; //<<
import {ButtonComponent} from "./button/button.component";

interface IDynamicWidget {
  widgetName: string;
  component: any;
}

const widgetList: IDynamicWidget[] = [
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
  },
  {
    widgetName: 'TABLE',
    component: TableComponent
  },
  {
    widgetName: 'BUTTON',
    component: ButtonComponent
  }
];


export function getDynamicWidget(widgetName: string) {
    return widgetList.find(widget => widget.widgetName === widgetName)
      || widgetList.find(widget => widget.widgetName === 'BLANK');
}
