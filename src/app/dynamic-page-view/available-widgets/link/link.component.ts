import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ILinkWidgetOptions} from '../../interfaces/ILinkWidgetOptions';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {IWidgetEventAction} from '../../interfaces/IWidgetEventAction';
import {EActionTypes} from '../../interfaces/EActionTypes';

@Component({
  selector: 'app-link',
  template: '<a (click)="addEventListener()">{{this.widgetData?.title?.value}}</a>',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent implements OnInit {
  private _widgetData: any = {title: {value: ''}};


  @Input() widgetOptions: ILinkWidgetOptions;

  @Input()
  public set widgetData(value) {
    this._widgetData = value;
    this.cd.detectChanges();
  }

  public get widgetData() {
    return this._widgetData;
  }

  constructor(public dpStore: DynamicPageStoreService,
              public cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  public addEventListener() {
    const _widgetEventActions: IWidgetEventAction = {
      actionType: EActionTypes.DISPLAY_WIDGET,
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
    _widgetEventActions.options.widgetConfig.options.page_id.value = this.widgetData.id.value;
    this.dpStore.setState({widgetDataRequest: {id: this.widgetData.id.value, type: this.widgetOptions.page_key.value, key: this.widgetOptions.pageUID.value}, widgetAction: [_widgetEventActions]});
  }


}
