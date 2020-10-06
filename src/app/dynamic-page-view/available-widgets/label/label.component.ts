import {Component, Input, OnInit} from "@angular/core";
import {ILabelWidgetOptions} from "../../interfaces/ILabelWidgetOptions";

@Component({
  template: `<ng-container>{{widgetData}}</ng-container>`,
  styles: [`/*:host {border: 1px solid black;}*/`]
})
export class LabelComponent implements OnInit{
  @Input() widgetOptions: ILabelWidgetOptions;
  @Input() widgetData: any;

  ngOnInit(): void {
    // console.log(this.widgetData)
  }
}
