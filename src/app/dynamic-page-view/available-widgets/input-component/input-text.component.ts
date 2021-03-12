import {ChangeDetectionStrategy, Component, Inject, Optional} from "@angular/core";
import {IInputTextWidgetOptions} from "../../interfaces/IInputTextWidgetOptions";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {combineLatest} from "rxjs";
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

  public widgetData: string = "";
  public widgetOptions: IInputTextWidgetOptions = null;
  public pattern;


  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IInputTextWidgetOptions>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IInputTextWidgetOptions, string]) => {
        this.widgetOptions = data[0];
        if (data[1])
          this.widgetData = data[1];
      });
  }

}
