import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

export class TestService {
  constructor() {
  }

  hello(): Observable<any> {
    return of('Jhon');
  }

}