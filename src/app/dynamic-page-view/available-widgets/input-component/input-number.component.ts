import {ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";
import {IInputNumberWidgetOptions} from "../../interfaces/IInputNumberWidgetOptions";
import {FormControl, Validators} from "@angular/forms";

@Component({
  template: `<input type="number" [(ngModel)]="widgetData"
                    [max]="widgetOptions?.maxValue?.value"
                    [min]="widgetOptions?.minValue?.value"
                    [formControl]="formControl">`,
  styles: [`input {
    width: 100%;
    height: 100%
  }`]
})
export class InputNumberComponent implements OnInit {
  @Input() widgetOptions: IInputNumberWidgetOptions;
  @Input() widgetData: any = 0;

  public formControl: FormControl = new FormControl();

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe(value => {
      if (value < this.widgetOptions.minValue.value)
        this.formControl.setValue(this.widgetOptions.minValue.value, {emitEvent: false});
      if (value > this.widgetOptions.maxValue.value)
        this.formControl.setValue(this.widgetOptions.maxValue.value, {emitEvent: false});
      this.cd.detectChanges();
    });
  }
}
