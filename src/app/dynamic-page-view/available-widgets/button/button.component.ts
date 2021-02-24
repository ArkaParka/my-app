import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {IButtonWidgetOptions} from '../../interfaces/IButtonWidgetOptions';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  template: '<button type="button" class="btn btn-primary">{{widgetOptions.label?.value}}</button>',
  styles: [`button {  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() widgetOptions: IButtonWidgetOptions;

  @HostBinding('style.width') private width;
  @HostBinding('style.height') private height;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.width = this.sanitizer.bypassSecurityTrustStyle(this.widgetOptions.width.value);
    this.height = this.sanitizer.bypassSecurityTrustStyle(this.widgetOptions.height.value);
  }

}
