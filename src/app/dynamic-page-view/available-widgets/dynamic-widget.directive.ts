import {ComponentFactoryResolver, Directive, ElementRef, Input, OnInit, ViewContainerRef} from "@angular/core";
import {IWidgetConfig} from "../interfaces/IWidgetConfig";
import {IDynamicComponent} from "../interfaces/IDynamicComponent";
import {getDynamicWidget} from "./widget-list";
import {DynamicPageStoreService} from "../dynamic-page-services/dynamic-page-store.service";
import {filter, takeUntil} from "rxjs/operators";
import {DocumentBaseComponent} from "../../containers/document-base.component";

@Directive({
  selector: '[dynamic-widget]',
})
export class DynamicWidgetDirective extends DocumentBaseComponent implements OnInit {
  private _widgetConfig: IWidgetConfig = null;
  private _widgetData: any = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private dpStore: DynamicPageStoreService,
              private el: ElementRef) {
    super();
  }

  @Input('widgetConfig') set widgetConfig(value: IWidgetConfig) {
    this._widgetConfig = value;
    this.loadComponent();
  }

  get widgetConfig() {
    return this._widgetConfig;
  }

  ngOnInit(): void {
    this.el.nativeElement.nextSibling.style.width = this.widgetConfig?.options?.width?.value;
    this.el.nativeElement.nextSibling.style.height = this.widgetConfig?.options?.height?.value;
  }

  loadComponent() {
    const component = getDynamicWidget(this.widgetConfig.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component['component']);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as IDynamicComponent).widgetOptions = this.widgetConfig.options;

    this.dpStore.select('widgetData')
      .pipe(
        filter(data => !!data),
        takeUntil(this.destroy$))
      .subscribe(widgetData => {
        this._widgetData = this.getDeepValue(widgetData, this.widgetConfig.options?.fieldName?.value);
        if (this._widgetData)
          (componentRef.instance as IDynamicComponent).widgetData = this._widgetData;
      });
  }

  private getDeepValue = (obj, findKey) => {
    for (let key in obj) {
      if (key === findKey) {
        return obj[key];
      }

      if (typeof obj[key] === 'object') {
        const deepFind = this.getDeepValue(obj[key], findKey);
        if (deepFind) {
          return deepFind;
        }
      }
    }
    return undefined;
  }

}

