import {ChangeDetectionStrategy, Component, Inject, Optional} from "@angular/core";
import {combineLatest} from "rxjs";
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";
import {takeUntil} from "rxjs/operators";
import {DocumentBaseComponent} from "../../../containers/document-base.component";

@Component({
  template: `<textarea [(ngModel)]="widgetData"></textarea>`,
  styles: [`textarea {
    width: 100%;
    height: 100%
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent extends DocumentBaseComponent {
  public widgetOptions: any = null;
  public widgetData: string = "";

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<any>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [any, string]) => {
        this.widgetOptions = data[0];
        if (data[1])
          this.widgetData = data[1];
      });
  }
}
