import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from "@angular/core";
import {IInputTextWidgetOptions} from "../../interfaces/IInputTextWidgetOptions";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {BehaviorSubject, combineLatest} from "rxjs";
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";
import {takeUntil} from "rxjs/operators";

@Component({
  template: `<input [(ngModel)]="widgetData"
                    [mask]="widgetOptions?.mask?.value"
                    [maxLength]="widgetOptions?.length?.value">`,
  styles: [`input {
    width: 100%;
    height: 100%
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends DocumentBaseComponent {

  private _widgetData: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private _widgetOptions: BehaviorSubject<IInputTextWidgetOptions> = new BehaviorSubject<any>(null);
  public pattern;

  public get widgetOptions(): IInputTextWidgetOptions {
    return this._widgetOptions.getValue();
  }

  public get widgetData(): string {
    return this._widgetData.getValue();
  }

  public set widgetData(value: string) {
    this._widgetData.next(value);
  }

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IInputTextWidgetOptions>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IInputTextWidgetOptions, string]) => {
        this._widgetOptions.next(data[0]);
        if (data[1])
          this._widgetData.next(data[1]);
      });
  }

}
