import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {DynamicLayoutConfig} from "../../../../src/app/models/DynamicLayoutConfig";
import {layoutConfig, headerConfig} from "./newGridConfigMock";

@Injectable({
  providedIn: 'root'
})
export class GridLayoutService {
  constructor(private http: HttpClient) {
  }

  getGridConfiguration(): Observable<DynamicLayoutConfig> {
    return of(layoutConfig);
  }

  getGridAreaConfiguration(areaName:string): Observable<any> {

    switch(areaName) {
      case'main': return of(['header']);
      default: return of([])
    }
    
  }

}
