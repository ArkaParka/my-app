import {ChangeDetectionStrategy, Component, Injector, Input, OnInit, Type, ViewEncapsulation} from "@angular/core";
import {combineLatest, Observable, ReplaySubject} from "rxjs";
import {map} from "rxjs/operators";
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";

@Component({
  selector: "app-widget-wrapper",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="widget$|async as widget">
      <ng-container *ngComponentOutlet="widget.widgetComponent; injector: widget.injector;"></ng-container>
    </ng-container>
  `
})
export class WidgetWrapperComponent {
  @Input()
  public set widgetComponent(value: Type<any>) {
    this.widgetComponent$.next(value);
  }

  @Input()
  public set data(value: WidgetOptions<any>) {
    this.widgetData$.next(value);
  }

  private readonly widgetComponent$: ReplaySubject<Type<any>> = new ReplaySubject(1);
  private readonly widgetData$: ReplaySubject<WidgetOptions<any>> = new ReplaySubject(1);
  public readonly widget$: Observable<any>;

  constructor(private injector: Injector) {
    this.widget$ = combineLatest([this.widgetComponent$, this.widgetData$])
      .pipe(
        map(([widgetComponent, widgetData]) => {
          return {
            widgetComponent,
            injector: Injector.create({
              parent: this.injector,
              providers: [
                {
                  provide: WIDGET_OPTIONS,
                  useValue: widgetData
                },
                {
                  provide: DP_STORE,
                  useExisting: DynamicPageStoreService
                }
              ]
            })
          } as any;
        })
      );
  }
}
