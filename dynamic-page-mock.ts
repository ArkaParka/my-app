export const mock = {
  "actions": [
    {
      "actionName": "get_requirement_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {
        "pageUID": "34CC3A34C8F6FD2C310CA88A3DC2CA7A"
      }
    },
    {
      "actionName": "get_task_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {
        "pageUID": "34CC3A34C8F6FD2C310CA88A3DC2CA7A"
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
      "rowSize": "max-content auto",
      "gridTemplate": [
        "tab_tree header_area",
        "tab_tree data_area"
      ],
      "areasConfig": [
        {
          "areaName": "header_area",
          "widgetConfig": {
            "type": "BLANK",
            "dataType": null,
            "options": null
          }
        },
        {
          "areaName": "tab_tree",
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
                            "value": [
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "ru.pbs.module.staff.pages.model.PersonDataRow",
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
                                            "value": "ru.pbs.module.staff.pages.requriment.TestDynamicRequirementDataPage"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "header_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "dataType": null,
                                        "options": {
                                          "page_key": {
                                            "value": "ru.pbs.module.staff.pages.requriment.DynamicReqHeaderForm"
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
                            "value": [
                              {
                                "eventType": "ON_SELECT",
                                "dataType": "ru.pbs.module.staff.pages.model.PersonDataRow",
                                "actions": [
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "header_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "dataType": null,
                                        "options": {
                                          "page_key": {
                                            "value": "ru.pbs.module.staff.pages.task.DynamicTaskHeaderForm"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "actionType": "DISPLAY_WIDGET",
                                    "options": {
                                      "targetArea": "data_area",
                                      "widgetConfig": {
                                        "type": "PAGE_VIEW",
                                        "dataType": null,
                                        "options": {
                                          "page_key": {
                                            "value": "ru.pbs.module.staff.pages.task.TestDynamicTaskDataPage"
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
        },
        {
          "areaName": "data_area",
          "widgetConfig": {
            "type": "BLANK",
            "dataType": null,
            "options": null
          }
        }
      ],
      "viewType": "DYNAMIC_PAGE"
    }
  },
  "dataTypes": [],
  "typePageViewConfigs": [
    {
      "key": "ru.pbs.module.staff.pages.task.DynamicTaskHeaderForm",
      "viewConfig": {
        "type": "TestHeader",
        "idFieldName": "",
        "columnSize": "20% 80%",
        "columnsFlow": "left right",
        "rowSize": "max-content",
        "gridTemplate": [
          "header1 header2"
        ],
        "areasConfig": [
          {
            "areaName": "header1",
            "widgetConfig": {
              "dataType": null,
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
              "type": "LABEL"
            }
          },
          {
            "areaName": "header2",
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "TestInnerClass",
                    "idFieldName": "",
                    "columnSize": "auto auto",
                    "columnsFlow": "left left",
                    "rowSize": "max-content",
                    "gridTemplate": [
                      "test_inner_area_1 test_inner_area_2"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "test_inner_area_1",
                        "widgetConfig": {
                          "dataType": null,
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
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "test_inner_area_2",
                        "widgetConfig": {
                          "dataType": null,
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
      "key": "ru.pbs.module.staff.pages.task.TestDynamicTaskDataPage",
      "viewConfig": {
        "type": "TestReqData",
        "idFieldName": "",
        "columnSize": "auto",
        "columnsFlow": "left",
        "rowSize": "max-content max-content max-content",
        "gridTemplate": [
          "main_1",
          "main_2",
          "main_3"
        ],
        "areasConfig": [
          {
            "areaName": "main_1",
            "widgetConfig": {
              "dataType": null,
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
              "type": "LABEL"
            }
          },
          {
            "areaName": "main_2",
            "widgetConfig": {
              "dataType": null,
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
              "type": "LABEL"
            }
          },
          {
            "areaName": "main_3",
            "widgetConfig": {
              "dataType": null,
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
              "type": "LABEL"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "key": "ru.pbs.module.staff.pages.requriment.TestDynamicRequirementDataPage",
      "viewConfig": {
        "type": "TestReqData",
        "idFieldName": "",
        "columnSize": "auto",
        "columnsFlow": "left",
        "rowSize": "max-content max-content max-content",
        "gridTemplate": [
          "main_1",
          "main_2",
          "main_3"
        ],
        "areasConfig": [
          {
            "areaName": "main_1",
            "widgetConfig": {
              "dataType": null,
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
              "type": "LABEL"
            }
          },
          {
            "areaName": "main_2",
            "widgetConfig": {
              "dataType": null,
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
              "type": "LABEL"
            }
          },
          {
            "areaName": "main_3",
            "widgetConfig": {
              "dataType": null,
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
              "type": "LABEL"
            }
          }
        ],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "key": "ru.pbs.module.staff.pages.requriment.DynamicReqHeaderForm",
      "viewConfig": {
        "type": "TestHeader",
        "idFieldName": "",
        "columnSize": "40% 60%",
        "columnsFlow": "left right",
        "rowSize": "max-content",
        "gridTemplate": [
          "header1 header2"
        ],
        "areasConfig": [
          {
            "areaName": "header1",
            "widgetConfig": {
              "dataType": null,
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
              "type": "LABEL"
            }
          },
          {
            "areaName": "header2",
            "widgetConfig": {
              "options": {
                "innerGridConfig": {
                  "value": {
                    "type": "TestInnerClass",
                    "idFieldName": "",
                    "columnSize": "auto auto",
                    "columnsFlow": "left left",
                    "rowSize": "max-content",
                    "gridTemplate": [
                      "test_inner_area_1 test_inner_area_2"
                    ],
                    "areasConfig": [
                      {
                        "areaName": "test_inner_area_1",
                        "widgetConfig": {
                          "dataType": null,
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
                          "type": "LABEL"
                        }
                      },
                      {
                        "areaName": "test_inner_area_2",
                        "widgetConfig": {
                          "dataType": null,
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
