import {Component, Input, OnInit} from "@angular/core";
import {IInputTextWidgetOptions} from "../../interfaces/IInputTextWidgetOptions";

@Component({
  template: `<input [(ngModel)]="widgetData"
                    [mask]="widgetOptions?.mask?.value"
                    [maxLength]="widgetOptions?.length?.value">`,
  styles: [`input {
    width: 100%;
    height: 100%
  }`]
})
export class InputTextComponent implements OnInit {
  @Input() widgetOptions: IInputTextWidgetOptions;
  @Input() widgetData: any = "";

  ngOnInit(): void {
    console.log(this.widgetOptions)
  }
}
