import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  template: `<ng-container>Пустой виджет</ng-container>`,
  styles: [`/*:host {border: 1px solid black}*/`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlankComponent {

}
