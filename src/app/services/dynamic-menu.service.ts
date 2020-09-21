import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {SettingsService} from "./settings.service";
import {ModuleInfo} from "../models/ModuleInfo";
import {ModuleActionsResponse} from "../models/ModuleActionsResponse";
import {tap, catchError} from 'rxjs/operators';
import {IModulePageConfiguration} from '../models/IModulePageConfiguration';
import {ModuleData} from '../models/ModuleData.interface';
import {ISelectableParent} from "../models/ISelectableParent";
import {IPageActionResponse} from "../dynamic-page-view/interfaces/IPageActionResponse";
import {tabMock1} from "../../../tab1";
import {tabMock2} from "../../../tab2";


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

  public getModulePageConfiguration(nodeName: string, actionName: string): Observable<IModulePageConfiguration> {
    return this.http.get<any>(`/pbs/modules/${nodeName}/base/v1/menuItem/config/${actionName}`);
  }

  public getModuleData(nodeName: string, body: object): Observable<ModuleData> {
    const headers = {"Content-type": "application/json; charset=UTF-8"};
    return this.http.post<ModuleData>(`/pbs/modules/${nodeName}/base/v1/data`, JSON.stringify(body), {headers});
  }

  public findSelectableData(nodeName: string, endpoint: string, filter: string, parents: ISelectableParent[]): Observable<any> {
    return this.http.post(`/pbs/modules/${nodeName}/base/v1/selectable/${endpoint}/${filter}`, parents);
  };

  public putFormDataInstance(nodeName: string, body: object): Observable<any> {
    const headers = {"Content-type": "application/json; charset=UTF-8"};
    return this.http.put(`/pbs/modules/${nodeName}/base/v1/data/${body['formKey']}`, JSON.stringify(body), {headers});
  }

  public getFormDataInstance(moduleKey: string, fromKey: string, type: string, id: string): Observable<any> {
    return this.http.get(`/pbs/modules/${moduleKey}/base/v1/data/${fromKey}/${type}/${id}`);
  }

  public deleteFormDataInstance(moduleKey: string, formKey: string, type: string, id: string): Observable<any> {
    return this.http.delete(`/pbs/modules/${moduleKey}/base/v1/data/${formKey}/${type}/${id}`);
  }

  public executePageAction(moduleKey: string, action: string, pageUID: string): Observable<IPageActionResponse> {
    if (action === 'get_task_data') return of(tabMock1)
    else if (action === 'get_requirement_data') return of(tabMock2)
    else
      return this.http.get<IPageActionResponse>(`/pbs/modules/${moduleKey}/base/v1/page/${pageUID}/${action}`);
  }
}
