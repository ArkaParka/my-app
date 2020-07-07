import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

export class TestService {
  constructor() {
  }

  hello(): Observable<any> {
    return of('Jhon');
  }

  getTabsNames(): Observable<any> {
    return of([
      'Требования',
      'Задачи',
      'Компоненты'
    ]);
  }

  getProjectInfo(tabName: string): Observable<any> {
    const mockObject = {
      'Требования': [
        {
          title: 'Требования',
          key: 'requirements',
          expanded: true,
          children: [
            {
              title: 'Требование к модулю Продукт',
              key: 'requirementToProduct',
              expanded: true,
              children: [
                {
                  title: 'Требования к Данным',
                  key: 'requirementsToData',
                  isLeaf: true
                },
                {
                  title: 'Требования к функциям',
                  key: 'requirementsToFunctions',
                  expanded: true,
                  children: [
                    {
                      title: 'Алгоритм обработки 1',
                      key: 'processingAlgorithm1',
                      expanded: true,
                      children: [
                        {
                          title: 'Пункт 1',
                          key: 'paragraph1',
                          isLeaf: true
                        },
                        {
                          title: 'Пункт 2',
                          key: 'paragraph2',
                          isLeaf: true
                        },
                        {
                          title: 'Пункт 3',
                          key: 'paragraph3',
                          isLeaf: true
                        }
                      ]
                    },
                    {
                      title: 'Алгоритм обработки 2',
                      key: 'processingAlgorithm2',
                      isLeaf: true
                    }
                  ]
                },
                {
                  title: 'Требования к GUI',
                  key: 'requirementsToGUI',
                  isLeaf: true
                },
                {
                  title: 'Требования к API',
                  key: 'requirementsToAPI',
                  isLeaf: true
                }
              ]
            },
            {
              title: 'Требование к модулю Требования',
              key: 'requirementToRequirement',
              isLeaf: true
            },
            {
              title: 'Требование к модулю Задачи',
              key: 'requirementToTasks',
              isLeaf: true
            }
          ]
        }
      ],
      'Задачи': [
        {
          title: 'Все задачи проекта',
          key: 'allTasks',
          expanded: true,
          children: [
            {
              title: 'Мои открытые задачи',
              key: 'myOpenedTasks',
              expanded: true,
              children: [
                {
                  title: 'Исправить ошибки Pr-1025',
                  key: 'fixError',
                  isLeaf: true
                },
                {
                  title: 'Реализовать требования Pr-1026',
                  key: 'implementRequirements',
                  isLeaf: true
                },
                {
                  title: 'Провести ревью решения Pr-1058',
                  key: 'conductReview',
                  isLeaf: true
                }
              ]
            },
            {
              title: 'Мои задачи на ревью',
              key: 'myTasksAndReview',
              isLeaf: true
            }
          ]
        },
        {
          title: 'Итерации',
          key: 'iterations',
          expanded: true,
          children: [
            {
              title: 'Итерация 1',
              key: 'iteration1'
            },
            {
              title: 'Итерация 2',
              key: 'iteration2',
              expanded: true,
              children: [
                {
                  title: 'Реализовать требования Pr-1026',
                  key: 'implementRequirements',
                  isLeaf: true
                },
                {
                  title: 'Провести ревью решения Pr-1058',
                  key: 'conductReview',
                  isLeaf: true
                }
              ]
            },
            {
              title: 'Итерация 3',
              key: 'iteration3',
              isLeaf: true
            },
          ]
        }
      ],
      'Компоненты': [
        {
          title: 'Продукты',
          key: 'products',
          expanded: true,
          children: [
            {
              title: 'Продукт "Управление требованиями"',
              key: 'product1',
              expanded: true,
              children: [
                {
                  title: 'Сборки',
                  key: 'assembly',
                  expanded: true,
                  children: [
                    {
                      title: 'Сборкa 1.0',
                      key: 'assembly1_0',
                      isLeaf: true
                    },
                    {
                      title: 'Сборкa 1.1',
                      key: 'assembly1_1',
                      isLeaf: true
                    }
                  ]
                },
                {
                  title: 'Компоненты',
                  key: 'components',
                  expanded: true,
                  children: [
                    {
                      title: 'Хранилище данных',
                      key: 'dataStore',
                      expanded: true,
                      children: [
                        {
                          title: 'Хранилище модуля Задачи',
                          key: 'dataStoreForMT',
                          isLeaf: true
                        },
                        {
                          title: 'Хранилище модуля Требование',
                          key: 'dataStoreForMR',
                          isLeaf: true
                        }
                      ]
                    },
                    {
                      title: 'Форма требования',
                      key: 'claimForm',
                      expanded: true,
                      children: [
                        {
                          title: 'Форма Алгоритма',
                          key: 'algorithmForm',
                          isLeaf: true
                        },
                        {
                          title: 'Форма GUI',
                          key: 'guiForm',
                          isLeaf: true
                        },
                        {
                          title: 'Форма описания данных',
                          key: 'dataDescriptionForm',
                          isLeaf: true
                        },
                        {
                          title: 'Форма сценария',
                          key: 'scriptFrom',
                          isLeaf: true
                        }
                      ]
                    },
                    {
                      title: 'Процедура верификации',
                      key: 'verificationProcedure',
                      isLeaf: true
                    }
                  ]
                },
                {
                  title: 'Роли',
                  key: 'roles',
                  expanded: true,
                  children: [
                    {
                      title: 'Администратор',
                      key: 'administrator',
                      isLeaf: true
                    },
                    {
                      title: 'PM',
                      key: 'pm',
                      isLeaf: true
                    },
                    {
                      title: 'Аналитик',
                      key: 'analyst',
                      isLeaf: true
                    }
                  ]
                }
              ]
            },
            {
              title: 'Продукт "Задачи"',
              key: 'product2',
            }
          ]
        }
      ]
    };

    return of(mockObject[tabName]);
  }

}