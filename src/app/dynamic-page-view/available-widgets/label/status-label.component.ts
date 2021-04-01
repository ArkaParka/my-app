import {ChangeDetectionStrategy, Component, HostBinding, Inject, Optional} from '@angular/core';
import {ILabelWidgetOptions} from "../../interfaces/ILabelWidgetOptions";
import {DocumentBaseComponent} from "../../../containers/document-base.component";
import {BehaviorSubject, combineLatest} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/IWIdgetFacrotyInterfaces";

@Component({
  template: `
    <ng-container>{{(widgetData|async)?.title}}</ng-container>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusLabelComponent extends DocumentBaseComponent {

  public widgetData: BehaviorSubject<any> = new BehaviorSubject<any>({
    title: 'status-label',
    status: 'default',
  });
  public widgetOptions: BehaviorSubject<ILabelWidgetOptions> = new BehaviorSubject<any>(null);

  // создать три BehaviorSubject-та и через хост байндинг добавлять стили: жирность, цвет и размер шрифта
  public fontWeight: BehaviorSubject<string> = new BehaviorSubject<string>('normal');
  public backgroundColor: BehaviorSubject<string> = new BehaviorSubject<string>('transparent');
  public fontSize: BehaviorSubject<string> = new BehaviorSubject<string>('medium');

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight.getValue();
  }
  @HostBinding('style.backgroundColor') get getBackgroundColor() {
    return this.backgroundColor.getValue();
  }
  @HostBinding('style.fontSize') get getFontSize() {
    return this.fontSize.getValue();
  }

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<ILabelWidgetOptions>) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: [ILabelWidgetOptions, string]) => {
        this.widgetOptions.next(data[0]);
        if (data[1])
          this.widgetData.next(data[1]);
      });
  }
}
