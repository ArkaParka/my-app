import {ChangeDetectionStrategy, Component, HostBinding, Inject, OnInit, Optional} from '@angular/core';
import {IButtonWidgetOptions} from '../../interfaces/IButtonWidgetOptions';
import {DomSanitizer} from '@angular/platform-browser';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {takeUntil} from 'rxjs/operators';
import {EActionTypes} from '../../interfaces/EActionTypes';
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/IWIdgetFacrotyInterfaces";

@Component({
  selector: 'app-button',
  template: '<button type="button" class="btn btn-primary" (click)="addEventListener()">{{widgetOptions?.label?.value}}</button>',
  styles: [`button {
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends DocumentBaseComponent implements OnInit {
  public widgetOptions: IButtonWidgetOptions;

  @HostBinding('style.width') private width;
  @HostBinding('style.height') private height;

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<any>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService,
              private sanitizer: DomSanitizer) {
    super();

    this.widgetOptionsGetter.getOptions().pipe(takeUntil(this.destroy$)).subscribe(widgetOptions => {
      this.widgetOptions = widgetOptions;
    });
  }

  ngOnInit(): void {
    this.width = this.sanitizer.bypassSecurityTrustStyle(this.widgetOptions?.width?.value);
    this.height = this.sanitizer.bypassSecurityTrustStyle(this.widgetOptions?.height?.value);
  }

  public addEventListener() {
    const actions = this.widgetOptions.events.value
      .filter(event => event.eventType === EActionTypes.ON_CLICK)
      .map(event => event.actions[0]);

    this.dpStore.setState({activeWidgetAction: actions});
  }

}
