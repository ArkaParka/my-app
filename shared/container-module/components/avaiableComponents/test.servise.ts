import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

export class TestService {
  constructor() {
  }

  hello(): Observable<any> {
    return of('Jhon');
  }

  getProjectInfo(): Observable<any> {
    return of(
      [
        {
          title: 'Требования',
          key: 'requirements',
          expanded: true,
          children: [
            {
              title: 'Требование к модулю Продукт',
              key: 'requirementToProduct',
            },
            {
              title: 'Требование к модулю Требования',
              key: 'requirementToRequirement',
            },
            {
              title: 'Требование к модулю Задачи',
              key: 'requirementToTasks',
            }
          ]
        }
      ]
    );
  }

}