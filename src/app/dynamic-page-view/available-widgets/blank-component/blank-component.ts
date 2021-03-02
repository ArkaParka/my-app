import {ChangeDetectionStrategy, Component, Inject, Optional} from "@angular/core";
import {WIDGET_DATA, WidgetData} from "../../dynamic-page-services/widgets-factory.service";

@Component({
  template: `
    <ng-container>Пустой виджет</ng-container>`,
  styles: [`/*:host {border: 1px solid black}*/`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlankComponent {
  constructor(@Optional() @Inject(WIDGET_DATA) private widgetData: WidgetData<any>) {
  }
}
