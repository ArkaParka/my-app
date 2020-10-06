import {Component, Input, OnInit} from "@angular/core";

@Component({
  template: `<textarea [(ngModel)]="widgetData"></textarea>`,
  styles: [`textarea {
    width: 100%;
    height: 100%
  }`]
})
export class TextareaComponent implements OnInit{
  @Input() widgetOptions: any;
  @Input() widgetData: any;

  ngOnInit(): void {
  }
}