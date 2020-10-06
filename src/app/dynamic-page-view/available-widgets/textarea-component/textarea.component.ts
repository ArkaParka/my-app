import {Component, Input, OnInit} from "@angular/core";

@Component({
  template: `<textarea [(ngModel)]="widgetData"></textarea>`
})
export class TextareaComponent implements OnInit{
  @Input() widgetOptions: any;
  @Input() widgetData: any;

  ngOnInit(): void {
  }
}
