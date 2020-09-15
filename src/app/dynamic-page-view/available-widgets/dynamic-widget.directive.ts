import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from "@angular/core";
import {IWidgetConfig} from "../interfaces/IWidgetConfig";
import {IDynamicComponent} from "../interfaces/IDynamicComponent";
import {getDynamicWidget} from "./widget-list";

@Directive({
  selector: '[dynamic-widget]'
})
export class DynamicWidgetDirective implements OnInit {
  private _widgetConfig: IWidgetConfig = null;
  private wasLoaded: boolean = true;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
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
  }

}

