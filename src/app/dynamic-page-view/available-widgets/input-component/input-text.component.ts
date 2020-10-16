import {Component, Input, OnInit} from "@angular/core";
import {IInputTextWidgetOptions} from "../../interfaces/IInputTextWidgetOptions";

@Component({
  template: `<input [(ngModel)]="widgetData"
                    [mask]=""
                    [patterns]="pattern"
                    [maxLength]="widgetOptions?.length?.value">`,
  styles: [`input {
    width: 100%;
    height: 100%
  }`]
})
export class InputTextComponent implements OnInit {
  @Input() widgetOptions: IInputTextWidgetOptions;
  @Input() widgetData: any = "";

  public pattern;

  ngOnInit(): void {
    this.pattern = {'0': {pattern: new RegExp(this.widgetOptions?.mask?.value)}};
    console.log('config', this.widgetOptions?.mask?.value)
    console.log('pattern', this.pattern)
    console.log(this.widgetOptions)
  }
}
