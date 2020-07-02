import { TestComponent } from './test.component';
import { TestService } from './test.servise';

const components = [
    // header: {
    //     component: TestComponent,
    //     services: [
    //         {
    //             provide: TestService,
    //             useClass: TestService,
    //             deps: []
    //         }
    //     ]
    // },
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
        
    }

];

export const getComponent = (nameComopnent: string) => {
    const result = components.map(elem => elem[nameComopnent]);
    console.log();
    return result[0];
}