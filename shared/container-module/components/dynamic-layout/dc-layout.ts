import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, Injector } from '@angular/core';
import { DynamicComponentDirective } from '../grid-item-content/dynamic-component-directive';
import { getComponent } from '../avaiableComponents/list-components';


@Component({
  selector: 'dc-component',
  template: `
              <div>
                <h1>TEST</h1>
                <ng-template dynamic-component></ng-template>
              </div>
            `
})
export class DClayoutComponent implements OnInit {
  @Input('dynamicLayout') dynamicLayout;
  @ViewChild(DynamicComponentDirective, {static: true}) dynamicComponent: DynamicComponentDirective;
  

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const component = getComponent(this.dynamicLayout);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component['component']);
    const viewContainerRef = this.dynamicComponent.viewContainerRef;
    viewContainerRef.clear();
    const injector =  this.createInjector(component['services']);
    viewContainerRef.createComponent(componentFactory, 0, injector);
  }

  createInjector(services){
    return Injector.create({
      parent: this.injector,
      providers: services
    });
  }

}
