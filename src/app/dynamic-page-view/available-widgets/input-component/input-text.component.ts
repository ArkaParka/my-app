import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {IInputTextWidgetOptions} from "../../interfaces/IInputTextWidgetOptions";

@Component({
  template: `<input [(ngModel)]="widgetData"
                    [mask]="widgetOptions?.mask?.value"
                    [maxLength]="widgetOptions?.length?.value">`,
  styles: [`input {
    width: 100%;
    height: 100%
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent implements OnInit {
  @Input() widgetOptions: IInputTextWidgetOptions;
  @Input() widgetData: any = "";

  public pattern;

  ngOnInit(): void {
    // this.pattern = {'0': {pattern: new RegExp(this.widgetOptions?.mask?.value)}};
  }
}
