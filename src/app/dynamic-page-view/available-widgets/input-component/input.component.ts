import {Component, Input, OnInit} from "@angular/core";

@Component({
  template: `<input [(ngModel)]="widgetData">`,
  styles: [`input {
    width: 100%;
    height: 100%
  }`]
})
export class InputComponent implements OnInit {
  @Input() widgetOptions: any;
  @Input() widgetData: any;

  ngOnInit(): void {
  }
}
