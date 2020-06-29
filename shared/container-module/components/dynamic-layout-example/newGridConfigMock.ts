export const newGridResponse = [
  {
    "columnSize": "20% 80%",
    "gridTemplate": [
      "sidebar header",
      "sidebar main",
      "sidebar footer"
    ],
    "gridAreas": [
      {
        "areaName": "header",
        "areaColumnSize": "100%",
        "areaTemplate": ["header-title"],
        "areaItems": [
          {
            "itemName": "header-title",
            "itemData": "Реализовать требования PR-1026"
          }
        ]
      },
      {
        "areaName": "sidebar",
        "areaColumnSize": "33.333% 33.333% 33.333%",
        "areaTemplate": [
          "sb1 sb2 sb3",
          "sbMain sbMain sbMain",
        ],
        "areaItems": [
          {
            "itemName": "sb1",
            "itemData": "Требования"
          },
          {
            "itemName": "sb2",
            "itemData": "Задачи"
          },
          {
            "itemName": "sb3",
            "itemData": "Компоненты"
          },
          {
            "itemName": "sbMain",
            "itemData": "Все задачи проекта"
          },
        ]
      },
      {
        "areaName": "main",
        "areaColumnSize": "40% 60%",
        "areaTemplate": [
          "m1 mMain1",
          "m2 mMain2",
          "m3 mMain3",
          "m4 mMain",
          "m5 mMain",
          "m6 mMain",
        ],
        "areaItems": [
          {
            "itemName": "m1",
            "itemData": "Тип задачи: Задачи на разработку"
          },
          {
            "itemName": "m2",
            "itemData": "Компонент в сборке: Форма алгоритма"
          },
          {
            "itemName": "m3",
            "itemData": "Спецификация: Форма 1"
          },
          {
            "itemName": "m4",
            "itemData": "Ответственный: Иванов И.И."
          },
          {
            "itemName": "m5",
            "itemData": "Описание: Требование к GUI формы требования с типом Алгоритм. Реализовать форму."
          },
          {
            "itemName": "m6",
            "itemData": "Результат"
          },
          {
            "itemName": "mMain1",
            "itemData": "Создана 02/04/2020"
          },
          {
            "itemName": "mMain2",
            "itemData": "Срок до 02/04/2020"
          },
          {
            "itemName": "mMain3",
            "itemData": "Объём 12h"
          },
          {
            "itemName": "mMain",
            "itemData": ""
          }
        ]
      },
      {
        "areaName": "footer",
        "areaColumnSize": "100%",
        "areaTemplate": [
          "f1",
          "f2"
        ],
        "areaItems": [
          {
            "itemName": "f1",
            "itemData": "Связанные задачи: Провести ревью решения Pr-1058, Реализовать требования Pr-1059"
          },
          {
            "itemName": "f2",
            "itemData": "Вложения: Приложение_№20.xls, Отчёт_о_выполнении.docx"
          },
        ]
      },
    ],
  }

];

export const layoutConfig = {
  "areas": ["header", "sidebar", "main", "footer"],
  "columnSize": "20% 80%",
  "gridTemplate": [
    "header header",
    "sidebar main",
    "footer footer"
  ]
};

export const headerConfig = {
  "items": [
    {
      "itemName": "defaultHeader",
      "useComponent": "defaultHeaderComponent",
    }
  ]
};

export const sidebarConfig = {

};
