import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { DataListAboutModules } from './responce-interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicMenuService {

  constructor(public http: HttpClient) {}

  public getModules(): Observable<any> {

    return this.http.get('http://localhost:3000/modules').pipe(
      map((items: object[]) => {
        return Promise.all(items.map(async elem => {
            let tempForChildren = await this.getModuleActions(elem['moduleName']).toPromise();
            return {
              name: elem['displayName'],
              url: `/${elem['moduleName']}`,
              icon: 'icon-puzzle',
              children: tempForChildren,
            };
          }));
      }),
    );
  }

  public getModuleActions(moduleName: string): Observable<any> {
    return this.http.get('http://localhost:3000/moduleActions', {
      params: new HttpParams()
      .set(`moduleName`, moduleName)
    })
    .pipe(
      map(elem => {
        return elem[0]['moduleActions'].map(item => {
          return {
            name: item['displayName'],
            url: `/${moduleName}/${item['actionName']}`,
            icon: 'icon-puzzle',
          };
        });
      })
    );
  }

  public getModuleMenuFormConfig(moduleName: string, menuActionKey: string): Observable<any> {
    return this.http.get('http://localhost:3000/moduleMenuFormConfig', {
      params: new HttpParams()
      //.set(`moduleName`, moduleName)
    })
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
      })
    );
  }

  public getModuleData(moduleName: string, menuName: string, pageInfo: number): Observable<any> {
    return this.http.get('http://localhost:3000/moduleData', {
      params: new HttpParams()
      //.set(`moduleName`, moduleName)
    })
    .pipe(
      map(resp => {
        return resp['data']['data'];
      })
    );
  }

}
