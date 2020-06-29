import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {DynamicLayoutConfig} from "../../../../src/app/models/DynamicLayoutConfig";
import {layoutConfig, newGridResponse} from "./newGridConfigMock";

@Injectable({
  providedIn: 'root'
})
export class GridLayoutService {
  constructor(private http: HttpClient) {
  }

  getGridConfiguration1(): Observable<DynamicLayoutConfig> {
    return of(layoutConfig);
  }

  getGridConfiguration2(): Observable<DynamicLayoutConfig> {
    return of(layoutConfig);
  }
}
