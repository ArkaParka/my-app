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
  //eventFromTree;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private viewContainerRef: ViewContainerRef,
              private eventBus: EventBusService) {
    
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    console.log('Список компонентов', this.dynamicLayout);
    const component = getComponent(this.dynamicLayout);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component['component']);
    this.viewContainerRef.clear();
    const injector =  this.createInjector(component['services']);
    const componentRef = this.viewContainerRef.createComponent(componentFactory, 0, injector);
    // console.log('Лог при создании компонента', this.eventFromTree);
    // (componentRef.instance as any).input = this.eventFromTree;
  }

  createInjector(services){
    return Injector.create({
      parent: this.injector,
      providers: services
    });
  }

}
