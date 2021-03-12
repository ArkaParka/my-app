import {ChangeDetectionStrategy, Component, Inject, Optional} from "@angular/core";
import {IInputCheckboxWidgetOptions} from "../../interfaces/IInputCheckboxWidgetOptions";
import {BehaviorSubject, combineLatest} from "rxjs";
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";
import {takeUntil} from "rxjs/operators";
import {DocumentBaseComponent} from "../../../containers/document-base.component";

@Component({
  template: `<input type="checkbox"><label>{{widgetOptions?.description?.value}}</label>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCheckboxComponent extends DocumentBaseComponent {

  private _widgetData: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private _widgetOptions: BehaviorSubject<IInputCheckboxWidgetOptions> = new BehaviorSubject<any>(null);

  public get widgetOptions(): IInputCheckboxWidgetOptions {
    return this._widgetOptions.getValue();
  }

  public get widgetData(): string {
    return this._widgetData.getValue();
  }

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IInputCheckboxWidgetOptions>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IInputCheckboxWidgetOptions, string]) => {
        this._widgetOptions.next(data[0]);
        if (data[1])
          this._widgetData.next(data[1]);
      });
  }
}
