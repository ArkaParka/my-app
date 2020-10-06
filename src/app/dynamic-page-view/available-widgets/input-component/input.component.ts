import {Component, Input, OnInit} from "@angular/core";

@Component({
template: `<input [(ngModel)]="widgetData">`
})
export class InputComponent implements OnInit{
  @Input() widgetOptions: any;
  @Input() widgetData: any;

  ngOnInit(): void {
  }
}
