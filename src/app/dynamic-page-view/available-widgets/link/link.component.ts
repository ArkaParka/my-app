import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional} from '@angular/core';
import {ILinkWidgetOptions} from '../../interfaces/ILinkWidgetOptions';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {IWidgetEventAction} from '../../interfaces/IWidgetEventAction';
import {EEventTypes} from '../../interfaces/EEventTypes';
import {takeUntil} from 'rxjs/operators';
import {DocumentBaseComponent} from '../../../containers/document-base.component';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {ILinkWidgetData} from '../../interfaces/ILinkWidgetData';
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/IWIdgetFacrotyInterfaces";

@Component({
  selector: 'app-link',
  template: '<a (click)="addEventListener()">{{(this.widgetData | async)?.title?.value}}</a>',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent extends DocumentBaseComponent {
  public widgetData: BehaviorSubject<ILinkWidgetData> = new BehaviorSubject<ILinkWidgetData>(null);

  public widgetOptions: ILinkWidgetOptions;

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<any>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService,
              public cd: ChangeDetectorRef) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe(([widgetOptions, data]) => {
        this.widgetOptions = widgetOptions;
        this.widgetData.next(data);
      });
  }

  public addEventListener() {
    const id = this.widgetData.getValue().id.value;
    const _widgetEventActions: IWidgetEventAction = {
      actionType: EEventTypes.DISPLAY_WIDGET,
      options: {
        targetArea: '',
        widgetConfig: {
          type: '',
          options: {
            page_key: {
              value: '',
            },
            page_id: {
              value: '',
            }
          },
          dataType: '',
        }
      }
    };
    _widgetEventActions.options.targetArea = this.widgetOptions.targetArea.value;
    _widgetEventActions.options.widgetConfig.options.page_key.value = this.widgetOptions.page_key.value;
    _widgetEventActions.options.widgetConfig.options.page_id.value = id;
    this.dpStore.setState({
      widgetDataRequest: {
        id: id,
        type: this.widgetOptions.page_key.value,
        key: this.widgetOptions.pageUID.value
      }, widgetAction: [_widgetEventActions]
    });
  }


}
