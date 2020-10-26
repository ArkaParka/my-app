import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";
import {IInputNumberWidgetOptions} from "../../interfaces/IInputNumberWidgetOptions";
import {FormControl} from "@angular/forms";

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
export class InputNumberComponent implements OnInit {
  @Input() widgetOptions: IInputNumberWidgetOptions;
  @Input() widgetData: number = 0;

  constructor(private cd: ChangeDetectorRef) {
  }

  public formControl: FormControl;

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
