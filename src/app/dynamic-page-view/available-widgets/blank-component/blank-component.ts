import {ChangeDetectionStrategy, Component, Inject, Optional} from "@angular/core";
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";

@Component({
  template: `
    <ng-container>Пустой виджет</ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlankComponent {
  constructor(@Optional() @Inject(WIDGET_OPTIONS) private widgetData: WidgetOptions<any>) {
  }
}
