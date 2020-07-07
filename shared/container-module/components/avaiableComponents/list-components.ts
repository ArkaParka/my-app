import {TestComponent} from './test.component';
import {TestService} from './test.servise';
import {NavInProjectComponent} from './nav-in-project/nav-in-project.component';
import {NavInProjectService} from './nav-in-project/nav-in-project.service';
import {ClaimComponent} from "./claim-component/claim.component";

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
    ClaimComponent: {
      component: ClaimComponent,
      services: []
    }
  }
];

export const getComponent = (nameComopnent: string) => {
  const result = components.find(elem => elem[nameComopnent]);
  return result[nameComopnent];
}
