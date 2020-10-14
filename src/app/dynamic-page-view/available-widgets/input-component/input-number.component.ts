import {Component, Input, OnInit} from "@angular/core";
import {IInputNumberWidgetOptions} from "../../interfaces/IInputNumberWidgetOptions";

@Component({
  template: `<input [(ngModel)]="widgetData" [mask]="widgetOptions?.mask" [min]="widgetOptions?.minValue" [max]="widgetOptions?.maxValue">`,
  styles: [`input {
    width: 100%;
    height: 100%
  }`]
})
export class InputNumberComponent implements OnInit {
  @Input() widgetOptions: IInputNumberWidgetOptions;
  @Input() widgetData: any;

  ngOnInit(): void {
  }
}
