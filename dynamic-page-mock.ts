export const mock = {
  "actions": [
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
                            "value": []
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
                                "dataType": "ru.pbs.module.management.pages.dynamic.BuildPageView",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "options": {
                                          "page_key": {
                                            "value": "ru.pbs.module.management.pages.dynamic.BuildPageView"
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
      "key": "ru.pbs.module.management.pages.dynamic.BuildPageView",
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
                            "fieldName": {
                              "value": "releaseDate"
                            },
                            "width": {
                              "value": "40%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "inputFormat": {
                              "value": "String"
                            },
                            "height": {
                              "value": "80%"
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
                            "width": {
                              "value": "40%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "inputFormat": {
                              "value": "String"
                            },
                            "height": {
                              "value": "80%"
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
                              "value": "40%"
                            },
                            "additionalProperties": {
                              "value": {}
                            },
                            "height": {
                              "value": "40%"
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
