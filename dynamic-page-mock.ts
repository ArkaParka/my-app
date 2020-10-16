export const mock = {
  "actions": [
    {
      "actionName": "get_task_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {
        "pageUID": "68738E069046DED4929404C54EBA7724"
      }
    },
    {
      "actionName": "get_product_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {
        "pageUID": "68738E069046DED4929404C54EBA7724"
      }
    },
    {
      "actionName": "get_requirement_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {
        "pageUID": "68738E069046DED4929404C54EBA7724"
      }
    }
  ],
  "viewConfig": {
    "type": "DynamicPageViewConfig",
    "config": {
      "type": null,
      "idFieldName": null,
      "columnSize": "20% 80%",
      "rowSize": "10% auto",
      "gridTemplate": [
        "header_area header_area",
        "tab_tree_area data_area"
      ],
      "areasConfig": [
        {
          "areaName": "header_area",
          "widgetFlow": null,
          "widgetConfig": {
            "type": "PAGE_VIEW",
            "options": {
              "page_key": {
                "value": "ru.pbs.module.management.pages.dynamic.ProjectHeaderView"
              },
              "needsDataPreload": {
                "value": true
              }
            },
            "dataType": null
          }
        },
        {
          "areaName": "data_area",
          "widgetFlow": null,
          "widgetConfig": {
            "type": "BLANK",
            "options": null,
            "dataType": null
          }
        },
        {
          "areaName": "tab_tree_area",
          "widgetFlow": null,
          "widgetConfig": {
            "type": "TABS",
            "options": {
              "tabs": {
                "value": [
                  {
                    "title": "Требования",
                    "config": {
                      "widgetConfig": {
                        "type": "TREE_LIST_VIEW",
                        "options": {
                          "get_data_path": {
                            "value": "get_requirement_data"
                          },
                          "events": {
                            "value": []
                          }
                        },
                        "dataType": null
                      }
                    }
                  },
                  {
                    "title": "Задачи",
                    "config": {
                      "widgetConfig": {
                        "type": "TREE_LIST_VIEW",
                        "options": {
                          "get_data_path": {
                            "value": "get_task_data"
                          },
                          "events": {
                            "value": [
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "TestTaskPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "TestTaskPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "CommunicationTaskPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "CommunicationTaskPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "DevelopTaskPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "DevelopTaskPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "dataType": null
                      }
                    }
                  },
                  {
                    "title": "Продукт",
                    "config": {
                      "widgetConfig": {
                        "type": "TREE_LIST_VIEW",
                        "options": {
                          "get_data_path": {
                            "value": "get_product_data"
                          },
                          "events": {
                            "value": [
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "ru.pbs.module.management.pages.dynamic.ComponentPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "ru.pbs.module.management.pages.dynamic.ComponentPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "BuildPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "BuildPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "dataType": null
                      }
                    }
                  }
                ]
              }
            },
            "dataType": null
          }
        }
      ],
      "viewType": "DYNAMIC_PAGE"
    }
  },
  "dataTypes": [],
  "typePageViewConfigs": [
    {
      "pageUID": "497B26BB8FEC8576D1CF389467AF6F97",
      "key": "ru.pbs.module.management.pages.dynamic.ComponentPageView",
      "viewConfig": {
        "type": "ComponentPageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "10% auto",
        "gridTemplate": [
          "component-header",
          "component-main"
        ],
        "areasConfig": [
          {
            "areaName": "component-header",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "ComponentHeader",
                    "idFieldName": "",
                    "columnSize": "85% auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "component-name component-actions"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "component-name",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "name"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "component-actions",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "actions"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      }
                    ],
                    "viewType": "DYNAMIC_PAGE"
                  }
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "type": "INNER_GRID",
              "dataType": null
            }
          },
          {
            "areaName": "component-main",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "ComponentMain",
                    "idFieldName": "",
                    "columnSize": "20% auto",
                    "rowSize": "10% 10% 25% auto",
                    "gridTemplate": [
                      "include-component-label include-component-select",
                      "type-label type-select",
                      "description-label description-text-area",
                      "include-product-label include-product-table"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "include-component-label",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "includeComponentLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "include-component-select",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "includeComponentSelect"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "type-label",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "typeLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "type-select",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "typeSelect"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "description-label",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "descriptionLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "description-text-area",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "descriptionTextArea"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "include-product-label",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "includeProductLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "include-product-table",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "includeProductTable"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      }
                    ],
                    "viewType": "DYNAMIC_PAGE"
                  }
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "type": "INNER_GRID",
              "dataType": null
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "1EDF59AD507730DC1C22EA5BA9097C5C",
      "key": "BuildPageView",
      "viewConfig": {
        "type": "BuildPageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "10% auto",
        "gridTemplate": [
          "data-area-header",
          "data-area-main"
        ],
        "areasConfig": [
          {
            "areaName": "data-area-header",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "DataAreaHeader",
                    "idFieldName": "",
                    "columnSize": "20% 20% auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "title date version"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "title",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "title"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "date",
                        "widgetFlow": "auto",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "date"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "version",
                        "widgetFlow": "right",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "version"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      }
                    ],
                    "viewType": "DYNAMIC_PAGE"
                  }
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "type": "INNER_GRID",
              "dataType": null
            }
          },
          {
            "areaName": "data-area-main",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "DataAreaMain",
                    "idFieldName": "",
                    "columnSize": "20% auto",
                    "rowSize": "10% 10% 25% 10%",
                    "gridTemplate": [
                      "release-label release-date",
                      "plane-label planned-date",
                      "description-label description-input",
                      "product-label product-name"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "release-label",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "releaseLabel"
                            },
                            "width": {
                              "value": "80%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "80%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "release-date",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "minValue": {
                              "value": 3
                            },
                            "fieldName": {
                              "value": "field2"
                            },
                            "maxValue": {
                              "value": 5
                            },
                            "width": {
                              "value": "40%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "mask": {
                              "value": ""
                            },
                            "height": {
                              "value": "80%"
                            }
                          },
                          "dataType": "Number",
                          "type": "INPUT_NUMBER"
                        }
                      },
                      {
                        "areaName": "plane-label",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "planeLabel"
                            },
                            "width": {
                              "value": "80%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "80%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "planned-date",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "fieldName": {
                              "value": "field1"
                            },
                            "length": {
                              "value": 10
                            },
                            "width": {
                              "value": "40%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "mask": {
                              "value": "0000-00-00"
                            },
                            "height": {
                              "value": "80%"
                            }
                          },
                          "dataType": "String",
                          "type": "INPUT_STRING"
                        }
                      },
                      {
                        "areaName": "description-label",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "descriptionLabel"
                            },
                            "width": {
                              "value": "80%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "80%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "description-input",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "fieldName": {
                              "value": "description"
                            },
                            "width": {
                              "value": "70%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "70%"
                            }
                          },
                          "dataType": "String",
                          "type": "TEXTAREA"
                        }
                      },
                      {
                        "areaName": "product-label",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "productLabel"
                            },
                            "width": {
                              "value": "80%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "80%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "product-name",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "fieldName": {
                              "value": "field5"
                            },
                            "width": {
                              "value": "40%"
                            },
                            "description": {
                              "value": "input boolean description"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "80%"
                            }
                          },
                          "dataType": "Boolean",
                          "type": "INPUT_BOOLEAN"
                        }
                      }
                    ],
                    "viewType": "DYNAMIC_PAGE"
                  }
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "type": "INNER_GRID",
              "dataType": null
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "2FBCF3B6CEEB359B639C7EBA13B5E6ED",
      "key": "ru.pbs.module.management.pages.dynamic.ProjectHeaderView",
      "viewConfig": {
        "type": "ProjectHeaderViewData",
        "idFieldName": "",
        "columnSize": "20% 65% 15%",
        "rowSize": "100%",
        "gridTemplate": [
          "project_name create_list status"
        ],
        "areasConfig": [
          {
            "areaName": "project_name",
            "widgetFlow": "auto",
            "widgetConfig": {
              "dataType": "String",
              "options": {
                "fieldName": {
                  "value": "projectName"
                },
                "width": {
                  "value": "100%"
                },
                "additionalProperties": {
                  "value": {}
                },
                "height": {
                  "value": "100%"
                },
                "mask": {
                  "value": "(000)-000-00-00"
                }
              },
              "type": "INPUT"
            }
          },
          {
            "areaName": "create_list",
            "widgetFlow": "auto",
            "widgetConfig": {
              "dataType": "String",
              "options": {
                "fieldName": {
                  "value": "tempString"
                },
                "width": {
                  "value": "100%"
                },
                "additionalProperties": {
                  "value": {}
                },
                "height": {
                  "value": "100%"
                }
              },
              "type": "LABEL"
            }
          },
          {
            "areaName": "status",
            "widgetFlow": "auto",
            "widgetConfig": {
              "dataType": "String",
              "options": {
                "fieldName": {
                  "value": "status"
                },
                "width": {
                  "value": "100%"
                },
                "additionalProperties": {
                  "value": {}
                },
                "height": {
                  "value": "100%"
                }
              },
              "type": "LABEL"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "39EA090C70C667F7505DF72DB7DA5223",
      "key": "TestTaskPageView",
      "viewConfig": {
        "type": "TestTaskPageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "10% auto",
        "gridTemplate": [
          "task-header",
          "task-main"
        ],
        "areasConfig": [
          {
            "areaName": "task-header",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "TaskHeader",
                    "idFieldName": "",
                    "columnSize": "55% 20% auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "task-name status actions"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "task-name",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "taskName"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "status",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "taskStatus"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "actions",
                        "widgetFlow": "right",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "actions"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "100%"
                            }
                          },
                          "type": "LABEL"
                        }
                      }
                    ],
                    "viewType": "DYNAMIC_PAGE"
                  }
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "type": "INNER_GRID",
              "dataType": null
            }
          },
          {
            "areaName": "task-main",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "TaskMain",
                    "idFieldName": "",
                    "columnSize": "auto",
                    "rowSize": "6% 55% auto",
                    "gridTemplate": [
                      "submain1",
                      "submain2",
                      "submain3"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "submain1",
                        "widgetFlow": null,
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "SubMain1",
                                "idFieldName": "",
                                "columnSize": "10% 10% 10% auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "submain1-1 submain1-2 submain1-3 submain1-4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "submain1-1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "type": "BUTTON",
                                      "dataType": null
                                    }
                                  },
                                  {
                                    "areaName": "submain1-2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "type": "BUTTON",
                                      "dataType": null
                                    }
                                  },
                                  {
                                    "areaName": "submain1-3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "type": "BUTTON",
                                      "dataType": null
                                    }
                                  },
                                  {
                                    "areaName": "submain1-4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "type": "BUTTON",
                                      "dataType": null
                                    }
                                  }
                                ],
                                "viewType": "DYNAMIC_PAGE"
                              }
                            },
                            "additionalProperties": {
                              "value": {}
                            }
                          },
                          "type": "INNER_GRID",
                          "dataType": null
                        }
                      },
                      {
                        "areaName": "submain2",
                        "widgetFlow": null,
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "SubMain2",
                                "idFieldName": "",
                                "columnSize": "60% auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "submain2-1 submain2-2"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "submain2-1",
                                    "widgetFlow": null,
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "SubMain21",
                                            "idFieldName": "",
                                            "columnSize": "20% auto",
                                            "rowSize": "max-content 20% max-content max-content max-content max-content",
                                            "gridTemplate": [
                                              "responsible-label responsible-select",
                                              "description-label description-text-area",
                                              "use-case-label use-case-link",
                                              "build-label build-link",
                                              "connected-label connected",
                                              "attachments-label attachments"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "responsible-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "respLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              },
                                              {
                                                "areaName": "responsible-select",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "responsible"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              },
                                              {
                                                "areaName": "description-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "descriptionLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              },
                                              {
                                                "areaName": "description-text-area",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "description"
                                                    },
                                                    "width": {
                                                      "value": "70%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "70%"
                                                    }
                                                  },
                                                  "dataType": "String",
                                                  "type": "TEXTAREA"
                                                }
                                              },
                                              {
                                                "areaName": "use-case-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "useCaseLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              },
                                              {
                                                "areaName": "use-case-link",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": null,
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "useCaseLink"
                                                    },
                                                    "label": {
                                                      "value": "Сценарий использования"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "type": "LINK"
                                                }
                                              },
                                              {
                                                "areaName": "build-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "buildLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              },
                                              {
                                                "areaName": "build-link",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": null,
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "buildLink"
                                                    },
                                                    "label": {
                                                      "value": "Сценарий использования"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "type": "LINK"
                                                }
                                              },
                                              {
                                                "areaName": "connected-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "connectedLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              },
                                              {
                                                "areaName": "attachments-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "attachmentsLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              }
                                            ],
                                            "viewType": "DYNAMIC_PAGE"
                                          }
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        }
                                      },
                                      "type": "INNER_GRID",
                                      "dataType": null
                                    }
                                  },
                                  {
                                    "areaName": "submain2-2",
                                    "widgetFlow": null,
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "SubMain22",
                                            "idFieldName": "",
                                            "columnSize": "30% auto",
                                            "rowSize": "max-content max-content max-content",
                                            "gridTemplate": [
                                              "create-label create-date-input",
                                              "deadline-label deadline-input",
                                              "workload-label workload-input"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "create-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "createLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              },
                                              {
                                                "areaName": "create-date-input",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "createDate"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDate",
                                                  "type": "INPUT_DATE"
                                                }
                                              },
                                              {
                                                "areaName": "deadline-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "deadlineLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              },
                                              {
                                                "areaName": "deadline-input",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "deadlineDate"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDate",
                                                  "type": "INPUT_DATE"
                                                }
                                              },
                                              {
                                                "areaName": "workload-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "workloadLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "height": {
                                                      "value": "100%"
                                                    }
                                                  },
                                                  "type": "LABEL"
                                                }
                                              },
                                              {
                                                "areaName": "workload-input",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "minValue": {
                                                      "value": 5e-324
                                                    },
                                                    "fieldName": {
                                                      "value": "workload"
                                                    },
                                                    "maxValue": {
                                                      "value": 1.7976931348623157e+308
                                                    },
                                                    "width": {
                                                      "value": "40%"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    },
                                                    "mask": {
                                                      "value": ""
                                                    },
                                                    "height": {
                                                      "value": "80%"
                                                    }
                                                  },
                                                  "dataType": "Number",
                                                  "type": "INPUT_NUMBER"
                                                }
                                              }
                                            ],
                                            "viewType": "DYNAMIC_PAGE"
                                          }
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        }
                                      },
                                      "type": "INNER_GRID",
                                      "dataType": null
                                    }
                                  }
                                ],
                                "viewType": "DYNAMIC_PAGE"
                              }
                            },
                            "additionalProperties": {
                              "value": {}
                            }
                          },
                          "type": "INNER_GRID",
                          "dataType": null
                        }
                      },
                      {
                        "areaName": "submain2",
                        "widgetFlow": null,
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "SubMain3",
                                "idFieldName": "",
                                "columnSize": "auto",
                                "rowSize": "auto 10%",
                                "gridTemplate": [
                                  "submain3-1",
                                  "submain3-2"
                                ],
                                "areasConfig": [],
                                "viewType": "DYNAMIC_PAGE"
                              }
                            },
                            "additionalProperties": {
                              "value": {}
                            }
                          },
                          "type": "INNER_GRID",
                          "dataType": null
                        }
                      }
                    ],
                    "viewType": "DYNAMIC_PAGE"
                  }
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "type": "INNER_GRID",
              "dataType": null
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    }
  ]
}
