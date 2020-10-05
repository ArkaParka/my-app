export const mock ={
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
      "actionName": "get_requirement_data",
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
    }
  ],
  "viewConfig": {
    "type": "DynamicPageViewConfig",
    "config": {
      "type": null,
      "idFieldName": null,
      "columnSize": "20% 80%",
      "columnsFlow": null,
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
            "dataType": null,
            "options": {
              "page_key": {
                "value": "ru.pbs.module.management.pages.dynamic.ProjectHeaderView"
              }
            }
          }
        },
        {
          "areaName": "data_area",
          "widgetFlow": null,
          "widgetConfig": {
            "type": "BLANK",
            "dataType": null,
            "options": null
          }
        },
        {
          "areaName": "tab_tree_area",
          "widgetFlow": null,
          "widgetConfig": {
            "type": "TABS",
            "dataType": null,
            "options": {
              "tabs": {
                "value": [
                  {
                    "title": "Требования",
                    "config": {
                      "widgetConfig": {
                        "type": "TREE_LIST_VIEW",
                        "dataType": null,
                        "options": {
                          "get_data_path": {
                            "value": "get_requirement_data"
                          },
                          "events": {
                            "value": []
                          }
                        }
                      }
                    }
                  },
                  {
                    "title": "Задачи",
                    "config": {
                      "widgetConfig": {
                        "type": "TREE_LIST_VIEW",
                        "dataType": null,
                        "options": {
                          "get_data_path": {
                            "value": "get_task_data"
                          },
                          "events": {
                            "value": []
                          }
                        }
                      }
                    }
                  },
                  {
                    "title": "Продукт",
                    "config": {
                      "widgetConfig": {
                        "type": "TREE_LIST_VIEW",
                        "dataType": null,
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
                                        "dataType": null,
                                        "options": {
                                          "page_key": {
                                            "value": "ru.pbs.module.management.pages.dynamic.ComponentPageView"
                                          }
                                        }
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "ru.pbs.module.management.pages.dynamic.BuildPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "dataType": null,
                                        "options": {
                                          "page_key": {
                                            "value": "ru.pbs.module.management.pages.dynamic.BuildPageView"
                                          }
                                        }
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "viewType": "DYNAMIC_PAGE"
    }
  },
  "dataTypes": [],
  "typePageViewConfigs": [
    {
      "pageUID": "2FBCF3B6CEEB359B639C7EBA13B5E6ED",
      "key": "ru.pbs.module.management.pages.dynamic.ProjectHeaderView",
      "viewConfig": {
        "type": "ProjectHeaderViewData",
        "idFieldName": "",
        "columnSize": "20% 65% 15%",
        "columnsFlow": "left left left",
        "rowSize": "10%",
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
                  "value": null
                },
                "additionalProperties": {
                  "value": {}
                },
                "height": {
                  "value": null
                }
              },
              "type": "LABEL"
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
                  "value": null
                },
                "additionalProperties": {
                  "value": {}
                },
                "height": {
                  "value": null
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
                  "value": null
                },
                "additionalProperties": {
                  "value": {}
                },
                "height": {
                  "value": null
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
      "pageUID": "1EDF59AD507730DC1C22EA5BA9097C5C",
      "key": "ru.pbs.module.management.pages.dynamic.BuildPageView",
      "viewConfig": {
        "type": "BuildPageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "columnsFlow": "left",
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
                    "columnsFlow": "left right right",
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                    "columnsFlow": "left left",
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                            "width": {
                              "value": "max-content"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "inputFormat": {
                              "value": "String"
                            },
                            "height": {
                              "value": "max-content"
                            }
                          },
                          "dataType": "String",
                          "type": "INPUT"
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                            "width": {
                              "value": "max-content"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "inputFormat": {
                              "value": "String"
                            },
                            "height": {
                              "value": "max-content"
                            }
                          },
                          "dataType": "String",
                          "type": "INPUT"
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": "max-content"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "inputFormat": {
                              "value": "String"
                            },
                            "height": {
                              "value": "max-content"
                            }
                          },
                          "dataType": "String",
                          "type": "INPUT"
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
      "pageUID": "497B26BB8FEC8576D1CF389467AF6F97",
      "key": "ru.pbs.module.management.pages.dynamic.ComponentPageView",
      "viewConfig": {
        "type": "ComponentPageViewData",
        "idFieldName": "",
        "columnSize": "auto",
        "columnsFlow": "left",
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
                    "columnsFlow": "left left",
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                    "columnsFlow": "left left",
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
                              "value": null
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": null
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
    }
  ]
}
