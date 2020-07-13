import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

export class HeaderForProductsService {
  constructor() {
  }

  getInfoItem(): Observable<any> {
    return of();
  }

  getTasks(): Observable<any> {
    return of([
      {
        name: 'Задача на разработку 1',
        link: '#'
      },
      {
        name: 'Задача на тестирование 1',
        link: '#'
      },
      {
        name: 'Задача на сборку',
        link: '#'
      }
    ]);
  }

}