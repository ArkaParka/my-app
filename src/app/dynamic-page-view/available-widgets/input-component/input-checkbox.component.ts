import {ChangeDetectionStrategy, Component, Inject, Optional} from "@angular/core";
import {IInputCheckboxWidgetOptions} from "../../interfaces/IInputCheckboxWidgetOptions";
import {combineLatest} from "rxjs";
import {filter, takeUntil} from 'rxjs/operators';
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from '../../dynamic-page-services/IWIdgetFacrotyInterfaces';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';

@Component({
  template: `<input type="checkbox" [(ngModel)]="widgetData"><label>{{widgetOptions?.description?.value}}</label>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCheckboxComponent extends DocumentBaseComponent {

  public widgetData: boolean = false;
  public widgetOptions: IInputCheckboxWidgetOptions = null;

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IInputCheckboxWidgetOptions>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IInputCheckboxWidgetOptions, boolean]) => {
        this.widgetOptions = data[0];
        if (data[1])
          this.widgetData = data[1];
      });

    this.checkWidgetDataTrigger();
  }

  public checkWidgetDataTrigger() {
    this.dpStore.select('getWidgetDataTrigger').pipe(
      filter(trigger => !!trigger)
    ).subscribe(trigger => {
      const fieldName = this.widgetOptions.fieldName.value;
      this.dpStore.pushData({key: fieldName, value: this.widgetData});
    });
  }
}
