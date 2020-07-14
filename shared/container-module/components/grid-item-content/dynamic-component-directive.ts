import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
  Directive
} from '@angular/core';
import { getComponent } from '../avaiableComponents/list-components';
import {EventBusService} from "../event-bus/event-bus.service";


@Directive({
  selector: '[dc-component]',
})
export class DynamicComponentDirective implements OnInit {
  @Input('dynamicLayout') dynamicLayout;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private viewContainerRef: ViewContainerRef,
              private eventBus: EventBusService) {
    this.eventBus.on("NavTreeItemClicked", (event)=>{
      console.log("DynamicComponentDirective Event:", event)
    })
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const component = getComponent(this.dynamicLayout);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component['component']);
    this.viewContainerRef.clear();
    const injector =  this.createInjector(component['services']);
    const componentRef = this.viewContainerRef.createComponent(componentFactory, 0, injector);
    // (componentRef.instance as any).test.subscribe(data => {
    //   console.log('Клик с кнопки', data);
    // });
  }

  createInjector(services){
    return Injector.create({
      parent: this.injector,
      providers: services
    });
  }

}
