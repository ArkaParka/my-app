import { TestComponent } from './test.component';
import { TestService } from './test.servise';

const components = {
    header: {
        component: TestComponent,
        services: [
            {
                provide: TestService,
                useClass: TestService,
                deps: []
            }
        ]
    }
};

export const getComponent = (type: string) => {
    return components[type];
}