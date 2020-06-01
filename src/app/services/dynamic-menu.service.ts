import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {SettingsService} from "./settings.service";
import {ModuleInfo} from "../models/ModuleInfo";
import {ModuleActionsResponse} from "../models/ModuleActionsResponse";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DynamicMenuService {

  constructor(public http: HttpClient, private settingsService: SettingsService) {
  }

  public test(): Observable<any> {
    return this.http.post(`/pbs/modules/staff-module/base/v1/data`, {action_name: "staff.all_person"});
  }

  public getModules(): Observable<Array<ModuleInfo>> {
    return this.http.get<Array<ModuleInfo>>(`/pbs/api/base/modules/modules`);
  }

  public getModuleActions(nodeName: string): Observable<Array<ModuleActionsResponse>> {
    return this.http.get<Array<ModuleActionsResponse>>(`/pbs/modules/${nodeName}/base/v1/menuItems`);
  }

  public getModulePageConfiguration(nodeName: string, actionName: string): Observable<any> {
    return this.http.get<any>(`/pbs/modules/${nodeName}/base/v1/menuItem/config/${actionName}`).pipe(
      map(({actions, viewConfig, dataTypes}) => {
        return {
          actions, viewConfig, dataTypes
        }
      })
    );
  }

  public getModuleData(nodeName: string, body: object): Observable<any> {
    const headers = {"Content-type": "application/json; charset=UTF-8"};
    return this.http.post(`/pbs/modules/${nodeName}/base/v1/data`, JSON.stringify(body), { headers });
  }

  public findSelectableData(nodeName: string, endpoint: string, filter: string): Observable<any> {
    return this.http.get(`/pbs/modules/${nodeName}/base/v1/selectable/${endpoint}/${filter}`);
  };

  public putFormDataInstance(nodeName: string, formKey: string, body: object): Observable<any> {
    const headers = {"Content-type": "application/json; charset=UTF-8"};
    return this.http.put(`/pbs/modules/${nodeName}/base/v1/data/${formKey}`, body, { headers });
  }  

}
