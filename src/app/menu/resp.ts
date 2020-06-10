export const response = {
  "actions": [
    {
      "actionName": "create_user",
      "actionTitle": "Создать нового пользователя",
      "type": "NO_REQ",
      "configType": "FormAction",
      "execConfig": {
        "confirmMessage": "",
        "formKey": "user_form",
        "formActionType": "CREATE"
      }
    },
    {
      "actionName": "UPDATE_user",
      "actionTitle": "Редактировать",
      "type": "REQ_ONE",
      "configType": "FormAction",
      "execConfig": {
        "confirmMessage": "",
        "formKey": "user_form",
        "formActionType": "UPDATE"
      }
    },
    {
      "actionName": "delete_user",
      "actionTitle": "Удалить",
      "type": "REQ_MULTY",
      "configType": "FormAction",
      "execConfig": {
        "confirmMessage": "Удалить пользивателя ?",
        "formKey": "user_form",
        "formActionType": "DELETE"
      }
    }
  ],
  "viewConfig": {
    "type": "BaseTableVew",
    "config": {
      "type": "PersonDataRow",
      "idFieldName": "login",
      "pagination": true,
      "paginationAutoPageSize": false,
      "rowSelection": "multiple",
      "suppressMovableColumns": true,
      "columnDefs": [
        {
          "headerName": "Login",
          "field": "login",
          "resizable": true,
          "sortable": false
        },
        {
          "headerName": "ФИО",
          "field": "fullName",
          "resizable": true,
          "sortable": true
        },
        {
          "headerName": "Статус",
          "field": "status",
          "resizable": true,
          "sortable": false
        }
      ],
      "viewType": "DATA_SET"
    }
  },
  "dataTypes": [
    {
      "type": "UserFormItem",
      "forms": [
        {
          "formKey": "user_form",
          "schema": {
            "fieldGroupClassName": "row",
            "fieldGroup": [
              {
                "defaultProperties": {
                  "className": "col-12",
                  "type": "input",
                  "key": "login",
                  "templateOptions": {
                    "label": "Логин",
                    "required": true,
                    "type": "string"
                  },
                  "widgetOptions": null,
                  "fieldArray": null
                },
                "additionalProperties": {
                  "readOnly": ["UPDATE"]
                }
              },
              {
                "defaultProperties": {
                  "className": "col-4",
                  "type": "input",
                  "key": "firstName",
                  "templateOptions": {
                    "label": "Имя",
                    "required": true,
                    "type": "string"
                  },
                  "widgetOptions": null,
                  "fieldArray": null
                },
                "additionalProperties": {
                  "readOnly": ["UPDATE", "CREATE"]
                }
              },
              {
                "defaultProperties": {
                  "className": "col-4",
                  "type": "input",
                  "key": "lastName",
                  "templateOptions": {
                    "label": "Фамилия",
                    "required": true,
                    "type": "string"
                  },
                  "widgetOptions": null,
                  "fieldArray": null
                },
                "additionalProperties": {
                  "readOnly": []
                }
              },
              {
                "defaultProperties": {
                  "className": "col-4",
                  "type": "input",
                  "key": "middleName",
                  "templateOptions": {
                    "label": "Отчество",
                    "required": true,
                    "type": "string"
                  },
                  "widgetOptions": null,
                  "fieldArray": null
                },
                "additionalProperties": {
                  "readOnly": []
                }
              },
              {
                "defaultProperties": {
                  "className": "col-12",
                  "type": "input",
                  "key": "year",
                  "templateOptions": {
                    "label": "Год",
                    "required": true,
                    "type": "string"
                  },
                  "widgetOptions": null,
                  "fieldArray": null
                },
                "additionalProperties": {
                  "readOnly": []
                }
              },
              {
                "defaultProperties": {
                  "className": "col-12",
                  "type": "array",
                  "key": "phoneInfos",
                  "templateOptions": {
                    "label": "Телефон(ы)",
                    "required": true,
                    "type": "object"
                  },
                  "widgetOptions": null,
                  "fieldArray": {
                    "type": "object",
                    "fieldGroup": [
                      {
                        "className": "col-6",
                        "type": "input",
                        "key": "type",
                        "templateOptions": {
                          "label": "Тип",
                          "required": true,
                          "type": "string"
                        },
                        "widgetOptions": null,
                        "fieldArray": null
                      },
                      {
                        "className": "col-6",
                        "type": "input",
                        "key": "phone",
                        "templateOptions": {
                          "label": "Телефон",
                          "required": true,
                          "type": "string"
                        },
                        "widgetOptions": null,
                        "fieldArray": null
                      }
                    ]
                  }
                },
                "additionalProperties": {
                  "readOnly": []
                }
              },
              {
                "defaultProperties": {
                  "className": "col-12",
                  "type": "array",
                  "key": "emails",
                  "templateOptions": {
                    "label": "Email",
                    "required": true,
                    "type": "string"
                  },
                  "widgetOptions": null,
                  "fieldArray": {
                    "type": "string",
                    "fieldGroup": null
                  }
                },
                "additionalProperties": {
                  "readOnly": []
                }
              },
              {
                "defaultProperties": {
                  "className": "col-12",
                  "type": "select-with-search",
                  "key": "selectableField",
                  "templateOptions": {
                    "label": "Поле для выбора по поиску",
                    "required": true,
                    "type": "number"
                  },
                  "widgetOptions": {
                    "endPoint": "test_string_select",
                    "module": "staff-module"
                  },
                  "fieldArray": null
                },
                "additionalProperties": {
                  "readOnly": []
                }
              }

            ]
          }
        }
      ]
    }
  ]
}
