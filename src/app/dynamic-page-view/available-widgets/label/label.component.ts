import {ChangeDetectionStrategy, Component, Inject, Optional} from "@angular/core";
import {ILabelWidgetOptions} from "../../interfaces/ILabelWidgetOptions";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {BehaviorSubject, combineLatest} from "rxjs";
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";
import {takeUntil} from "rxjs/operators";

@Component({
  template: `
    <ng-container>{{widgetData|async}}</ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent extends DocumentBaseComponent {

  public widgetData: BehaviorSubject<string> = new BehaviorSubject<string>("Пустой Label");
  public widgetOptions: BehaviorSubject<ILabelWidgetOptions> = new BehaviorSubject<any>(null);

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<ILabelWidgetOptions>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [ILabelWidgetOptions, string]) => {
        this.widgetOptions.next(data[0]);
        if (data[1])
          this.widgetData.next(data[1]);
      });
  }
}
