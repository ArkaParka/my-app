import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {NavData} from '../_nav';
import {
  ModuleMenuFormConfigForFront,
  MData,
  ModuleMenuFormConfig,
  DataSelect,
  FormlyConfig
} from '../menu/responce-interface';
import {SettingsService} from "./settings.service";
import {ModuleInfo} from "../models/ModuleInfo";
import {ModuleActionsResponse} from "../models/ModuleActionsResponse";


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

}
