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

   public async getModules(): Promise<Observable<any>> { 
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
      map(async obj => {
        return Promise.all(obj.map(async elem => {
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
      //delay(1000),
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
    const mockObject = {
      actions: [
        {
          actionName: 'insert', 
          actionTitle: 'Добавить', 
          type: ['NO_REQ', 'REQ_ONE', 'REQ_MULTY' ], 
          dataType: 'POST_TYPE', 
          formKey: 'formKey' 
        },
        {
          actionName: 'edit', 
          actionTitle: 'Изменить', 
          type: ['NO_REQ', 'REQ_ONE', 'REQ_MULTY' ], 
          dataType: 'POST_TYPE', 
          formKey: 'formKey' 
        },
        {
          actionName: 'delete', 
          actionTitle: 'Удалить', 
          type: ['NO_REQ', 'REQ_ONE', 'REQ_MULTY' ], 
          dataType: 'POST_TYPE', 
          formKey: 'formKey' 
        },
      ],
      viewConfig: { 
       type: "BaseTableVew",
       config: {
        columnDefs: [
          { headerName: 'Название', field: 'divisionName', resizable: true, sortable: true },
          { headerName: 'Руководитель', field: 'supervisor', resizable: true, sortable: true },
          { headerName: 'Кол-во сотрудников', field: 'numberOfEmployees', resizable: true, sortable: true }
        ],
        pagination: true,
        paginationAutoPageSize: true,
        rowSelection: 'multiple',
        suppressDragLeaveHidesColumns: true,
        rowHeight: 30,
        animateRows: true
       } 
      },
      dataTypes: {
       typeName: 'POST_TYPE',
       schema: { /* схема описывающая данный тип, можно пока забить болт */},
       forms: {
          formKey: "formKey",
          schema: [
            {
              className: 'section-label',
              template: '<h5>Данные</h5>',
            },
            {
              fieldGroupClassName: 'row',
              fieldGroup: [
                {
                  className: 'col-6',
                  key: 'divisionName',
                  type: 'input',
                  templateOptions: {
                    label: 'Подразделение',
                    placeholder: 'Название подразделения',
                    required: true
                  },
                },
                {
                  className: 'col-6',
                  key: 'supervisor',
                  type: 'input',
                  templateOptions: {
                    label: 'Руководитель',
                    placeholder: 'фамилия, инициалы',
                    required: true
                  },
                },
                {
                  className: 'col-6',
                  key: 'numberOfEmployees',
                  type: 'input',
                  templateOptions: {
                    label: 'Кол-во сотрудников',
                    type: 'number',
                    placeholder: 'Только цифры',
                    required: true
                  },
                },
              ],
            }
          ] 
        }
      }
    };
    return of(mockObject).pipe(
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

  public getModuleData(moduleName: string, menuName: string, pageInfo: number) : Observable<any> {
    //здесь будет запрос к бекэнду
    //заглушка
    const mockObject = {
      data: {
        type: 'dataType',
        data: [
          { divisionName: 'Бухгалтерия', supervisor: 'Лисицина Л. Н.', numberOfEmployees: 7 },
          { divisionName: 'Канцелярия', supervisor: 'Иванова И. В.', numberOfEmployees: 3 },
          { divisionName: 'Юридический отдел', supervisor: 'Потапова Е. В.', numberOfEmployees: 4 },
          { divisionName: 'Отдел технического контроля', supervisor: 'Иванов И. И.', numberOfEmployees: 5 },
          { divisionName: 'Отдел управления персоналом', supervisor: 'Морозова А. И.', numberOfEmployees: 3 },
        ]
      },
      pageInfo: {
        pageIndex: 0,
        pageSize: 10,
        totalSize: 100
      }
    };
    return of(mockObject).pipe(
      map(resp => {
        return resp['data']['data'];
      })
    );
  }

}
