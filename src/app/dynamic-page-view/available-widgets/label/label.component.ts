import {Component, Input, OnInit} from "@angular/core";
import {ILabelWidgetOptions} from "../../interfaces/ILabelWidgetOptions";

@Component({
  template: `<ng-container>Label</ng-container>`,
  styles: [`/*:host {border: 1px solid black;}*/`]
})
export class LabelComponent{
  @Input() widgetOptions: ILabelWidgetOptions;

}

