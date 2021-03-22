import {NgModule} from "@angular/core";
import {DynamicPageMockComponent} from "./dynamic-page-mock/dynamic-page-mock.component";
import {CommonModule} from "@angular/common";
import {DynamicPageComponent} from "./dynamic-page/dynamic-page.component";
import {BlankComponent} from "./available-widgets/blank-component/blank-component";
import {TabTreeComponent} from "./available-widgets/tabs-component/tabs.component";
import {TabsModule} from "ngx-bootstrap/tabs";
import {NzIconModule, NzTreeModule} from "ng-zorro-antd";
import {TreeListComponent} from "./available-widgets/tree-list-component/tree-list.component";
import {LabelComponent} from "./available-widgets/label/label.component";
import {InputTextComponent} from "./available-widgets/input-component/input-text.component";
import {SharedModule} from "../shared/shared.module";
import {TextareaComponent} from "./available-widgets/textarea-component/textarea.component";
import {PageViewComponent} from "./available-widgets/page-view-component/page-view.component";
import {InputNumberComponent} from "./available-widgets/input-component/input-number.component";
import {NgxMaskModule} from "ngx-mask";
import {InputCheckboxComponent} from "./available-widgets/input-component/input-checkbox.component";
import {TableComponent} from './available-widgets/table-component/table.component';
import {ButtonComponent} from './available-widgets/button/button.component';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {MaskPipe} from './available-widgets/table-component/MaskPipe';
import {LinkComponent} from './available-widgets/link/link.component';
import {WidgetListComponent} from "./available-widgets/widget-lists/widget-list.component";
import {WidgetWrapperComponent} from "./available-widgets/widget-lists/widget-wrapper.component";
import { ModalComponent } from './available-widgets/modal/modal.component';

const AvailableWidgets = [
  BlankComponent,
  TabTreeComponent,
  TreeListComponent,
  LabelComponent,
  InputTextComponent,
  InputNumberComponent,
  InputCheckboxComponent,
  TextareaComponent,
  PageViewComponent,
  TableComponent,
  ButtonComponent,
  LinkComponent,
  WidgetListComponent,
  WidgetWrapperComponent,
  ModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    NzTreeModule,
    NzIconModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [
    DynamicPageMockComponent,
    DynamicPageComponent,
    ...AvailableWidgets,
    MaskPipe,
  ],
  exports: [
    DynamicPageMockComponent,
    DynamicPageComponent
  ],
  entryComponents: [
    ...AvailableWidgets
  ]
})
export class DynamicPageViewModule {

}
