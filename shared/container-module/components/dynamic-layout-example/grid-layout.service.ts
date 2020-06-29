import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {DynamicLayoutConfig} from "../../../../src/app/models/DynamicLayoutConfig";
import {gridResponse1, gridResponse1AreaConfig, gridResponse2} from "./girdConfigMock";
import {newGridResponse} from "./newGridConfigMock";

@Injectable({
  providedIn: 'root'
})
export class GridLayoutService {
  constructor(private http: HttpClient) {
  }

  getGridCOnfiguration1(): Observable<DynamicLayoutConfig[]> {
    return of(newGridResponse);
  }

  getGridCOnfiguration2(): Observable<DynamicLayoutConfig[]> {
    return of(newGridResponse);
  }
}
