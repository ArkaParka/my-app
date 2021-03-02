export const configMock = {
  "actions": [
    {
      "actionName": "get_requirement_data",
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
      "actionName": "get_product_data",
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
            "type": "PAGE_VIEW",
            "options": {
              "page_key": {
                "value": "ProjectHeaderView"
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
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "UseCaseRequirementPageView"
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
                                "dataType": "DebugTablePageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "DebugTablePageView"
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
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "IterationPageView"
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
                                "dataType": "AnalyticsTaskPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "AnalyticsTaskPageView"
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
                                "dataType": "ImplantationTaskPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "ImplantationTaskPageView"
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
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "ComponentPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "ComponentPageView"
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
                                      "type": "INNER_GRID",
                                      "dataType": null
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
                          "dataType": "String",
                          "options": {
                            "fieldName": {
                              "value": "productName"
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
                                  "subMain1-1 subMain1-2 subMain1-3 subMain1-3"
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                          "type": "INNER_GRID",
                          "dataType": null
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                          "type": "INNER_GRID",
                          "dataType": null
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
                                                  "dataType": null,
                                                  "options": {
                                                    "fieldName": {
                                                      "value": "requirement"
                                                    },
                                                    "label": {
                                                      "value": "Требования"
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
              "type": "INNER_GRID",
              "dataType": null
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
      "pageUID": "92F65B8B6EF10D15A3D729BBD6517F3B",
      "key": "DebugTablePageView",
      "viewConfig": {
        "type": "DebugTablePageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "rowSize": "max-content auto",
        "gridTemplate": [
          "button",
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
                  "value": "Тестовая кнопочбка"
                },
                "additionalProperties": {
                  "value": {}
                },
                "events": {
                  "value": [
                    {
                      "eventType": "ON_CLICK",
                      "dataType": null,
                      "actions": [
                        {
                          "actionType": "CREATE",
                          "options": {
                            "formKey": "some_form",
                            "pageUID": "92F65B8B6EF10D15A3D729BBD6517F3B",
                            "actionKey": "some_action"
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
              "type": "INNER_GRID",
              "dataType": null
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
                                        "events": {
                                          "value": [
                                            {
                                              "eventType": "ON_CLICK",
                                              "dataType": null,
                                              "actions": [
                                                {
                                                  "actionType": "DISPLAY_MESSAGE",
                                                  "options": {
                                                    "formKey": "formKeyFromAnnotation",
                                                    "pageUID": null,
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
