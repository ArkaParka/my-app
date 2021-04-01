import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ModuleInfo} from "../models/ModuleInfo";
import {ModuleActionsResponse} from "../models/ModuleActionsResponse";
import {IModulePageConfiguration} from '../models/IModulePageConfiguration';
import {ModuleData} from '../models/ModuleData.interface';
import {ISelectableParent} from "../models/ISelectableParent";
import {headerMock} from "../../headerMock";
import {mock} from '../../../dynamic-page-mock';
import {
  get_product_data_mock,
  get_requirement_data_mock,
  get_task_data_mock
} from '../dynamic-page-view/dynamic-page-mock/tab-tree-data-mock';
import {delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DynamicMenuService {

  constructor(public http: HttpClient) {
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

  public getFormDataInstance(moduleKey: string, formKey: string, type: string, id: string): Observable<any> {
    // if (formKey === '1EDF59AD507730DC1C22EA5BA9097C5C') return of(widgetDataMock);
    if (formKey === '2FBCF3B6CEEB359B639C7EBA13B5E6ED') return of(headerMock);
    if (formKey === '39EA090C70C667F7505DF72DB7DA5223') return of(headerMock);
    if (formKey === '876DC327A9A4AD4BB7DB84237E91947D') return of(headerMock);
    return this.http.get(`/pbs/modules/${moduleKey}/base/v1/data/${formKey}/${type}/${id}`);
  }

  public deleteFormDataInstance(moduleKey: string, formKey: string, type: string, id: string): Observable<any> {
    return this.http.delete(`/pbs/modules/${moduleKey}/base/v1/data/${formKey}/${type}/${id}`);
  }

  public executePageAction(moduleKey: string, action: string, pageUID: string, body: any = null): Observable<IPageActionResponse> {
    // if (action === 'get_product_data') return of(get_product_data_mock).pipe(delay(1000));
    // if (action === 'get_task_data') return of(get_task_data_mock);
    // if (action === 'get_requirement_data') return of(get_requirement_data_mock);
    // if (action === 'get_dictionary_data') return of(get_requirement_data_mock);
    return this.http.post<IPageActionResponse>(`/pbs/modules/${moduleKey}/base/v1/page/${pageUID}/${action}`, body);
  }
}
