import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DynamicMenuService {

  constructor(public http: HttpClient) {}

  public getModules() : Observable<any> { 
    //здесь будет запрос к бекэнду
    //заглушка
    const mockObject = [
      {
        moduleName: "staff-structure",
        displayName: "Штатная структура"
      },
      {
        moduleName: "documents",
        displayName: "Документы"
      }
    ];
    return of(mockObject).pipe(
      map(elem => {
        return elem.map(item => {
          // const tempForChildren = this.getModuleActions(item['moduleName']);
          // this.getModuleActions(item['moduleName']).pipe(
          //   map(elem => {
          //     console.log("Gjnjvrb", elem);
          //     return;
          //    })
          // );
          // console.log("Сервис", tempForChildren);
          return {
            name: item['displayName'],
            url: `/${item['moduleName']}`,
            icon: 'icon-puzzle',
            children: [],
          };
        });
      }));
  }

  public getModuleActions(moduleName: string) : Observable<any> {
    //здесь будет запрос к бекэнду
    //заглушка
    let mockObject;
    if (moduleName === "staff-structure") {
      mockObject = [
        {
          actionName: "division-structure",
          displayName: "Структура подразделений",
          childActions:[] 
        },
        {
          actionName: "employees-structure",
          displayName: "Структура сотрудников",
          childActions:[] 
        }
     ]
    } else {
      mockObject = [
        {
          actionName: "incoming",
          displayName: "Входящие",
          childActions:[] 
        },
        {
          actionName: "outgoing",
          displayName: "Исходящие",
          childActions:[] 
        }
      ]
    }

    return of(mockObject).pipe(
      map(elem => {
        return elem.map(item => {
          return {
            name: item['displayName'],
            url: `/${moduleName}/${item['actionName']}`,
            icon: 'icon-puzzle',
          };
        });
      })
    );
  }

  public getModuleMenuFormConfig(moduleName: string, menuActionKey: string) : Observable<any> {
    //здесь будет запрос к бекэнду
    //заглушка
    const mockObject = [{
      actions: [{
        actionName: 'test-1', 
        actionTitle: 'Test 1', 
        type : ['NO_REQ', 'REQ_ONE', 'REQ_MULTY' ], 
        dataType : 'POST_TYPE', 
        formKey : 'formKey' 
      }],
     viewConfig : [{ 
       type : "BaseTableVew",
       config : {/* конфигурация для каждого  типа */}, //есть готовое описание в проете, найти
     }],
     dataTypes : [{
       typeName : 'POST_TYPE',
       schema : { /* схема описывающая данный тип */},
       forms : [{
          formKey : "formKey",
          schema  : { /* схема для описания формы */ } //есть готовое описание в проете, найти
        }]
      }]
    }];
    return of(mockObject);
  }

  public getModuleData(moduleName: string, menuName: string, pageInfo: number) : Observable<any> {
    //здесь будет запрос к бекэнду
    //заглушка
    const mockObject = [{
      data : [{
        type: 'dataType',
        data: { /*объект данных*/ }
      }],
      pageInfo : {
        pageIndex: 0,
        pageSize : 10,
        totalSize: 100
      }
    }];
    return of(mockObject);
  }

}
