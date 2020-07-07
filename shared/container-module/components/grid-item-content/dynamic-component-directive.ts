import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';
import { getComponent } from '../avaiableComponents/list-components';


@Component({
  selector: 'dc-component',
  template: `
              <div>
                <ng-template></ng-template>
              </div>
            `
})
export class DynamicComponentDirective implements OnInit {
  @Input('dynamicLayout') dynamicLayout;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const component = getComponent(this.dynamicLayout);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component['component']);
    this.viewContainerRef.clear();
    const injector =  this.createInjector(component['services']);
    this.viewContainerRef.createComponent(componentFactory, 0, injector);
  }

  createInjector(services){
    return Injector.create({
      parent: this.injector,
      providers: services
    });
  }

}
