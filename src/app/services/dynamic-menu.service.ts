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

  public loadExample(): Observable<FormlyConfig> {
    return this.http.get<any>('assets/test2.json').pipe(
      tap(({schema, model}) => {
        return {
          schema,
          model
        }
      }),
    )
  }

  public getDataForSelect(configUrl: string): Observable<DataSelect[]> {
    return this.http.get<DataSelect[]>(configUrl);
  }

  // public getModules(): Observable<any> {
  //   return this.http.get('http://localhost:3000/modules').pipe(
  //     map((items: object[]) => {
  //       return Promise.all(items.map(async elem => {
  //           let tempForChildren = await this.getModuleActions(elem['moduleName']).toPromise();
  //           return {
  //             name: elem['displayName'],
  //             url: `/${elem['moduleName']}`,
  //             icon: 'icon-puzzle',
  //             children: tempForChildren,
  //           };
  //         }));
  //     }),
  //     catchError(err => {
  //       alert("Сервис не доступен!");
  //       return throwError(err);
  //     })
  //   );
  // }
  //
  // public getModuleActions(moduleName: string): Observable<NavData> {
  //   return this.http.get('http://localhost:3000/moduleActions', {
  //     params: new HttpParams()
  //     .set(`moduleName`, moduleName)
  //   })
  //   .pipe(
  //     map(elem => {
  //       return elem[0]['moduleActions'].map(item => {
  //         return {
  //           name: item['displayName'],
  //           url: `/${moduleName}/${item['actionName']}`,
  //           icon: 'icon-puzzle',
  //         };
  //       });
  //     })
  //   );
  // }

  public getModuleMenuFormConfig(moduleName: string, menuActionKey: string): Observable<ModuleMenuFormConfigForFront> {
    return this.http.get<ModuleMenuFormConfig>('http://localhost:3000/moduleMenuFormConfig')
      .pipe(
        map(resp => {
          return {
            dataFromActions: resp['actions'].map(elem => {
              return {
                value: elem['actionName'],
                title: elem['actionTitle']
              }
            }),
            dataFromViewConfig: resp['viewConfig']['config'],
            dataFromDataTypes: resp['dataTypes']['forms']['schema'],
          };
        }),
        catchError(err => {
          alert("Сервис не доступен!");
          return throwError(err);
        })
      );
  }

  public getModuleData(moduleName: string, menuName: string, pageInfo: number): Observable<MData[]> {
    return this.http.get<MData[]>('http://localhost:3000/data')
      .pipe(
        catchError(err => {
          alert("Сервис не доступен!");
          return throwError(err);
        })
      );
  }

  public setModuleData(data: MData): Observable<MData> {
    const headers = {"Content-type": "application/json; charset=UTF-8"}
    const body = data;
    return this.http.post<MData>('http://localhost:3000/data', body, {headers});
  }

  public editModuleData(id: number, data: MData): Observable<MData> {
    const body = data;
    return this.http.patch<MData>(`http://localhost:3000/data/${id}`, body);
  }

  public deleteModuleData(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/data/${id}`);
  }

}
