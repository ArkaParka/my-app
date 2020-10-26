import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {IInputCheckboxWidgetOptions} from "../../interfaces/IInputCheckboxWidgetOptions";

@Component({
  template: `<input type="checkbox"><label>{{widgetOptions?.description?.value}}</label>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCheckboxComponent implements OnInit {
  @Input() widgetOptions: IInputCheckboxWidgetOptions;
  @Input() widgetData: any;

  ngOnInit(): void {
    console.log(this.widgetOptions)
  }
}
