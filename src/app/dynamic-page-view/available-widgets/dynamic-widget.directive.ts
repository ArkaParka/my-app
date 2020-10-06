import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from "@angular/core";
import {IWidgetConfig} from "../interfaces/IWidgetConfig";
import {IDynamicComponent} from "../interfaces/IDynamicComponent";
import {getDynamicWidget} from "./widget-list";
import {DynamicPageStoreService} from "../dynamic-page-services/dynamic-page-store.service";
import findValueDeep from "deepdash/findValueDeep";
import {filter} from "rxjs/operators";

@Directive({
  selector: '[dynamic-widget]'
})
export class DynamicWidgetDirective implements OnInit {
  private _widgetConfig: IWidgetConfig = null;
  private wasLoaded: boolean = true;
  private _widgetData: any = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private dpStore: DynamicPageStoreService) {
  }

  @Input('widgetConfig') set widgetConfig(value: IWidgetConfig) {
    this._widgetConfig = value;
    if (this.wasLoaded) this.loadComponent();
  };

  get widgetConfig() {
    return this._widgetConfig;
  }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const component = getDynamicWidget(this.widgetConfig.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component['component']);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as IDynamicComponent).widgetOptions = this.widgetConfig.options;
    this.wasLoaded = true;

    this.dpStore.select('widgetData').pipe(filter(data => !!data)).subscribe(widgetData => {
      this._widgetData = findValueDeep(widgetData, ((value, key) => key === this.widgetConfig.options?.fieldName?.value));
      (componentRef.instance as IDynamicComponent).widgetData = this._widgetData;

      // console.log(this.widgetConfig.options?.fieldName?.value, this._widgetData);
    });
  }

}

