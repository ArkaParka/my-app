import { TestComponent } from './test.component';
import { TestService } from './test.servise';
import { NavInProjectComponent } from './nav-in-project/nav-in-project.component';
import { NavInProjectService } from './nav-in-project/nav-in-project.service';
import { HeaderForProductsService } from './header/header.service';
import { HeaderForProductsComponent } from './header/header.component';
import { ClaimComponent } from './claim-component/claim.component';
import {element} from "protractor";
import {ElementContainerComponent} from "./element-container/element-container.component";
import { EventBusService } from '../event-bus/event-bus.service';

const components = [
  {
    TestComponent: {
      component: TestComponent,
      services: [
        {
          provide: TestService,
          useClass: TestService,
          deps: []
        }
      ]
    }
  },
  {
    NavInProjectComponent: {
      component: NavInProjectComponent,
      services: [
        {
          provide: NavInProjectService,
          useClass: NavInProjectService,
          deps: []
        }
      ]
    }
  },
  {
    HeaderForProductsComponent: {
      component: HeaderForProductsComponent,
      services: [
        {
          provide: HeaderForProductsService,
          useClass: HeaderForProductsService,
          deps: []
        }
      ]
    }
  },
  {
    ClaimComponent: {
      component: ClaimComponent,
      services: []
    }
  },
  {
    ElementContainerComponent: {
      component: ElementContainerComponent,
      services: []
    }
  }
];

export const getComponent = (nameComopnent: string) => {
  const result = components.find(elem => elem[nameComopnent]);
  return result[nameComopnent];
};
