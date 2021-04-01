export const configMock = {
  "actions": [
    {
      "actionName": "get_product_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {
        "pageUID": "B76B2BECA6A86AD78F00973B7A342AB0"
      }
    },
    {
      "actionName": "get_task_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {
        "pageUID": "B76B2BECA6A86AD78F00973B7A342AB0"
      }
    },
    {
      "actionName": "get_requirement_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {
        "pageUID": "B76B2BECA6A86AD78F00973B7A342AB0"
      }
    }
  ],
  "viewConfig": {
    "type": "DynamicPageViewConfig",
    "config": {
      "type": null,
      "idFieldName": null,
      "columnSize": "20% 80%",
      "rowSize": "8% auto",
      "gridTemplate": [
        "header_area header_area",
        "tab_tree_area data_area"
      ],
      "areasConfig": [
        {
          "areaName": "header_area",
          "widgetFlow": null,
          "widgetConfig": {
            "options": {
              "page_key": {
                "value": "ProjectHeaderView"
              },
              "needsDataPreload": {
                "value": true
              }
            },
            "dataType": null,
            "type": "PAGE_VIEW"
          }
        },
        {
          "areaName": "data_area",
          "widgetFlow": null,
          "widgetConfig": {
            "options": {
              "page_key": {
                "value": "StartProjectPageView"
              },
              "needsDataPreload": {
                "value": true
              }
            },
            "dataType": null,
            "type": "PAGE_VIEW"
          }
        },
        {
          "areaName": "tab_tree_area",
          "widgetFlow": null,
          "widgetConfig": {
            "options": {
              "tabs": {
                "value": [
                  {
                    "title": "Требования",
                    "config": {
                      "widgetConfig": {
                        "options": {
                          "get_data_path": {
                            "value": "get_requirement_data"
                          },
                          "events": {
                            "value": [
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "UseCaseRequirementPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "options": {
                                          "page_key": {
                                            "value": "UseCaseRequirementPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "dataType": null,
                        "type": "TREE_LIST_VIEW"
                      }
                    }
                  },
                  {
                    "title": "Задачи",
                    "config": {
                      "widgetConfig": {
                        "options": {
                          "get_data_path": {
                            "value": "get_task_data"
                          },
                          "events": {
                            "value": [
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "ViewWithInnerGrids",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "options": {
                                          "page_key": {
                                            "value": "ViewWithInnerGrids"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
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
                                        "options": {
                                          "page_key": {
                                            "value": "DevelopTaskPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "AnalyticsTaskPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "options": {
                                          "page_key": {
                                            "value": "AnalyticsTaskPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "DebugTablePageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "options": {
                                          "page_key": {
                                            "value": "DebugTablePageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "TestTaskPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "options": {
                                          "page_key": {
                                            "value": "TestTaskPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "IterationPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "options": {
                                          "page_key": {
                                            "value": "IterationPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "ImplantationTaskPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "options": {
                                          "page_key": {
                                            "value": "ImplantationTaskPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
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
                                        "options": {
                                          "page_key": {
                                            "value": "CommunicationTaskPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "dataType": null,
                        "type": "TREE_LIST_VIEW"
                      }
                    }
                  },
                  {
                    "title": "Продукт",
                    "config": {
                      "widgetConfig": {
                        "options": {
                          "get_data_path": {
                            "value": "get_product_data"
                          },
                          "events": {
                            "value": [
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "ComponentPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "options": {
                                          "page_key": {
                                            "value": "ComponentPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
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
                                        "options": {
                                          "page_key": {
                                            "value": "BuildPageView"
                                          },
                                          "needsDataPreload": {
                                            "value": false
                                          }
                                        },
                                        "dataType": null,
                                        "type": "PAGE_VIEW"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "dataType": null,
                        "type": "TREE_LIST_VIEW"
                      }
                    }
                  }
                ]
              }
            },
            "dataType": null,
            "type": "TABS"
          }
        }
      ],
      "viewType": "DYNAMIC_PAGE"
    }
  },
  "dataTypes": [],
  "typePageViewConfigs": [
    {
      "pageUID": "997E776E681C39CC9E94E2C759C7891E",
      "key": "AnalyticsTaskPageView",
      "viewConfig": {
        "type": "AnalyticsTaskPageViewData",
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
                    "columnSize": "55% 22% auto",
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
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
                      "subMain1",
                      "subMain2",
                      "subMain3"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "subMain1",
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
                                  "subMain1-1 subMain1-2 subMain1-3 subMain1-4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "subMain1-1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "connectionsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Связи"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "EA6DEDFB2A2655E77F92A713C8DD6438",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "subMain1-2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "reportsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Отчеты"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "EA6DEDFB2A2655E77F92A713C8DD6438",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "subMain1-3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "processesButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Процессы"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "EA6DEDFB2A2655E77F92A713C8DD6438",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "subMain1-4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "responsibleButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Назначить"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "EA6DEDFB2A2655E77F92A713C8DD6438",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "subMain2",
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
                                  "subMain2-1 subMain2-2"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "subMain2-1",
                                    "widgetFlow": null,
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "SubMain21",
                                            "idFieldName": "",
                                            "columnSize": "20% auto",
                                            "rowSize": "max-content max-content max-content max-content max-content max-content",
                                            "gridTemplate": [
                                              "build-label build-select",
                                              "responsible-label responsible-select",
                                              "requirement-label requirement-link",
                                              "description-label description-text-area",
                                              "connected-label connected",
                                              "attachments-label attachments"
                                            ],
                                            "areasConfig": [
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "build-select",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "multiselect": {
                                                      "value": false
                                                    },
                                                    "endpoint": {
                                                      "value": ""
                                                    },
                                                    "fieldName": {
                                                      "value": "build"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "class java.lang.String",
                                                  "type": "SELECT"
                                                }
                                              },
                                              {
                                                "areaName": "responsible-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "responsibleLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "requirement-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "requirementLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "requirement-link",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "page_key": {
                                                      "value": "DebugTablePageView"
                                                    },
                                                    "fieldName": {
                                                      "value": "requirement"
                                                    },
                                                    "targetArea": {
                                                      "value": "data_area"
                                                    },
                                                    "pageUID": {
                                                      "value": "AE73C2D568F3A12F3E87864476DE72EC"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "String",
                                                  "type": "SIMPLE_LINK"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                                "areaName": "result-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "resultLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "result-text-area",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "result"
                                                    },
                                                    "width": {
                                                      "value": "70%"
                                                    },
                                                    "label": {
                                                      "value": ""
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "subMain2-2",
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
                                              "create-label crate-date-input",
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "subMain3",
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "8317F38C131B25E120C9A0CB72FE2FF9",
      "key": "UseCaseRequirementPageView",
      "viewConfig": {
        "type": "UseCaseRequirementPageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "10% auto",
        "gridTemplate": [
          "header",
          "multi-page"
        ],
        "areasConfig": [
          {
            "areaName": "multi-page",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "useCasePages"
                },
                "pageKey": {
                  "value": "UseCaseStepPageViewData"
                },
                "additionalProperties": {
                  "value": {}
                },
                "needsDataPreload": {
                  "value": true
                }
              },
              "dataType": null,
              "type": "INNER_GRID"
            }
          },
          {
            "areaName": "header",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "PageHeader",
                    "idFieldName": "",
                    "columnSize": "auto 15% 15% auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "title date state actions"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "title",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "title"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "createDate"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "areaName": "state",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "currentState"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "tempString"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "0F11DA1740AF594B5B49F67657571BAF",
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
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "title"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "date"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
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
                    "columnSize": "15% auto",
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "fieldName": {
                              "value": "releaseDate"
                            },
                            "label": {
                              "value": ""
                            },
                            "additionalProperties": {
                              "value": {}
                            }
                          },
                          "dataType": "LocalDateTime",
                          "type": "INPUT_DATE_TIME"
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
                            "labelType": {
                              "value": "DEFAULT"
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
                              "value": "planeDate"
                            },
                            "label": {
                              "value": ""
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "label": {
                              "value": ""
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
                            "labelType": {
                              "value": "DEFAULT"
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
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "productName"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "81056525C52D1A1C4B9F9CCA7631CF8C",
      "key": "ImplantationTaskPageView",
      "viewConfig": {
        "type": "ImplantationTaskPageViewData",
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
                    "columnSize": "55% 22% auto",
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
                            "labelType": {
                              "value": "DEFAULT"
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
                        "widgetFlow": null,
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "status"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
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
                      "subMain1",
                      "subMain2",
                      "subMain3"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "subMain1",
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
                                  "subMain1-1 subMain1-2 subMain1-3 subMain1-4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "subMain1-1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "connectionsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Связи"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "DB6456199A67C0622ACB67BCDB151CB5",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "subMain1-2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "reportsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Отчеты"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "DB6456199A67C0622ACB67BCDB151CB5",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "subMain1-3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "processesButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Процессы"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "DB6456199A67C0622ACB67BCDB151CB5",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "subMain1-4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "responsibleButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Назначить"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "DB6456199A67C0622ACB67BCDB151CB5",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "subMain2",
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
                                  "subMain2-1 subMain2-2"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "subMain2-1",
                                    "widgetFlow": null,
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "SubMain21",
                                            "idFieldName": "",
                                            "columnSize": "20% auto",
                                            "rowSize": "max-content max-content max-content max-content max-content max-content",
                                            "gridTemplate": [
                                              "build-label build-select",
                                              "responsible-label responsible-select",
                                              "assembly-label assembly-link",
                                              "description-label description-text-area",
                                              "connected-label connected",
                                              "attachments-label attachments"
                                            ],
                                            "areasConfig": [
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "build-select",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "multiselect": {
                                                      "value": false
                                                    },
                                                    "endpoint": {
                                                      "value": ""
                                                    },
                                                    "fieldName": {
                                                      "value": "build"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "class java.lang.String",
                                                  "type": "SELECT"
                                                }
                                              },
                                              {
                                                "areaName": "responsible-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "responsibleLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "assembly-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "assemblyLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "assembly-link",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": null,
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "assembly"
                                                    },
                                                    "label": {
                                                      "value": "Сборка"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "type": "LINK"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "subMain2-2",
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
                                              "create-label crate-date-input",
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "subMain3",
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
                                  "subMain3-1",
                                  "subMain3-2"
                                ],
                                "areasConfig": [],
                                "viewType": "DYNAMIC_PAGE"
                              }
                            },
                            "additionalProperties": {
                              "value": {}
                            }
                          },
                          "dataType": null,
                          "type": "INNER_GRID"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "84E4B6BA61108FA9CEA5D911032AA78F",
      "key": "IterationPageView",
      "viewConfig": {
        "type": "IterationPageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "5% auto",
        "gridTemplate": [
          "iteration-header",
          "iteration-main"
        ],
        "areasConfig": [
          {
            "areaName": "iteration-header",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "IterationHeader",
                    "idFieldName": "",
                    "columnSize": "50% 20% auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "title status actions"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "title",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "title"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "TITLE"
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
                              "value": "iterationStatus"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "STATUS"
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
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          },
          {
            "areaName": "iteration-main",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "IterationMain",
                    "idFieldName": "",
                    "columnSize": "auto",
                    "rowSize": "40% auto",
                    "gridTemplate": [
                      "submain1",
                      "submain2"
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
                                "columnSize": "60% auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "submain1-1 submain1-2"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "submain1-1",
                                    "widgetFlow": null,
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "SubMain11",
                                            "idFieldName": "",
                                            "columnSize": "max-content auto",
                                            "rowSize": "max-content max-content",
                                            "gridTemplate": [
                                              "build-label build-select",
                                              "planned-start-label planned-start-date"
                                            ],
                                            "areasConfig": [
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "build-select",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "multiselect": {
                                                      "value": false
                                                    },
                                                    "endpoint": {
                                                      "value": ""
                                                    },
                                                    "fieldName": {
                                                      "value": "buildSelect"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "class java.lang.String",
                                                  "type": "SELECT"
                                                }
                                              },
                                              {
                                                "areaName": "planned-start-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "plannedStartLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "planned-start-date",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "plannedStartDate"
                                                    },
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDate",
                                                  "type": "INPUT_DATE"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-2",
                                    "widgetFlow": null,
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "SubMain12",
                                            "idFieldName": "",
                                            "columnSize": "40% auto",
                                            "rowSize": "max-content max-content max-content",
                                            "gridTemplate": [
                                              "start-label start-date",
                                              "end-label end-date",
                                              "duration-label duration-date"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "start-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "startLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "start-date",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "startDate"
                                                    },
                                                    "label": {
                                                      "value": ""
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
                                                "areaName": "end-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "endLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "end-date",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "endDate"
                                                    },
                                                    "label": {
                                                      "value": ""
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
                                                "areaName": "duration-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "durationLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "duration-date",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "minValue": {
                                                      "value": 5e-324
                                                    },
                                                    "fieldName": {
                                                      "value": "durationDate"
                                                    },
                                                    "maxValue": {
                                                      "value": 1.7976931348623157e+308
                                                    },
                                                    "width": {
                                                      "value": "40%"
                                                    },
                                                    "label": {
                                                      "value": ""
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
                                "columnSize": "auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "table"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "table",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "iterationTaskTable"
                                        },
                                        "columns": {
                                          "value": [
                                            {
                                              "title": "Id",
                                              "width": "5%",
                                              "fieldName": "id",
                                              "mask": "",
                                              "actionExecutable": false
                                            },
                                            {
                                              "title": "Задача",
                                              "width": "auto",
                                              "fieldName": "title",
                                              "mask": "",
                                              "actionExecutable": false
                                            },
                                            {
                                              "title": "Тип",
                                              "width": "15%",
                                              "fieldName": "type",
                                              "mask": "",
                                              "actionExecutable": false
                                            },
                                            {
                                              "title": "Дата создания",
                                              "width": "15%",
                                              "fieldName": "createDate",
                                              "mask": "",
                                              "actionExecutable": false
                                            },
                                            {
                                              "title": "Дата выполнения",
                                              "width": "15%",
                                              "fieldName": "executionDate",
                                              "mask": "",
                                              "actionExecutable": false
                                            },
                                            {
                                              "title": "Статус",
                                              "width": "15%",
                                              "fieldName": "status",
                                              "mask": "",
                                              "actionExecutable": false
                                            },
                                            {
                                              "title": "Ответственный",
                                              "width": "20%",
                                              "fieldName": "responsible",
                                              "mask": "",
                                              "actionExecutable": false
                                            }
                                          ]
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        }
                                      },
                                      "dataType": "Table",
                                      "type": "TABLE"
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "FCA2D32B92FDCA96D38A8313FC0C79A9",
      "key": "DevelopTaskPageView",
      "viewConfig": {
        "type": "DevelopTaskPageViewData",
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
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
                                        "fieldName": {
                                          "value": "connectionsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Связи"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "D35C7E628AC0A5921C00CB1F20B442F0",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "reportsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Отчеты"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "D35C7E628AC0A5921C00CB1F20B442F0",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "processesButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Процессы"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "D35C7E628AC0A5921C00CB1F20B442F0",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "responsibleButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Назначить"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "D35C7E628AC0A5921C00CB1F20B442F0",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
                                            "rowSize": "max-content max-content max-content 15% max-content max-content",
                                            "gridTemplate": [
                                              "build-label build-select",
                                              "specification-label specification-link",
                                              "responsible-label responsible-select",
                                              "description-label description-text-area",
                                              "connected-label connected",
                                              "attachments-label attachments"
                                            ],
                                            "areasConfig": [
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "build-select",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "multiselect": {
                                                      "value": false
                                                    },
                                                    "endpoint": {
                                                      "value": ""
                                                    },
                                                    "fieldName": {
                                                      "value": "build"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "class java.lang.String",
                                                  "type": "SELECT"
                                                }
                                              },
                                              {
                                                "areaName": "specification-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "specificationLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "specification-link",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": null,
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "specification"
                                                    },
                                                    "label": {
                                                      "value": "Спецификация"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "type": "LINK"
                                                }
                                              },
                                              {
                                                "areaName": "responsible-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "responsibleLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "submain3",
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "3E9B53C81AE10E21C155B6123530610E",
      "key": "DebugTablePageView",
      "viewConfig": {
        "type": "ViewDataWithInnerGrids",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "10% auto auto",
        "gridTemplate": [
          "taskHeader",
          "taskMain",
          "taskMainTwo"
        ],
        "areasConfig": [
          {
            "areaName": "taskHeader",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "TaskHeader",
                    "idFieldName": "",
                    "columnSize": "55% 22% auto auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "header_subMain1 header_subMain2 header_subMain3 header_subMain4"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "header_subMain1",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "header_subMain1",
                                "idFieldName": "",
                                "columnSize": "55% 22% auto auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "header_subMain1_1 header_subMain1_2 header_subMain1_3 header_subMain1_4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "header_subMain1_1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain1_1",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label1"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label1",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label1"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain1_2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain1_2",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label2"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label2",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label2"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain1_3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain1_3",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label3"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label3",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label3"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain1_4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain1_4",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label4"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label4",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label4"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "header_subMain2",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "header_subMain2",
                                "idFieldName": "",
                                "columnSize": "55% 22% auto auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "header_subMain2_1 header_subMain2_2 header_subMain2_3 header_subMain2_4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "header_subMain2_1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain2_1",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label5"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label5",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label5"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain2_2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain2_2",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label6"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label6",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label6"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain2_3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain2_3",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label7"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label7",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label7"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain2_4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain2_4",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label8"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label8",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label8"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "header_subMain3",
                        "widgetFlow": "right",
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "header_subMain3",
                                "idFieldName": "",
                                "columnSize": "55% 22% auto auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "header_subMain3_1 header_subMain3_2 header_subMain3_3 header_subMain3_4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "header_subMain3_1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain3_1",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label9"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label9",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label9"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain3_2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain3_2",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label10"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label10",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label10"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain3_3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain3_3",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label11"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label11",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label11"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain3_4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain3_4",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label12"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label12",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label12"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "header_subMain4",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "header_subMain4",
                                "idFieldName": "",
                                "columnSize": "55% 22% auto auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "header_subMain4_1 header_subMain4_2 header_subMain4_3 header_subMain4_4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "header_subMain4_1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain4_1",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label13"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label13",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label13"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain4_2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain4_2",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label14"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label14",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label14"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain4_3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain4_3",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label15"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label15",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label15"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "header_subMain4_4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "header_subMain4_4",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label16"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label16",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label16"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          },
          {
            "areaName": "taskMain",
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
                      "subMain1",
                      "subMain2",
                      "subMain3"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "subMain1",
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
                                  "subMain1-1 subMain1-2 subMain1-3 subMain1-4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "subMain1-1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "connectionsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Связи"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "3B479817770EE329DA69CCFDEE134D6F",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "subMain1-2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "reportsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Отчеты"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "3B479817770EE329DA69CCFDEE134D6F",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "subMain1-3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "processesButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Процессы"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "3B479817770EE329DA69CCFDEE134D6F",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "subMain1-4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "responsibleButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Назначить"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "3B479817770EE329DA69CCFDEE134D6F",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "subMain2",
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
                                  "subMain2-1 subMain2-2"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "subMain2-1",
                                    "widgetFlow": null,
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "SubMain21",
                                            "idFieldName": "",
                                            "columnSize": "20% auto",
                                            "rowSize": "max-content max-content max-content max-content max-content max-content",
                                            "gridTemplate": [
                                              "build-label build-select",
                                              "responsible-label responsible-select",
                                              "requirement-label requirement-link",
                                              "description-label description-text-area",
                                              "connected-label connected",
                                              "attachments-label attachments"
                                            ],
                                            "areasConfig": [
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "build-select",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "multiselect": {
                                                      "value": false
                                                    },
                                                    "endpoint": {
                                                      "value": ""
                                                    },
                                                    "fieldName": {
                                                      "value": "build"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "class java.lang.String",
                                                  "type": "SELECT"
                                                }
                                              },
                                              {
                                                "areaName": "responsible-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "responsibleLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "requirement-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "requirementLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "requirement-link",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "page_key": {
                                                      "value": "ViewDataWithInnerGrids"
                                                    },
                                                    "fieldName": {
                                                      "value": "requirement"
                                                    },
                                                    "targetArea": {
                                                      "value": "data_area"
                                                    },
                                                    "pageUID": {
                                                      "value": "C364CB7AA46BA243F89B64CBFC1CCCA9"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "String",
                                                  "type": "SIMPLE_LINK"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                                "areaName": "result-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "resultLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "result-text-area",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "result"
                                                    },
                                                    "width": {
                                                      "value": "70%"
                                                    },
                                                    "label": {
                                                      "value": ""
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "subMain2-2",
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
                                              "createLabel createDateInput",
                                              "deadline-label deadline-input",
                                              "workload-label workload-input"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "createLabel",
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "createDateInput",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "createDateInput"
                                                    },
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "subMain3",
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          },
          {
            "areaName": "taskMainTwo",
            "widgetFlow": null,
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "taskMainTwo",
                    "idFieldName": "",
                    "columnSize": "55% 22% auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "MainTwo_subMain1 MainTwo_subMain2 MainTwo_subMain3"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "MainTwo_subMain1",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "MainTwo_subMain1",
                                "idFieldName": "",
                                "columnSize": "55% 22% auto auto auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "MainTwo_subMain1_1 MainTwo_subMain1_2 MainTwo_subMain1_3 MainTwo_subMain1_4 MainTwo_subMain1_5"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "MainTwo_subMain1_1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain1_1",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label17"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label17",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label17"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain1_2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain1_2",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label18"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label18",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label18"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain1_3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain1_3",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label19"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label19",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label19"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain1_4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain1_4",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label20"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label20",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label20"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain1_5",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain1_5",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label21"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label21",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label21"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "MainTwo_subMain2",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "MainTwo_subMain2",
                                "idFieldName": "",
                                "columnSize": "55% 22% auto auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "MainTwo_subMain2_1 MainTwo_subMain2_2 MainTwo_subMain2_3 MainTwo_subMain2_4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "MainTwo_subMain2_1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain2_1",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label22"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label22",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label22"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain2_2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain2_2",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label23"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label23",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label23"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain2_3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain2_3",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label24"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label24",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label24"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain2_4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain2_4",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label25"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label25",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label25"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "MainTwo_subMain3",
                        "widgetFlow": "right",
                        "widgetConfig": {
                          "options": {
                            "innerGridConfig": {
                              "value": {
                                "type": "MainTwo_subMain3",
                                "idFieldName": "",
                                "columnSize": "55% 22% auto auto",
                                "rowSize": "auto",
                                "gridTemplate": [
                                  "MainTwo_subMain3_1 MainTwo_subMain3_2 MainTwo_subMain3_3 MainTwo_subMain3_4"
                                ],
                                "areasConfig": [
                                  {
                                    "areaName": "MainTwo_subMain3_1",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain3_1",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label26"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label26",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label26"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain3_2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain3_2",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label27"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label27",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label27"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain3_3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain3_3",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label28"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label28",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label28"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
                                    }
                                  },
                                  {
                                    "areaName": "MainTwo_subMain3_4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "innerGridConfig": {
                                          "value": {
                                            "type": "MainTwo_subMain3_4",
                                            "idFieldName": "",
                                            "columnSize": "auto",
                                            "rowSize": "auto",
                                            "gridTemplate": [
                                              "label29"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "label29",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "label29"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "73A8F0B215B6060840873EA50276BADB",
      "key": "ComponentPageView",
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
                    "columnSize": "max-content max-content auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "component-name version component-actions"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "component-name",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "name"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "version"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
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
                    "rowSize": "10% 10% 10% 25% auto",
                    "gridTemplate": [
                      "planning-date-label planning-data-input",
                      "include-component-label include-component-select",
                      "type-label type-select",
                      "description-label description-text-area",
                      "include-product-label include-product-table"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "planning-date-label",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "planningDateLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "areaName": "planning-data-input",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "fieldName": {
                              "value": "planningDate"
                            },
                            "label": {
                              "value": ""
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
                        "areaName": "include-component-label",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "includeComponentLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "multiselect": {
                              "value": false
                            },
                            "endpoint": {
                              "value": ""
                            },
                            "fieldName": {
                              "value": "includeComponentSelect"
                            },
                            "additionalProperties": {
                              "value": {}
                            }
                          },
                          "dataType": "class java.lang.String",
                          "type": "SELECT"
                        }
                      },
                      {
                        "areaName": "type-label",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "typeLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "multiselect": {
                              "value": false
                            },
                            "endpoint": {
                              "value": ""
                            },
                            "fieldName": {
                              "value": "typeSelect"
                            },
                            "additionalProperties": {
                              "value": {}
                            }
                          },
                          "dataType": "class java.lang.String",
                          "type": "SELECT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "descriptionTextArea"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "includeProductLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "fieldName": {
                              "value": "includeProductTable"
                            },
                            "columns": {
                              "value": [
                                {
                                  "title": "Версия сборки",
                                  "width": "auto",
                                  "fieldName": "version",
                                  "mask": "",
                                  "actionExecutable": false
                                },
                                {
                                  "title": "Продукт",
                                  "width": "auto",
                                  "fieldName": "product",
                                  "mask": "",
                                  "actionExecutable": false
                                },
                                {
                                  "title": "Дата выпуска",
                                  "width": "auto",
                                  "fieldName": "planned_date",
                                  "mask": "M/d/yy, h:mm a",
                                  "actionExecutable": false
                                }
                              ]
                            },
                            "additionalProperties": {
                              "value": {}
                            }
                          },
                          "dataType": "Table",
                          "type": "TABLE"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "D268AB8A3A03F2D30C31D469F72BBE28",
      "key": "StartProjectPageView",
      "viewConfig": {
        "type": "StartProjectPageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto",
        "gridTemplate": [
          "subMain1"
        ],
        "areasConfig": [
          {
            "areaName": "subMain1",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "SubMain1",
                    "idFieldName": "",
                    "columnSize": "max-content auto",
                    "rowSize": "max-content max-content max-content",
                    "gridTemplate": [
                      "description-label description-text-area",
                      "start-label start-date",
                      "planned-end-label planned-end-date"
                    ],
                    "areasConfig": [
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
                            "labelType": {
                              "value": "DEFAULT"
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
                              "value": "descriptionTextArea"
                            },
                            "width": {
                              "value": "70%"
                            },
                            "label": {
                              "value": ""
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
                        "areaName": "start-label",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "startDateLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "areaName": "start-date",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "fieldName": {
                              "value": "startDate"
                            },
                            "label": {
                              "value": ""
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
                        "areaName": "planned-end-label",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "plannedEndLabel"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
                        "areaName": "planned-end-date",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "options": {
                            "fieldName": {
                              "value": "plannedEndDate"
                            },
                            "label": {
                              "value": ""
                            },
                            "additionalProperties": {
                              "value": {}
                            }
                          },
                          "dataType": "LocalDate",
                          "type": "INPUT_DATE"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "876DC327A9A4AD4BB7DB84237E91947D",
      "key": "ProjectHeaderView",
      "viewConfig": {
        "type": "ProjectHeaderViewData",
        "idFieldName": "",
        "columnSize": "20% 65% 15%",
        "rowSize": "auto",
        "gridTemplate": [
          "project_name create_list status"
        ],
        "areasConfig": [
          {
            "areaName": "project_name",
            "widgetFlow": "left",
            "widgetConfig": {
              "dataType": "String",
              "options": {
                "fieldName": {
                  "value": "projectName"
                },
                "width": {
                  "value": "100%"
                },
                "labelType": {
                  "value": "TITLE"
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
            "areaName": "create_list",
            "widgetFlow": "left",
            "widgetConfig": {
              "dataType": "String",
              "options": {
                "fieldName": {
                  "value": "tempString"
                },
                "width": {
                  "value": "100%"
                },
                "labelType": {
                  "value": "DEFAULT"
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
                  "value": "status"
                },
                "width": {
                  "value": "100%"
                },
                "labelType": {
                  "value": "STATUS"
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
      "pageUID": "B68FEF999A27053F53A17A9ED2A47CEE",
      "key": "CommunicationTaskPageView",
      "viewConfig": {
        "type": "CommunicationTaskPageViewData",
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
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
                                        "fieldName": {
                                          "value": "connectionsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Связи"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "13F991BB551FA929F69B646892FD4C8B",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "reportsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Отчеты"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "13F991BB551FA929F69B646892FD4C8B",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "processesButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Процессы"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "13F991BB551FA929F69B646892FD4C8B",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "responsibleButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Назначить"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "13F991BB551FA929F69B646892FD4C8B",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
                                            "rowSize": "max-content 15% max-content max-content 15% max-content max-content",
                                            "gridTemplate": [
                                              "communication-type-label communication-type-select",
                                              "periodicity-label periodicity",
                                              "responsible-label responsible-select",
                                              "participants-label participants-select",
                                              "agenda-label agenda-text-area",
                                              "connected-label connected",
                                              "attachments-label attachments"
                                            ],
                                            "areasConfig": [
                                              {
                                                "areaName": "communication-type-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "communicationTypeLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "communication-type-select",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "communicationType"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "periodicity-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "periodicityLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "periodicity",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "periodicity"
                                                    },
                                                    "width": {
                                                      "value": "70%"
                                                    },
                                                    "label": {
                                                      "value": ""
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
                                                "areaName": "responsible-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "responsibleLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "participants-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "participantsLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "participants-select",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "participants"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "agenda-label",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "agendaLabel"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                "areaName": "agenda-text-area",
                                                "widgetFlow": "left",
                                                "widgetConfig": {
                                                  "dataType": "String",
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "agenda"
                                                    },
                                                    "width": {
                                                      "value": "100%"
                                                    },
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                                            "rowSize": "max-content max-content",
                                            "gridTemplate": [
                                              "create-label create-date-input",
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "multiselect": {
                                                      "value": false
                                                    },
                                                    "endpoint": {
                                                      "value": ""
                                                    },
                                                    "fieldName": {
                                                      "value": "workload"
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "class java.lang.String",
                                                  "type": "SELECT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "submain3",
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "92F65B8B6EF10D15A3D729BBD6517F3B",
      "key": "asdgdsgh",
      "viewConfig": {
        "type": "DebugTablePageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "max-content max-content auto",
        "gridTemplate": [
          "button",
          "link",
          "table"
        ],
        "areasConfig": [
          {
            "areaName": "table",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "iterationTaskTable"
                },
                "columns": {
                  "value": [
                    {
                      "title": "Id",
                      "width": "5%",
                      "fieldName": "id",
                      "mask": "",
                      "actionExecutable": false
                    },
                    {
                      "title": "Задача",
                      "width": "auto",
                      "fieldName": "title",
                      "mask": "",
                      "actionExecutable": false
                    },
                    {
                      "title": "Тип",
                      "width": "15%",
                      "fieldName": "type",
                      "mask": "",
                      "actionExecutable": false
                    },
                    {
                      "title": "Дата создания",
                      "width": "15%",
                      "fieldName": "createDate",
                      "mask": "",
                      "actionExecutable": false
                    },
                    {
                      "title": "Дата выполнения",
                      "width": "15%",
                      "fieldName": "executionDate",
                      "mask": "",
                      "actionExecutable": false
                    },
                    {
                      "title": "Статус",
                      "width": "15%",
                      "fieldName": "status",
                      "mask": "",
                      "actionExecutable": false
                    },
                    {
                      "title": "Ответственный",
                      "width": "20%",
                      "fieldName": "responsible",
                      "mask": "",
                      "actionExecutable": false
                    }
                  ]
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "Table",
              "type": "TABLE"
            }
          },
          {
            "areaName": "button",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "button"
                },
                "width": {
                  "value": "auto"
                },
                "label": {
                  "value": "Удалить"
                },
                "additionalProperties": {
                  "value": {}
                },
                "relatedDataWidget": {
                  "value": null
                },
                "events": {
                  "value": [
                    {
                      "eventType": "ON_CLICK",
                      "dataType": "null",
                      "actions": [
                        {
                          "actionType": "DISPLAY_FORM",
                          "options": {
                            "formKey": "project_form",
                            "pageUID": "6F0135FC8F26B4B914362DCF4029A19D",
                            "actionKey": ""
                          }
                        },
                        {
                          "actionType": "DELETE",
                          "options": {
                            "formKey": "",
                            "pageUID": "6F0135FC8F26B4B914362DCF4029A19D",
                            "actionKey": "delete_action_key"
                          }
                        }
                      ]
                    }
                  ]
                },
                "height": {
                  "value": "auto"
                }
              },
              "dataType": null,
              "type": "BUTTON"
            }
          },
          {
            "areaName": "link",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "page_key": {
                  "value": "BuildPageView"
                },
                "fieldName": {
                  "value": "debugLink"
                },
                "targetArea": {
                  "value": "data_area"
                },
                "pageUID": {
                  "value": "6F0135FC8F26B4B914362DCF4029A19D"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "String",
              "type": "SIMPLE_LINK"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "0641584FE30EFB64245BC3AF94A92BC2",
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
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
                                        "fieldName": {
                                          "value": "connectionsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Связи"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "C45E281B2CAC056B5D722700CA3BDFFE",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-2",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "reportsButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Отчеты"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "C45E281B2CAC056B5D722700CA3BDFFE",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-3",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "processesButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Процессы"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "C45E281B2CAC056B5D722700CA3BDFFE",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
                                    }
                                  },
                                  {
                                    "areaName": "submain1-4",
                                    "widgetFlow": "left",
                                    "widgetConfig": {
                                      "options": {
                                        "fieldName": {
                                          "value": "responsibleButton"
                                        },
                                        "width": {
                                          "value": "max-content"
                                        },
                                        "label": {
                                          "value": "Назначить"
                                        },
                                        "additionalProperties": {
                                          "value": {}
                                        },
                                        "relatedDataWidget": {
                                          "value": null
                                        },
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": "null",
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": "C45E281B2CAC056B5D722700CA3BDFFE",
                                                    "actionKey": ""
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "height": {
                                          "value": "max-content"
                                        }
                                      },
                                      "dataType": null,
                                      "type": "BUTTON"
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
                                                    },
                                                    "additionalProperties": {
                                                      "value": {}
                                                    }
                                                  },
                                                  "dataType": "LocalDateTime",
                                                  "type": "INPUT_DATE_TIME"
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
                                                    "labelType": {
                                                      "value": "DEFAULT"
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
                                                    "label": {
                                                      "value": ""
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
                                      "dataType": null,
                                      "type": "INNER_GRID"
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
                          "dataType": null,
                          "type": "INNER_GRID"
                        }
                      },
                      {
                        "areaName": "submain3",
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
                          "dataType": null,
                          "type": "INNER_GRID"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "B9E1CC1A05BE1DD82D78BA0F002F7543",
      "key": "UseCaseStepPageView",
      "viewConfig": {
        "type": "UseCaseStepPageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "max-content max-content",
        "gridTemplate": [
          "header",
          "main"
        ],
        "areasConfig": [
          {
            "areaName": "header",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "HeaderArea",
                    "idFieldName": "",
                    "columnSize": "auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "title"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "title",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "title"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          },
          {
            "areaName": "main",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "MainArea",
                    "idFieldName": "",
                    "columnSize": "auto",
                    "rowSize": "auto",
                    "gridTemplate": [
                      "test"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "test",
                        "widgetFlow": "left",
                        "widgetConfig": {
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "testString"
                            },
                            "width": {
                              "value": "100%"
                            },
                            "labelType": {
                              "value": "DEFAULT"
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
              "dataType": null,
              "type": "INNER_GRID"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    }
  ],
  "forms": [
    {
      "key": "member_form",
      "header": "",
      "dataType": "MemberFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "MemberFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto",
        "gridTemplate": [
          "description",
          "member",
          "task"
        ],
        "areasConfig": [
          {
            "areaName": "description",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "description"
                },
                "width": {
                  "value": "70%"
                },
                "label": {
                  "value": "Описание"
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
            "areaName": "member",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "member"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Участники"
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
            "areaName": "task",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "task"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Задача"
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
      },
      "uid": "1D32FE19568B331CD752BFC7257BC52E"
    },
    {
      "key": "iteration_form",
      "header": "",
      "dataType": "IterationFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "IterationFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto auto auto auto auto",
        "gridTemplate": [
          "title",
          "startDate",
          "endDate",
          "plannedStartDate",
          "duration",
          "project",
          "productBuild",
          "iterationStatus"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "startDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "startDate"
                },
                "label": {
                  "value": "Начало"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "endDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "endDate"
                },
                "label": {
                  "value": "Дата окончания"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "plannedStartDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "plannedStartDate"
                },
                "label": {
                  "value": "Планируемая дата начала"
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
            "areaName": "duration",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "duration"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Продолжительность"
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
            "areaName": "project",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "project"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Проект"
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
            "areaName": "productBuild",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "productBuild"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Сборка продукта"
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
            "areaName": "iterationStatus",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "iterationStatus"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Статус итерации"
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
      },
      "uid": "8360DEA02F77730D65A1298050B5F50C"
    },
    {
      "key": "task_communication_form",
      "header": "",
      "dataType": "TaskCommunicationFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "TaskCommunicationFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto",
        "gridTemplate": [
          "agenda",
          "dateTimeStart",
          "continuous",
          "communicationType"
        ],
        "areasConfig": [
          {
            "areaName": "agenda",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "agenda"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Повестка"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "dateTimeStart",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "dateTimeStart"
                },
                "label": {
                  "value": "Дата время начала"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "continuous",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "continuous"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Продолжительность"
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
            "areaName": "communicationType",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "communicationType"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Тип коммуникации"
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
      },
      "uid": "6A84A6F765EAB937D7BECD775152E2C0"
    },
    {
      "key": "product_role_form",
      "header": "",
      "dataType": "ProductRoleFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ProductRoleFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto",
        "gridTemplate": [
          "title",
          "description",
          "product"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "description",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "description"
                },
                "width": {
                  "value": "70%"
                },
                "label": {
                  "value": "Описание"
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
            "areaName": "product",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "product"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Продукт"
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
      },
      "uid": "3037745DF2C6B57F4FB1118EF3904B17"
    },
    {
      "key": "project_user_form",
      "header": "",
      "dataType": "ProjectUserFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ProjectUserFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto",
        "gridTemplate": [
          "active",
          "user",
          "project",
          "projectRole"
        ],
        "areasConfig": [
          {
            "areaName": "active",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "active"
                },
                "width": {
                  "value": "40%"
                },
                "description": {
                  "value": "Действует"
                },
                "label": {
                  "value": "Действует"
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
          },
          {
            "areaName": "user",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "user"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Пользователь"
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
            "areaName": "project",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "project"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Проект"
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
            "areaName": "projectRole",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "projectRole"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Роль в проекте"
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
      },
      "uid": "4DBD2567B0E89D63DCBEF142C07F4786"
    },
    {
      "key": "component_type_form",
      "header": "",
      "dataType": "ComponentTypeFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ComponentTypeFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto",
        "gridTemplate": [
          "title"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "EB423E5E1F9C7786C29EC024C701C60F"
    },
    {
      "key": "task_status_form",
      "header": "",
      "dataType": "TaskStatusFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "TaskStatusFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto",
        "gridTemplate": [
          "id",
          "title"
        ],
        "areasConfig": [
          {
            "areaName": "id",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "id"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Id"
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
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "CC9395E9123519E897AB12A931D05F2E"
    },
    {
      "key": "link_type_form",
      "header": "",
      "dataType": "LinkTypeFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "LinkTypeFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto",
        "gridTemplate": [
          "title",
          "forMain",
          "forLinked"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "forMain",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "forMain"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Для основного"
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
            "areaName": "forLinked",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "forLinked"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Для связываемого"
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
      },
      "uid": "B64AC3E128063FFCC23B3255F3846F19"
    },
    {
      "key": "result_test_form",
      "header": "",
      "dataType": "ResultTestFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ResultTestFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto",
        "gridTemplate": [
          "description",
          "success",
          "testDate",
          "task"
        ],
        "areasConfig": [
          {
            "areaName": "description",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "description"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Описание"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "success",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "success"
                },
                "width": {
                  "value": "40%"
                },
                "description": {
                  "value": "Успешно"
                },
                "label": {
                  "value": "Успешно"
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
          },
          {
            "areaName": "testDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "testDate"
                },
                "label": {
                  "value": "Дата тестирования"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "task",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "task"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Задача"
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
      },
      "uid": "8E36E9AFC101EEA95767EBF96926F650"
    },
    {
      "key": "project_role_form",
      "header": "",
      "dataType": "ProjectRoleFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ProjectRoleFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto",
        "gridTemplate": [
          "title"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "EE3B8DAD7CA3B2482C7AD432DA93860C"
    },
    {
      "key": "task_implantation_form",
      "header": "",
      "dataType": "TaskImplantationFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "TaskImplantationFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto",
        "gridTemplate": [
          "result"
        ],
        "areasConfig": [
          {
            "areaName": "result",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "result"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Результат"
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
      },
      "uid": "118E2E65FF207FA2991BA01F28676EDE"
    },
    {
      "key": "iteration_status_form",
      "header": "",
      "dataType": "IterationStatusFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "IterationStatusFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto",
        "gridTemplate": [
          "title"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "C0B8B56C0772141682CA4CD4E9CF62F3"
    },
    {
      "key": "result_communication_form",
      "header": "",
      "dataType": "ResultCommunicationFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ResultCommunicationFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto",
        "gridTemplate": [
          "start",
          "finish",
          "resultText",
          "task"
        ],
        "areasConfig": [
          {
            "areaName": "start",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "start"
                },
                "label": {
                  "value": "Начало"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "finish",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "finish"
                },
                "label": {
                  "value": "Закончено"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "resultText",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "resultText"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Результат текст"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "task",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "task"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Задача"
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
      },
      "uid": "691259351C6E7002FD0049611F68EC0B"
    },
    {
      "key": "requirement_form",
      "header": "",
      "dataType": "RequirementFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "RequirementFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto auto auto auto auto auto auto auto auto",
        "gridTemplate": [
          "title",
          "context",
          "identifier",
          "dateOfFormation",
          "number",
          "presentationType",
          "project",
          "parent",
          "author",
          "substitute",
          "currentStatus",
          "representationType"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "context",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "context"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Контекст"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "identifier",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "identifier"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Идентификатор"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "dateOfFormation",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "dateOfFormation"
                },
                "label": {
                  "value": "Дата формирования"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "number",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "number"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Номер"
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
            "areaName": "presentationType",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "presentationType"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Тип представления"
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
            "areaName": "project",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "project"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Проект"
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
            "areaName": "parent",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "parent"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Родительское"
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
            "areaName": "author",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "author"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Автор"
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
            "areaName": "substitute",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "substitute"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Замещает"
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
            "areaName": "currentStatus",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "currentStatus"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Текущий статус"
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
            "areaName": "representationType",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "representationType"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Тип представления"
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
      },
      "uid": "8270167DD678B0B97D1C4551B5DC6118"
    },
    {
      "key": "version_form",
      "header": "",
      "dataType": "VersionFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "VersionFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto",
        "gridTemplate": [
          "versionCode",
          "versionDate"
        ],
        "areasConfig": [
          {
            "areaName": "versionCode",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "versionCode"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Код версии"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "versionDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "versionDate"
                },
                "label": {
                  "value": "Дата версии"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "B50EE00CFF81F20477EA89AE8A3EF640"
    },
    {
      "key": "requirement_link_form",
      "header": "",
      "dataType": "RequirementLinkFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "RequirementLinkFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto",
        "gridTemplate": [
          "linkType",
          "mainRequirement",
          "linkedRequirement",
          "linkingRestriction"
        ],
        "areasConfig": [
          {
            "areaName": "linkType",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "linkType"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Тип связи"
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
            "areaName": "mainRequirement",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "mainRequirement"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Основное"
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
            "areaName": "linkedRequirement",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "linkedRequirement"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Связываемое"
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
            "areaName": "linkingRestriction",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "linkingRestriction"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Ограничение связывания"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "8437122817F65134FA58F23C172A223A"
    },
    {
      "key": "requirement_comment_form",
      "header": "",
      "dataType": "RequirementCommentFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "RequirementCommentFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto",
        "gridTemplate": [
          "createDate",
          "text",
          "requirementId",
          "toComment"
        ],
        "areasConfig": [
          {
            "areaName": "createDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "createDate"
                },
                "label": {
                  "value": "Дата создания"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "text",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "text"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Текст"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "requirementId",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "requirementId"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Требование"
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
            "areaName": "toComment",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "toComment"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "К комментарию"
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
      },
      "uid": "8561E87E9BF4C59955F11A3DCE51414B"
    },
    {
      "key": "use_case_form",
      "header": "",
      "dataType": "UseCaseFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "UseCaseFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto",
        "gridTemplate": [
          "limitation",
          "result",
          "number",
          "requirement"
        ],
        "areasConfig": [
          {
            "areaName": "limitation",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "limitation"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Ограничение"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "result",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "result"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Результат"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "number",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "number"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Номер"
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
            "areaName": "requirement",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "requirement"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Требование"
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
      },
      "uid": "366D42FED15672BD68851E69F4764F96"
    },
    {
      "key": "requirement_type_form",
      "header": "",
      "dataType": "RequirementTypeFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "RequirementTypeFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto",
        "gridTemplate": [
          "title",
          "requirementType"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "requirementType",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "requirementType"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Тип требования"
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
      },
      "uid": "657F91FDE0CE1921286808D9053B0F02"
    },
    {
      "key": "task_analytics_form",
      "header": "",
      "dataType": "TaskAnalyticsFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "TaskAnalyticsFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto",
        "gridTemplate": [
          "requirement"
        ],
        "areasConfig": [
          {
            "areaName": "requirement",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "requirement"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Требование"
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
      },
      "uid": "17135358DAEE514BCB0C1780FF6BC7D1"
    },
    {
      "key": "task_test_form",
      "header": "",
      "dataType": "TaskTestFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "TaskTestFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto",
        "gridTemplate": [
          "result",
          "useCase"
        ],
        "areasConfig": [
          {
            "areaName": "result",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "result"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Результат"
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
            "areaName": "useCase",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "useCase"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Сценарий использования"
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
      },
      "uid": "B7CCBFEB4A23769F5193AE75A88B13C5"
    },
    {
      "key": "component_dynamic_form",
      "header": "",
      "dataType": "ComponentFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ComponentFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto",
        "gridTemplate": [
          "title",
          "component_type_id",
          "included_in_component_id"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "component_type_id",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "componentTypeId"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Тип компонента"
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
            "areaName": "included_in_component_id",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "includedInComponent"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Включен в компонент"
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
      },
      "uid": "BF270B243E1F367F431544A0157BC8A3"
    },
    {
      "key": "user_form",
      "header": "",
      "dataType": "UserFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "UserFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto",
        "gridTemplate": [
          "name",
          "email",
          "login"
        ],
        "areasConfig": [
          {
            "areaName": "name",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "name"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Имя"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "email",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "email"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Электронный адрес"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "login",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "login"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Логин"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "8FC718C4A47B38028F4822E12FA6A9DB"
    },
    {
      "key": "requirement_status_form",
      "header": "",
      "dataType": "RequirementStatusFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "RequirementStatusFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto",
        "gridTemplate": [
          "title"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "1FFD08DBAF82AA3D80FC2DAE74DE29C8"
    },
    {
      "key": "component_in_product_form",
      "header": "",
      "dataType": "ComponentInProductFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ComponentInProductFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto auto auto",
        "gridTemplate": [
          "version",
          "versionDate",
          "plannedDate",
          "description",
          "componentId",
          "productId"
        ],
        "areasConfig": [
          {
            "areaName": "version",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "version"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Версия"
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
            "areaName": "versionDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "versionDate"
                },
                "label": {
                  "value": "Дата версии"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "plannedDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "plannedDate"
                },
                "label": {
                  "value": "Плановая дата"
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
            "areaName": "description",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "description"
                },
                "width": {
                  "value": "70%"
                },
                "label": {
                  "value": "Описание"
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
            "areaName": "componentId",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "componentId"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Компонент"
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
            "areaName": "productId",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "productId"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Продукт"
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
      },
      "uid": "B4000F5EC813237B58F7AFEF56CDAE7F"
    },
    {
      "key": "project_form",
      "header": "",
      "dataType": "ProjectFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ProjectFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto",
        "gridTemplate": [
          "title",
          "description",
          "start_date",
          "planned_end_date"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "description",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "description"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Описание"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "start_date",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "startDate"
                },
                "label": {
                  "value": "Дата начала"
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
            "areaName": "planned_end_date",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "plannedEndDate"
                },
                "label": {
                  "value": "Плановая дата окончания"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDate",
              "type": "INPUT_DATE"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "8537231D64E2CBFCE7EBE7AA4235C028"
    },
    {
      "key": "specification_form",
      "header": "",
      "dataType": "SpecificationFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "SpecificationFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto",
        "gridTemplate": [
          "requirement",
          "component"
        ],
        "areasConfig": [
          {
            "areaName": "requirement",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "requirement"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Требование"
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
            "areaName": "component",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "component"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Компонент"
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
      },
      "uid": "D6DEB9101297F60B5749EF93FF2D0901"
    },
    {
      "key": "task_link_form",
      "header": "",
      "dataType": "TaskLinkFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "TaskLinkFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto",
        "gridTemplate": [
          "communicationType",
          "description",
          "connectedFrom",
          "connectedTo"
        ],
        "areasConfig": [
          {
            "areaName": "communicationType",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "communicationType"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Тип отношения"
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
            "areaName": "description",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "description"
                },
                "width": {
                  "value": "70%"
                },
                "label": {
                  "value": "Описание"
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
            "areaName": "connectedFrom",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "connectedFrom"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Связуемая"
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
            "areaName": "connectedTo",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "connectedTo"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Связанная"
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
      },
      "uid": "8C2E081432538F3E5F9DF3F12CE409F7"
    },
    {
      "key": "product_form",
      "header": "",
      "dataType": "ProductFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ProductFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto",
        "gridTemplate": [
          "title",
          "description",
          "projectId"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "description",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "description"
                },
                "width": {
                  "value": "70%"
                },
                "label": {
                  "value": "Описание"
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
            "areaName": "projectId",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "projectId"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Проект"
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
      },
      "uid": "C8DF67323C993BA81DCF7BE851A1A8EC"
    },
    {
      "key": "report_task_form",
      "header": "",
      "dataType": "ReportTaskFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ReportTaskFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto auto auto auto",
        "gridTemplate": [
          "comment",
          "minutes",
          "hours",
          "createDate",
          "task",
          "user",
          "reportStatus"
        ],
        "areasConfig": [
          {
            "areaName": "comment",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "comment"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Комментарий"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "minutes",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "minutes"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Минут"
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
            "areaName": "hours",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "hours"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Часов"
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
            "areaName": "createDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "createDate"
                },
                "label": {
                  "value": "Дата создания"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "task",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "task"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Задача"
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
            "areaName": "user",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "user"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Пользователь"
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
            "areaName": "reportStatus",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "reportStatus"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Статус отчета"
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
      },
      "uid": "737589475DC62865278D9232BCEAD429"
    },
    {
      "key": "requirement_type_dictionary_form",
      "header": "",
      "dataType": "RequirementTypeDictionaryFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "RequirementTypeDictionaryFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto",
        "gridTemplate": [
          "title"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "7B3CBEBA31F134A98E3C7372979DB0EA"
    },
    {
      "key": "product_build_form",
      "header": "",
      "dataType": "ProductBuildFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ProductBuildFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto auto",
        "gridTemplate": [
          "buildDate",
          "plannedDate",
          "description",
          "product",
          "version"
        ],
        "areasConfig": [
          {
            "areaName": "buildDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "buildDate"
                },
                "label": {
                  "value": "Дата сборки"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "plannedDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "plannedDate"
                },
                "label": {
                  "value": "Плановая дата"
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
            "areaName": "description",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "description"
                },
                "width": {
                  "value": "70%"
                },
                "label": {
                  "value": "Описание"
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
            "areaName": "product",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "product"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Продукт"
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
            "areaName": "version",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "version"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Версия"
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
      },
      "uid": "1F127B575DC53E6EBADEC163033A49C4"
    },
    {
      "key": "report_status_form",
      "header": "",
      "dataType": "ReportStatusFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "ReportStatusFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto",
        "gridTemplate": [
          "title"
        ],
        "areasConfig": [
          {
            "areaName": "title",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "title"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Заголовок"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      },
      "uid": "37886A1D28BC37BCC4F30823DE145DD9"
    },
    {
      "key": "case_role_form",
      "header": "",
      "dataType": "CaseRoleFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "CaseRoleFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto",
        "gridTemplate": [
          "description",
          "productRoleId",
          "useCaseId"
        ],
        "areasConfig": [
          {
            "areaName": "description",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "description"
                },
                "width": {
                  "value": "70%"
                },
                "label": {
                  "value": "Описание"
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
            "areaName": "productRoleId",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "productRoleId"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Роль продукта"
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
            "areaName": "useCaseId",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "useCaseId"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Сценарий использования"
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
      },
      "uid": "01198C2DC232373E5582C13A91538D51"
    },
    {
      "key": "periodicity_form",
      "header": "",
      "dataType": "PeriodicityFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "PeriodicityFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto auto auto",
        "gridTemplate": [
          "weekDay",
          "startTime",
          "endTime",
          "location",
          "sendNotifications",
          "taskCommunication"
        ],
        "areasConfig": [
          {
            "areaName": "weekDay",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "weekDay"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "День недели"
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
            "areaName": "startTime",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "startTime"
                },
                "label": {
                  "value": "Время начала"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "endTime",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "endTime"
                },
                "label": {
                  "value": "Дата окончания действия"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "location",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "location"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Место проведения"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "sendNotifications",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "sendNotifications"
                },
                "width": {
                  "value": "40%"
                },
                "description": {
                  "value": "Отправлять уведомления"
                },
                "label": {
                  "value": "Отправлять уведомления"
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
          },
          {
            "areaName": "taskCommunication",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "taskCommunication"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Задача коммуникации"
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
      },
      "uid": "5603C1D6AC8F820EF4ADE2B9061D88AD"
    },
    {
      "key": "task_comment_form",
      "header": "",
      "dataType": "TaskCommentFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "TaskCommentFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto auto auto auto",
        "gridTemplate": [
          "text",
          "createDate",
          "updateDate",
          "task",
          "author"
        ],
        "areasConfig": [
          {
            "areaName": "text",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "text"
                },
                "length": {
                  "value": 256
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Текст"
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
              "dataType": "String",
              "type": "INPUT_STRING"
            }
          },
          {
            "areaName": "createDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "createDate"
                },
                "label": {
                  "value": "Дата создания"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "updateDate",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "fieldName": {
                  "value": "updateDate"
                },
                "label": {
                  "value": "Дата изменения"
                },
                "additionalProperties": {
                  "value": {}
                }
              },
              "dataType": "LocalDateTime",
              "type": "INPUT_DATE_TIME"
            }
          },
          {
            "areaName": "task",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "task"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Задача"
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
            "areaName": "author",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "author"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Автор"
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
      },
      "uid": "513AFA390E3DEF9DCB8AFEBC2617FE62"
    },
    {
      "key": "task_development_form",
      "header": "",
      "dataType": "TaskDevelopmentFormItem",
      "idType": "Long",
      "pageViewConfig": {
        "type": "TaskDevelopmentFormItem",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "auto auto",
        "gridTemplate": [
          "specification",
          "result"
        ],
        "areasConfig": [
          {
            "areaName": "specification",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "specification"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Спецификация"
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
            "areaName": "result",
            "widgetFlow": "left",
            "widgetConfig": {
              "options": {
                "minValue": {
                  "value": 5e-324
                },
                "fieldName": {
                  "value": "result"
                },
                "maxValue": {
                  "value": 1.7976931348623157e+308
                },
                "width": {
                  "value": "40%"
                },
                "label": {
                  "value": "Результат"
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
      },
      "uid": "92E748A47C38CB13EEC14D489FBA1283"
    }
  ]
};
