import {ChangeDetectionStrategy, Component, Inject, OnDestroy, Optional} from '@angular/core';
import {IInputTextWidgetOptions} from '../../interfaces/IInputTextWidgetOptions';
import {DocumentBaseComponent} from '../../../containers/document-base.component';
import {combineLatest} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from '../../dynamic-page-services/IWIdgetFacrotyInterfaces';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';

@Component({
  template: `
    <label *ngIf="widgetOptions?.label?.value" for="{{widgetOptions?.fieldName?.value}}">{{widgetOptions?.label?.value}}</label>
    <input name="{{widgetOptions?.fieldName?.value}}"
           [(ngModel)]="widgetData"
           [mask]="widgetOptions?.mask?.value"
           [maxLength]="widgetOptions?.length?.value">`,
  styles: [`
    label {
      float: left;
      width: 130px;
    }

    input {
      width: 100%;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends DocumentBaseComponent {

  public widgetData: string = '';
  public widgetOptions: IInputTextWidgetOptions = null;
  public pattern;

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IInputTextWidgetOptions>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IInputTextWidgetOptions, '']) => {
        this.widgetOptions = data[0];
        if (data[1]) {
          this.widgetData = data[1];
        }
      });

    this.checkWidgetDataTrigger();
  }

  public checkWidgetDataTrigger() {
    this.dpStore.select('getWidgetDataTrigger').pipe(
      filter(trigger => !!trigger),
      takeUntil(this.destroy$)
    ).subscribe(trigger => {
      const fieldName = this.widgetOptions.fieldName.value;
      this.dpStore.pushData({key: fieldName, value: this.widgetData});
    });
  }

}
