import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Optional} from "@angular/core";
import {IInputNumberWidgetOptions} from "../../interfaces/IInputNumberWidgetOptions";
import {FormControl} from "@angular/forms";
import {combineLatest} from "rxjs";
import {filter, takeUntil} from 'rxjs/operators';
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from '../../dynamic-page-services/IWIdgetFacrotyInterfaces';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';

@Component({
  template: `
    <label for="{{widgetOptions.fieldName.value}}">{{widgetOptions?.label?.value}}</label>
    <input type="number" name="{{widgetOptions.fieldName.value}}"
                    [max]="widgetOptions?.maxValue?.value"
                    [min]="widgetOptions?.minValue?.value"
                    [formControl]="formControl">`,
  styles: [`
    label {
      float: left;
      width: 130px;
    }
    input {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputNumberComponent extends DocumentBaseComponent implements OnInit {

  public formControl: FormControl;
  public widgetData: Number = NaN;
  public widgetOptions: IInputNumberWidgetOptions = null;

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<IInputNumberWidgetOptions>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService,
              private cd: ChangeDetectorRef) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [IInputNumberWidgetOptions, number]) => {
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

  ngOnInit(): void {
    this.formControl = new FormControl();
    this.formControl.setValue(this.widgetData, {emitEvent: false});
    this.formControl.valueChanges.subscribe(value => {
      if (value < this.widgetOptions.minValue.value)
        this.formControl.setValue(this.widgetOptions.minValue.value, {emitEvent: false});
      if (value > this.widgetOptions.maxValue.value)
        this.formControl.setValue(this.widgetOptions.maxValue.value, {emitEvent: false});
      this.cd.detectChanges();
    });
  }
}
