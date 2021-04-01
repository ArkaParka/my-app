import {ChangeDetectionStrategy, Component, HostBinding, Inject, OnInit, Optional} from '@angular/core';
import {IButtonWidgetOptions} from '../../interfaces/IButtonWidgetOptions';
import {DomSanitizer} from '@angular/platform-browser';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {takeUntil} from 'rxjs/operators';
import {EEventTypes} from '../../interfaces/EEventTypes';
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/IWIdgetFacrotyInterfaces";

@Component({
  selector: 'app-button',
  template: '<button [disabled]="!(dpStore.selectButtonData(widgetOptions?.relatedDataWidget?.value?.fieldName, widgetOptions?.relatedDataWidget?.value?.useWhen)|async)" type="button" class="btn btn-primary" (click)="addEventListener()">{{widgetOptions?.label?.value}}</button>',
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
    console.log('widgetOptions', this.widgetOptions);
    const actions = this.widgetOptions.events.value
      .find(event => event.eventType === EEventTypes.ON_CLICK)?.actions;

    this.dpStore.setState({activeWidgetAction: actions});
  }

}
