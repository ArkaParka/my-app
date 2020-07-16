import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

export class HeaderForProductsService {
  constructor() {
  }

  getInfoItem(): Observable<any> {
    return of();
  }

  getListItems(item: string): Observable<any> {
    const listItems = {
      tasks: [
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
      ],
      versions: [
        {
          name: 'Версия 1.0',
          link: '#'
        },
        {
          name: 'Версия 1.1',
          link: '#'
        },
        {
          name: 'Версия 1.2',
          link: '#'
        }
      ]
    }
    return of(listItems[item]);
  }

}