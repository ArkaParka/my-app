import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {IButtonWidgetOptions} from '../../interfaces/IButtonWidgetOptions';
import {DomSanitizer} from '@angular/platform-browser';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {IWidgetEventAction} from '../../interfaces/IWidgetEventAction';
import {EActionTypes} from '../../interfaces/EActionTypes';
import {ITypePageViewConfig} from '../../interfaces/ITypePageViewConfig';
import {log} from 'ng-zorro-antd';
import {IDynamicPageStore} from '../../interfaces/IDynamicPageStore';
import {IActiveWidgetAction} from '../../interfaces/IActiveWidgetAction';
import {IWidgetData} from '../../interfaces/IWidgetData';

@Component({
  selector: 'app-button',
  template: '<button type="button" class="btn btn-primary" (click)="addEventListener()">{{widgetOptions.label?.value}}</button>',
  styles: [`button {  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() widgetOptions: IButtonWidgetOptions;

  @HostBinding('style.width') private width;
  @HostBinding('style.height') private height;

  constructor(private sanitizer: DomSanitizer,
              public dpStore: DynamicPageStoreService
              // store
              ) { }

  ngOnInit(): void {
    this.width = this.sanitizer.bypassSecurityTrustStyle(this.widgetOptions.width.value);
    this.height = this.sanitizer.bypassSecurityTrustStyle(this.widgetOptions.height.value);
    console.log(this.widgetOptions);
  }

  private addEventListener() {
    const actions = this.widgetOptions.events.value
      .filter(event => event.eventType === EActionTypes.ON_CLICK)
      .map(event => event.actions[0]);

    this.dpStore.setState({activeWidgetAction: actions});
  }

}
