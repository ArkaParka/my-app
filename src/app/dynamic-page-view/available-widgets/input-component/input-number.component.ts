import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Optional} from "@angular/core";
import {IInputNumberWidgetOptions} from "../../interfaces/IInputNumberWidgetOptions";
import {FormControl} from "@angular/forms";
import {combineLatest} from "rxjs";
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";
import {takeUntil} from "rxjs/operators";
import {DocumentBaseComponent} from "../../../containers/document-base.component";

@Component({
  template: `<input type="number"
                    [max]="widgetOptions?.maxValue?.value"
                    [min]="widgetOptions?.minValue?.value"
                    [formControl]="formControl">`,
  styles: [`input {
    width: 100%;
    height: 100%
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputNumberComponent extends DocumentBaseComponent implements OnInit {

  public formControl: FormControl;
  public widgetData: Number = NaN;
  public widgetOptions: IInputNumberWidgetOptions = null;

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IInputNumberWidgetOptions>,
              private cd: ChangeDetectorRef) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IInputNumberWidgetOptions, number]) => {
        this.widgetOptions = data[0];
        if (data[1])
          this.widgetData = data[1];
      });
  }

  ngOnInit(): void {
    this.formControl = new FormControl();
    this.formControl.setValue(this.widgetData, {emitEvent: false});
    this.formControl.valueChanges.subscribe(value => {
      if (value < this.widgetOptions.minValue.value)
        this.formControl.setValue(this.widgetOptions.minValue.value, {emitEvent: false});
      if (value > this.widgetOptions.maxValue.value)
        this.formControl.setValue(this.widgetOptions.maxValue.value, {emitEvent: false});
      this.cd.detectChanges();
    });
  }
}
