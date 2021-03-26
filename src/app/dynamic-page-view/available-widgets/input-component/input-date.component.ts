import {Component, Inject, OnInit, Optional} from '@angular/core';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from '../../dynamic-page-services/IWIdgetFacrotyInterfaces';
import {IInputNumberWidgetOptions} from '../../interfaces/IInputNumberWidgetOptions';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {DocumentBaseComponent} from '../../../containers/document-base.component';
import {filter, takeUntil} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {trigger} from '@angular/animations';

@Component({
  selector: 'app-input-date',
  template: `
    <label for="{{widgetOptions.fieldName.value}}">{{widgetOptions?.label?.value}}</label>
    <nz-date-picker name="{{widgetOptions.fieldName.value}}" [(ngModel)]="date" nzFormat="dd.MM.yyyy"></nz-date-picker>`,
  styles: [`
    label {
      float: left;
      width: 130px;
    }
    input {
      display: block;
    }
  `],
})

export class InputDateComponent extends DocumentBaseComponent implements OnInit {
  date: any;
  public widgetOptions: IInputNumberWidgetOptions = null;

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IInputNumberWidgetOptions>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService) {
    super();
    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IInputNumberWidgetOptions, number]) => {
        this.widgetOptions = data[0];
      });

    this.checkWidgetDataTrigger();
  }

  ngOnInit(): void {
  }

  public checkWidgetDataTrigger() {
    this.dpStore.select('getWidgetDataTrigger').pipe(
      filter(trigger => !!trigger)
    ).subscribe(trigger => {
      const fieldName = this.widgetOptions.fieldName.value;
      this.dpStore.pushData({key: fieldName, value: this.date});
    });
  }

}
