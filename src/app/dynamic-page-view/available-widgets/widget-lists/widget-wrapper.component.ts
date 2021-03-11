import {
  AfterViewInit, ChangeDetectionStrategy,
  Component, ElementRef, HostBinding, Injector,
  Input, OnInit, Renderer2, Type
} from "@angular/core";
import {combineLatest, Observable, ReplaySubject} from "rxjs";
import {map} from "rxjs/operators";
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/widgets-factory.service";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";
import {DomSanitizer} from "@angular/platform-browser";
import {IAreasConfig} from "../../interfaces/IAreasConfig";

@Component({
  selector: "app-widget-wrapper",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container
      *ngComponentOutlet="(widget$|async).widgetComponent; injector: (widget$|async).injector;"></ng-container>`,
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit, AfterViewInit {
  @Input()
  public set widgetComponent(value: Type<any>) {
    this.widgetComponent$.next(value);
  }

  @Input()
  public set data(value: WidgetOptions<any>) {
    this.widgetData$.next(value);
  }

  @Input()
  public set areaViewConfig(value: IAreasConfig) {
    this.areaConfig$.next(value);
  }

  @HostBinding('style.grid-area') gridArea;
  @HostBinding('style.justify-items') justifyItems;

  private readonly widgetComponent$: ReplaySubject<Type<any>> = new ReplaySubject(1);
  private readonly widgetData$: ReplaySubject<WidgetOptions<any>> = new ReplaySubject(1);
  public readonly widget$: Observable<any>;
  private areaConfig$: ReplaySubject<IAreasConfig> = new ReplaySubject<IAreasConfig>();

  private widgetWidth: string;
  private widgetHeight: string;

  constructor(private injector: Injector,
              private sanitizer: DomSanitizer,
              private element: ElementRef,
              private renderer: Renderer2) {
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

  ngOnInit(): void {
    this.areaConfig$.subscribe(config => {
      this.gridArea = this.sanitizer.bypassSecurityTrustStyle(config.areaName);
      let columnFlow = config.widgetFlow === 'left' ? 'start' : config.widgetFlow === 'right' ? 'end' : config.widgetFlow === 'auto' ? 'center' : null;
      this.justifyItems = this.sanitizer.bypassSecurityTrustStyle(columnFlow);

      this.widgetWidth = config.widgetConfig?.options?.width?.value || "100%";
      this.widgetHeight = config.widgetConfig?.options?.height?.value || "100%";
    });
  }

  ngAfterViewInit(): void {
    const ngContentElement = this.element.nativeElement.children[0];
    this.renderer.setStyle(ngContentElement, "width", this.widgetWidth);
    this.renderer.setStyle(ngContentElement, "height", this.widgetHeight);
  }
}
