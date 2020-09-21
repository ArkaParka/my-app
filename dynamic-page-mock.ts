export const mock = {
  "actions": [
    {
      "actionName": "get_requirement_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {"pageUID": "34CC3A34C8F6FD2C310CA88A3DC2CA7A"}
    },
    {
      "actionName": "get_task_data",
      "actionTitle": null,
      "type": "NO_REQ",
      "configType": "GET_DATA_REQUEST",
      "execConfig": {"pageUID": "34CC3A34C8F6FD2C310CA88A3DC2CA7A"}
    }
  ],
  "viewConfig": {
    "type": "DynamicPageViewConfig", "config": {
      "type": null,
      "idFieldName": null,
      "columnSize": "20% 80%",
      "columnsFlow": null,
      "rowSize": "max-content auto",
      "gridTemplate": ["tab_tree header_area", "tab_tree data_area"],
      "areasConfig": [{
        "areaName": "header_area",
        "widgetFlow": null,
        "widgetConfig": {"type": "BLANK", "options": null, "dataType": null}
      }, {
        "areaName": "tab_tree", "widgetFlow": null, "widgetConfig": {
          "type": "TABS", "options": {
            "tabs": {
              "value": [
                {
                  "title": "Требования",
                  "config": {
                    "widgetConfig": {
                      "type": "TREE_LIST_VIEW",
                      "options": {
                        "get_data_path": {"value": "get_requirement_data"},
                        "events": {
                          "value": [{
                            "eventType": "ON_SELECT",
                            "dataType": "ru.pbs.module.staff.pages.model.PersonDataRow",
                            "actions": [
                              {
                                "actionType": "DISPLAY_WIDGET",
                                "options": {
                                  "targetArea": "header_area",
                                  "widgetConfig": {
                                    "type": "PAGE_VIEW",
                                    "options": {"page_key": {"value": "ru.pbs.module.staff.pages.requrimenDynamicReqHeaderFormt."}},
                                    "dataType": null
                                  }
                                }
                              }, {
                                "actionType": "DISPLAY_WIDGET",
                                "options": {
                                  "targetArea": "data_area",
                                  "widgetConfig": {
                                    "type": "PAGE_VIEW",
                                    "options": {"page_key": {"value": "ru.pbs.module.staff.pages.requriment.TestDynamicRequirementDataPage"}},
                                    "dataType": null
                                  }
                                }
                              }]
                          }]
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
                        "get_data_path": {"value": "get_task_data"},
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
                                      "options": {"page_key": {"value": "ru.pbs.module.staff.pages.task.DynamicTaskHeaderForm"}},
                                      "dataType": null
                                    }
                                  }
                                }, {
                                  "actionType": "DISPLAY_WIDGET",
                                  "options": {
                                    "targetArea": "data_area",
                                    "widgetConfig": {
                                      "type": "PAGE_VIEW",
                                      "options": {"page_key": {"value": "ru.pbs.module.staff.pages.task.TestDynamicTaskDataPage"}},
                                      "dataType": null
                                    }
                                  }
                                }]
                            },
                            {
                              "eventType": "ON_SELECT",
                              "dataType": "ru.pbs.module.staff.pages.model.jydhfdghfj",
                              "actions": [
                                {
                                  "actionType": "DISPLAY_WIDGET",
                                  "options": {
                                    "targetArea": "header_area",
                                    "widgetConfig": {
                                      "type": "PAGE_VIEW",
                                      "options": {"page_key": {"value": "ru.pbs.module.staff.pages.task.DynamicTaskHeaderForm"}},
                                      "dataType": null
                                    }
                                  }
                                }, {
                                  "actionType": "DISPLAY_WIDGET",
                                  "options": {
                                    "targetArea": "data_area",
                                    "widgetConfig": {
                                      "type": "PAGE_VIEW",
                                      "options": {"page_key": {"value": "ru.pbs.module.staff.pages.task.TestDynamicTaskDataPage"}},
                                      "dataType": null
                                    }
                                  }
                                }]
                            }
                          ]
                        }
                      },
                      "dataType": null
                    }
                  }
                }]
            }
          }, "dataType": null
        }
      }, {
        "areaName": "data_area",
        "widgetFlow": null,
        "widgetConfig": {"type": "BLANK", "options": null, "dataType": null}
      }],
      "viewType": "DYNAMIC_PAGE"
    }
  },
  "dataTypes": [],
  "typePageViewConfigs": [
    {
      "pageUID": "0BE73EDDD8F6ED003D1D3A8F36AC8CC4",
      "key": "ru.pbs.module.staff.pages.task.TestDynamicTaskDataPage",
      "viewConfig": {
        "type": "TestReqData",
        "idFieldName": "",
        "columnSize": "auto",
        "columnsFlow": "left",
        "rowSize": "max-content max-content max-content",
        "gridTemplate": ["main_1", "main_2", "main_3"],
        "areasConfig": [{
          "areaName": "main_1",
          "widgetFlow": "auto",
          "widgetConfig": {
            "dataType": null,
            "options": {
              "fieldName": {"value": "field1"},
              "width": {"value": "max-content"},
              "additionalProperties": {"value": {}},
              "height": {"value": "max-content"}
            },
            "type": "LABEL"
          }
        }, {
          "areaName": "main_2",
          "widgetFlow": "auto",
          "widgetConfig": {
            "dataType": null,
            "options": {
              "fieldName": {"value": "field2"},
              "width": {"value": "max-content"},
              "additionalProperties": {"value": {}},
              "height": {"value": "max-content"}
            },
            "type": "LABEL"
          }
        }, {
          "areaName": "main_3",
          "widgetFlow": "auto",
          "widgetConfig": {
            "dataType": null,
            "options": {
              "fieldName": {"value": "field3"},
              "width": {"value": "max-content"},
              "additionalProperties": {"value": {}},
              "height": {"value": "max-content"}
            },
            "type": "LABEL"
          }
        }],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "4CBDBD8DE0F94600132C2A5CCB16EDB6",
      "key": "ru.pbs.module.staff.pages.task.DynamicTaskHeaderForm",
      "viewConfig": {
        "type": "TestHeader",
        "idFieldName": "",
        "columnSize": "40% 60%",
        "columnsFlow": "left right",
        "rowSize": "max-content",
        "gridTemplate": ["header1 header2"],
        "areasConfig": [{
          "areaName": "header1",
          "widgetFlow": "left",
          "widgetConfig": {
            "dataType": null,
            "options": {
              "fieldName": {"value": "name"},
              "width": {"value": "max-content"},
              "additionalProperties": {"value": {}},
              "height": {"value": "max-content"}
            },
            "type": "LABEL"
          }
        }, {
          "areaName": "header2",
          "widgetFlow": "auto",
          "widgetConfig": {
            "options": {
              "innerGridConfig": {
                "value": {
                  "type": "TestInnerClass",
                  "idFieldName": "",
                  "columnSize": "auto auto",
                  "columnsFlow": "left left",
                  "rowSize": "max-content",
                  "gridTemplate": ["test_inner_area_1 test_inner_area_2"],
                  "areasConfig": [{
                    "areaName": "test_inner_area_1",
                    "widgetFlow": "auto",
                    "widgetConfig": {
                      "dataType": null,
                      "options": {
                        "fieldName": {"value": "version"},
                        "width": {"value": "max-content"},
                        "additionalProperties": {"value": {}},
                        "height": {"value": "max-content"}
                      },
                      "type": "LABEL"
                    }
                  }, {
                    "areaName": "test_inner_area_2",
                    "widgetFlow": "auto",
                    "widgetConfig": {
                      "dataType": null,
                      "options": {
                        "fieldName": {"value": "someField"},
                        "width": {"value": "max-content"},
                        "additionalProperties": {"value": {}},
                        "height": {"value": "max-content"}
                      },
                      "type": "LABEL"
                    }
                  }],
                  "viewType": "DYNAMIC_PAGE"
                }
              }, "additionalProperties": {"value": {}}
            }, "type": "INNER_GRID", "dataType": null
          }
        }],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "C423E087E3E0B97F92449CCC584B83E7",
      "key": "ru.pbs.module.staff.pages.requriment.TestDynamicRequirementDataPage",
      "viewConfig": {
        "type": "TestReqData",
        "idFieldName": "",
        "columnSize": "auto",
        "columnsFlow": "left",
        "rowSize": "max-content max-content max-content",
        "gridTemplate": ["main_1", "main_2", "main_3"],
        "areasConfig": [{
          "areaName": "main_1",
          "widgetFlow": "auto",
          "widgetConfig": {
            "dataType": null,
            "options": {
              "fieldName": {"value": "field1"},
              "width": {"value": "max-content"},
              "additionalProperties": {"value": {}},
              "height": {"value": "max-content"}
            },
            "type": "LABEL"
          }
        }, {
          "areaName": "main_2",
          "widgetFlow": "auto",
          "widgetConfig": {
            "dataType": null,
            "options": {
              "fieldName": {"value": "field2"},
              "width": {"value": "max-content"},
              "additionalProperties": {"value": {}},
              "height": {"value": "max-content"}
            },
            "type": "LABEL"
          }
        }, {
          "areaName": "main_3",
          "widgetFlow": "auto",
          "widgetConfig": {
            "dataType": null,
            "options": {
              "fieldName": {"value": "field3"},
              "width": {"value": "max-content"},
              "additionalProperties": {"value": {}},
              "height": {"value": "max-content"}
            },
            "type": "LABEL"
          }
        }],
        "viewType": "DYNAMIC_PAGE"
      }
    },
    {
      "pageUID": "85C5DB540DA3D4ADA9F187B45E1147FC",
      "key": "ru.pbs.module.staff.pages.requriment.DynamicReqHeaderForm",
      "viewConfig": {
        "type": "TestHeader",
        "idFieldName": "",
        "columnSize": "40% 60%",
        "columnsFlow": "left right",
        "rowSize": "max-content",
        "gridTemplate": ["header1 header2"],
        "areasConfig": [{
          "areaName": "header1",
          "widgetFlow": "left",
          "widgetConfig": {
            "dataType": null,
            "options": {
              "fieldName": {"value": "name"},
              "width": {"value": "max-content"},
              "additionalProperties": {"value": {}},
              "height": {"value": "max-content"}
            },
            "type": "LABEL"
          }
        }, {
          "areaName": "header2",
          "widgetFlow": "auto",
          "widgetConfig": {
            "options": {
              "innerGridConfig": {
                "value": {
                  "type": "TestInnerClass",
                  "idFieldName": "",
                  "columnSize": "auto auto",
                  "columnsFlow": "left left",
                  "rowSize": "max-content",
                  "gridTemplate": ["test_inner_area_1 test_inner_area_2"],
                  "areasConfig": [{
                    "areaName": "test_inner_area_1",
                    "widgetFlow": "auto",
                    "widgetConfig": {
                      "dataType": null,
                      "options": {
                        "fieldName": {"value": "version"},
                        "width": {"value": "max-content"},
                        "additionalProperties": {"value": {}},
                        "height": {"value": "max-content"}
                      },
                      "type": "LABEL"
                    }
                  }, {
                    "areaName": "test_inner_area_2",
                    "widgetFlow": "auto",
                    "widgetConfig": {
                      "dataType": null,
                      "options": {
                        "fieldName": {"value": "someField"},
                        "width": {"value": "max-content"},
                        "additionalProperties": {"value": {}},
                        "height": {"value": "max-content"}
                      },
                      "type": "LABEL"
                    }
                  }],
                  "viewType": "DYNAMIC_PAGE"
                }
              }, "additionalProperties": {"value": {}}
            }, "type": "INNER_GRID", "dataType": null
          }
        }],
        "viewType": "DYNAMIC_PAGE"
      }
    }]
}
