import {ChangeDetectionStrategy, Component, Inject, Optional} from "@angular/core";
import {IInputCheckboxWidgetOptions} from "../../interfaces/IInputCheckboxWidgetOptions";
import {combineLatest} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/IWIdgetFacrotyInterfaces";

@Component({
  template: `<input type="checkbox"><label>{{widgetOptions?.description?.value}}</label>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCheckboxComponent extends DocumentBaseComponent {

  public widgetData: string = "";
  public widgetOptions: IInputCheckboxWidgetOptions = null;

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IInputCheckboxWidgetOptions>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IInputCheckboxWidgetOptions, string]) => {
        this.widgetOptions = data[0];
        if (data[1])
          this.widgetData = data[1];
      });
  }
}
