export const get_product_data = {
  "actionType": "get_product_data",
  "value": [
  {
    "id": {
      "id": null,
      "type": null
    },
    "title": "product 1",
    "children": [
      {
        "id": {
          "id": null,
          "type": null
        },
        "title": "Сборки",
        "children": [
          {
            "id": {
              "id": 1,
              "type": "BuildPageView"
            },
            "title": "Сборка 1",
            "children": []
          }
        ]
      },
      {
        "id": {
          "id": null,
          "type": null
        },
        "title": "Роли",
        "children": [
          {
            "id": {
              "id": 1,
              "type": "BuildPageView"
            },
            "title": "страдающий продукта",
            "children": []
          }
        ]
      },
      {
        "id": {
          "id": null,
          "type": null
        },
        "title": "Компоненты",
        "children": [
          {
            "id": {
              "id": 1,
              "type": "ComponentPageView"
            },
            "title": "компонент",
            "children": []
          }
        ]
      }
    ]
  }
],
  "success": true,
  "message": null
}

export const get_task_data = {
  "actionType": "get_task_data",
  "value": [
  {
    "id": null,
    "title": "Итерации",
    "children": [
      {
        "id": {
          "id": 1,
          "type": "IterationPageView"
        },
        "title": "Итерация 1",
        "children": [
          {
            "id": null,
            "title": "Задачи аналитики",
            "children": [
              {
                "id": {
                  "id": 1,
                  "type": "AnalyticsTaskPageView"
                },
                "title": "описание",
                "children": []
              }
            ]
          },
          {
            "id": null,
            "title": "Задачи разработки",
            "children": [
              {
                "id": {
                  "id": 3,
                  "type": "DevelopTaskPageView"
                },
                "title": "описание",
                "children": []
              }
            ]
          },
          {
            "id": null,
            "title": "Задачи тестирования",
            "children": [
              {
                "id": {
                  "id": 1,
                  "type": "TestTaskPageView"
                },
                "title": "описание",
                "children": []
              }
            ]
          },
          {
            "id": null,
            "title": "Задачи коммуникации",
            "children": [
              {
                "id": {
                  "id": 2,
                  "type": "CommunicationTaskPageView"
                },
                "title": "описание",
                "children": []
              }
            ]
          },
          {
            "id": null,
            "title": "Задачи имплантации",
            "children": [
              {
                "id": {
                  "id": 4,
                  "type": "ImplantationTaskPageView"
                },
                "title": "описание",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": {
          "id": 2,
          "type": "IterationPageView"
        },
        "title": "Итерация 2",
        "children": [
          {
            "id": null,
            "title": "Задачи аналитики",
            "children": []
          },
          {
            "id": null,
            "title": "Задачи разработки",
            "children": []
          },
          {
            "id": null,
            "title": "Задачи тестирования",
            "children": []
          },
          {
            "id": null,
            "title": "Задачи коммуникации",
            "children": []
          },
          {
            "id": null,
            "title": "Задачи имплантации",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": null,
    "title": "Все задачи проекта",
    "children": [
      {
        "id": null,
        "title": "Задачи аналитики",
        "children": [
          {
            "id": {
              "id": 1,
              "type": "AnalyticsTaskPageView"
            },
            "title": "описание",
            "children": []
          }
        ]
      },
      {
        "id": null,
        "title": "Задачи разработки",
        "children": [
          {
            "id": {
              "id": 3,
              "type": "DevelopTaskPageView"
            },
            "title": "описание",
            "children": []
          }
        ]
      },
      {
        "id": null,
        "title": "Задачи тестирования",
        "children": [
          {
            "id": {
              "id": 1,
              "type": "TestTaskPageView"
            },
            "title": "описание",
            "children": []
          }
        ]
      },
      {
        "id": null,
        "title": "Задачи коммуникации",
        "children": [
          {
            "id": {
              "id": 2,
              "type": "CommunicationTaskPageView"
            },
            "title": "описание",
            "children": []
          }
        ]
      },
      {
        "id": null,
        "title": "Задачи имплантации",
        "children": [
          {
            "id": {
              "id": 4,
              "type": "ImplantationTaskPageView"
            },
            "title": "описание",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": {
      "id": 1,
      "type": "DebugTablePageView"
    },
    "title": "Тестовая страничка с таблицей",
    "children": []
  }
],
  "success": true,
  "message": null
}

export const get_requirement_data = {
  "actionType": "get_requirement_data",
  "value": [
    {
      "id": null,
      "title": "Требования к компоненту",
      "children": [
        {
          "id": null,
          "title": "Требования к данным",
          "children": []
        },
        {
          "id": null,
          "title": "Требования к функциям",
          "children": [
            {
              "id": {
                "id": 1,
                "type": "UseCaseRequirementPageView"
              },
              "title": "Наказание грешников",
              "children": []
            }
          ]
        },
        {
          "id": null,
          "title": "Требования к GUI",
          "children": []
        },
        {
          "id": null,
          "title": "Требования к API",
          "children": []
        },
        {
          "id": null,
          "title": "Нефункциональные требования",
          "children": []
        },
        {
          "id": null,
          "title": "Сценарии",
          "children": []
        },
        {
          "id": null,
          "title": "Архитектурные требования",
          "children": []
        },
        {
          "id": null,
          "title": "Потребности пользователя",
          "children": []
        }
      ]
    }
  ],
  "success": true,
  "message": null
}
