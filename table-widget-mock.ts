export const mock = {
  'actions': [
    {
      'actionName': 'get_task_data',
      'actionTitle': null,
      'type': 'NO_REQ',
      'configType': 'GET_DATA_REQUEST',
      'execConfig': {'pageUID': 'B76B2BECA6A86AD78F00973B7A342AB0'}
    }, {
      'actionName': 'get_product_data',
      'actionTitle': null,
      'type': 'NO_REQ',
      'configType': 'GET_DATA_REQUEST',
      'execConfig': {'pageUID': 'B76B2BECA6A86AD78F00973B7A342AB0'}
    }, {
      'actionName': 'get_requirement_data',
      'actionTitle': null,
      'type': 'NO_REQ',
      'configType': 'GET_DATA_REQUEST',
      'execConfig': {'pageUID': 'B76B2BECA6A86AD78F00973B7A342AB0'}
    }],
  'viewConfig': {
    'type': 'DynamicPageViewConfig',
    'config': {
      'type': null,
      'idFieldName': null,
      'columnSize': '20% 80%',
      'rowSize': '8% auto',
      'gridTemplate': ['header_area header_area', 'tab_tree_area data_area'],
      'areasConfig': [
        {
          'areaName': 'header_area',
          'widgetFlow': null,
          'widgetConfig': {
            'type': 'PAGE_VIEW',
            'dataType': null,
            'options': {'page_key': {'value': 'ProjectHeaderView'}, 'needsDataPreload': {'value': true}}
          }
        },
        {
          'areaName': 'data_area',
          'widgetFlow': null,
          'widgetConfig': {
            'type': 'TABLE',
            'dataType': null,
            'options': {
              'headerConfig': [{title: '1', width: '20%', serviceField: false}, {title: '2', width: 'auto', serviceField: false}, {title: '3', width: '20%', serviceField: true}]
            }
          }
        }, {
          'areaName': 'tab_tree_area', 'widgetFlow': null, 'widgetConfig': {
            'type': 'TABS', 'dataType': null, 'options': {
              'tabs': {
                'value': [{
                  'title': 'Требования',
                  'config': {
                    'widgetConfig': {
                      'type': 'TREE_LIST_VIEW',
                      'dataType': null,
                      'options': {
                        'get_data_path': {'value': 'get_requirement_data'},
                        'events': {
                          'value': [{
                            'eventType': 'ON_SELECT',
                            'dataType': 'UseCaseStepPageView',
                            'actions': [{
                              'actionType': 'DISPLAY_WIDGET',
                              'options': {
                                'targetArea': 'data_area',
                                'widgetConfig': {
                                  'type': 'PAGE_VIEW',
                                  'dataType': null,
                                  'options': {'page_key': {'value': 'UseCaseRequirementPageView'}, 'needsDataPreload': {'value': false}}
                                }
                              }
                            }]
                          }]
                        }
                      }
                    }
                  }
                }, {
                  'title': 'Задачи',
                  'config': {
                    'widgetConfig': {
                      'type': 'TREE_LIST_VIEW',
                      'dataType': null,
                      'options': {
                        'get_data_path': {'value': 'get_task_data'},
                        'events': {
                          'value': [{
                            'eventType': 'ON_SELECT',
                            'dataType': 'DevelopTaskPageView',
                            'actions': [{
                              'actionType': 'DISPLAY_WIDGET',
                              'options': {
                                'targetArea': 'data_area',
                                'widgetConfig': {
                                  'type': 'PAGE_VIEW',
                                  'dataType': null,
                                  'options': {'page_key': {'value': 'DevelopTaskPageView'}, 'needsDataPreload': {'value': false}}
                                }
                              }
                            }]
                          }, {
                            'eventType': 'ON_SELECT',
                            'dataType': 'TestTaskPageView',
                            'actions': [{
                              'actionType': 'DISPLAY_WIDGET',
                              'options': {
                                'targetArea': 'data_area',
                                'widgetConfig': {
                                  'type': 'PAGE_VIEW',
                                  'dataType': null,
                                  'options': {'page_key': {'value': 'TestTaskPageView'}, 'needsDataPreload': {'value': false}}
                                }
                              }
                            }]
                          }, {
                            'eventType': 'ON_SELECT',
                            'dataType': 'CommunicationTaskPageView',
                            'actions': [{
                              'actionType': 'DISPLAY_WIDGET',
                              'options': {
                                'targetArea': 'data_area',
                                'widgetConfig': {
                                  'type': 'PAGE_VIEW',
                                  'dataType': null,
                                  'options': {'page_key': {'value': 'CommunicationTaskPageView'}, 'needsDataPreload': {'value': false}}
                                }
                              }
                            }]
                          }]
                        }
                      }
                    }
                  }
                }, {
                  'title': 'Продукт',
                  'config': {
                    'widgetConfig': {
                      'type': 'TREE_LIST_VIEW',
                      'dataType': null,
                      'options': {
                        'get_data_path': {'value': 'get_product_data'},
                        'events': {
                          'value': [{
                            'eventType': 'ON_SELECT',
                            'dataType': 'ComponentPageView',
                            'actions': [{
                              'actionType': 'DISPLAY_WIDGET',
                              'options': {
                                'targetArea': 'data_area',
                                'widgetConfig': {
                                  'type': 'PAGE_VIEW',
                                  'dataType': null,
                                  'options': {'page_key': {'value': 'ComponentPageView'}, 'needsDataPreload': {'value': false}}
                                }
                              }
                            }]
                          }, {
                            'eventType': 'ON_SELECT',
                            'dataType': 'BuildPageView',
                            'actions': [{
                              'actionType': 'DISPLAY_WIDGET',
                              'options': {
                                'targetArea': 'data_area',
                                'widgetConfig': {
                                  'type': 'PAGE_VIEW',
                                  'dataType': null,
                                  'options': {'page_key': {'value': 'BuildPageView'}, 'needsDataPreload': {'value': false}}
                                }
                              }
                            }]
                          }]
                        }
                      }
                    }
                  }
                }]
              }
            }
          }
        }],
      'viewType': 'DYNAMIC_PAGE'
    }
  },
  'dataTypes': [],
  'typePageViewConfigs': [
    {
      'pageUID': 'B9E1CC1A05BE1DD82D78BA0F002F7543',
      'key': 'UseCaseStepPageView',
      'viewConfig': {
        'type': 'UseCaseStepPageViewData',
        'idFieldName': '',
        'columnSize': 'auto',
        'rowSize': 'max-content max-content',
        'gridTemplate': ['header', 'main'],
        'areasConfig': [],
        'viewType': 'DYNAMIC_PAGE'
      }
    }, {
      'pageUID': '0F11DA1740AF594B5B49F67657571BAF', 'key': 'BuildPageView', 'viewConfig': {
        'type': 'BuildPageViewData',
        'idFieldName': '',
        'columnSize': 'auto',
        'rowSize': '10% auto',
        'gridTemplate': ['data-area-header', 'data-area-main'],
        'areasConfig': [{
          'areaName': 'data-area-header',
          'widgetFlow': null,
          'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'DataAreaHeader',
                  'idFieldName': '',
                  'columnSize': '20% 20% auto',
                  'rowSize': 'auto',
                  'gridTemplate': ['title date version'],
                  'areasConfig': [{
                    'areaName': 'title',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'title'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'date',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'date'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'version',
                    'widgetFlow': 'right',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'version'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }, {
          'areaName': 'data-area-main', 'widgetFlow': null, 'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'DataAreaMain',
                  'idFieldName': '',
                  'columnSize': '15% auto',
                  'rowSize': '10% 10% 25% 10%',
                  'gridTemplate': ['release-label release-date', 'plane-label planned-date', 'description-label description-input', 'product-label product-name'],
                  'areasConfig': [{
                    'areaName': 'release-label',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'releaseLabel'},
                        'width': {'value': '80%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '80%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'release-date',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'options': {'fieldName': {'value': 'releaseDate'}, 'additionalProperties': {'value': {}}},
                      'dataType': 'LocalDate',
                      'type': 'INPUT_DATE'
                    }
                  }, {
                    'areaName': 'plane-label',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'planeLabel'},
                        'width': {'value': '80%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '80%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'planned-date',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'options': {'fieldName': {'value': 'planeDate'}, 'additionalProperties': {'value': {}}},
                      'dataType': 'LocalDate',
                      'type': 'INPUT_DATE'
                    }
                  }, {
                    'areaName': 'description-label',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'descriptionLabel'},
                        'width': {'value': '80%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '80%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'description-input',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'options': {
                        'fieldName': {'value': 'description'},
                        'width': {'value': '70%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '70%'}
                      }, 'dataType': 'String', 'type': 'TEXTAREA'
                    }
                  }, {
                    'areaName': 'product-label',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'productLabel'},
                        'width': {'value': '80%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '80%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'product-name',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'productName'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }],
        'viewType': 'DYNAMIC_PAGE'
      }
    }, {
      'pageUID': '8317F38C131B25E120C9A0CB72FE2FF9',
      'key': 'UseCaseRequirementPageView',
      'viewConfig': {
        'type': 'UseCaseRequirementPageViewData',
        'idFieldName': '',
        'columnSize': 'auto',
        'rowSize': 'auto',
        'gridTemplate': ['multi-page'],
        'areasConfig': [{'areaName': 'multi-page', 'widgetFlow': 'left', 'widgetConfig': null}],
        'viewType': 'DYNAMIC_PAGE'
      }
    }, {
      'pageUID': '876DC327A9A4AD4BB7DB84237E91947D',
      'key': 'ProjectHeaderView',
      'viewConfig': {
        'type': 'ProjectHeaderViewData',
        'idFieldName': '',
        'columnSize': '20% 65% 15%',
        'rowSize': '10%',
        'gridTemplate': ['project_name create_list status'],
        'areasConfig': [{
          'areaName': 'project_name',
          'widgetFlow': 'left',
          'widgetConfig': {
            'dataType': 'String',
            'options': {
              'fieldName': {'value': 'projectName'},
              'width': {'value': '100%'},
              'additionalProperties': {'value': {}},
              'height': {'value': '100%'}
            },
            'type': 'LABEL'
          }
        }, {
          'areaName': 'create_list',
          'widgetFlow': 'left',
          'widgetConfig': {
            'dataType': 'String',
            'options': {
              'fieldName': {'value': 'tempString'},
              'width': {'value': '100%'},
              'additionalProperties': {'value': {}},
              'height': {'value': '100%'}
            },
            'type': 'LABEL'
          }
        }, {
          'areaName': 'status',
          'widgetFlow': 'left',
          'widgetConfig': {
            'dataType': 'String',
            'options': {
              'fieldName': {'value': 'status'},
              'width': {'value': '100%'},
              'additionalProperties': {'value': {}},
              'height': {'value': '100%'}
            },
            'type': 'LABEL'
          }
        }],
        'viewType': 'DYNAMIC_PAGE'
      }
    }, {
      'pageUID': 'B68FEF999A27053F53A17A9ED2A47CEE', 'key': 'CommunicationTaskPageView', 'viewConfig': {
        'type': 'CommunicationTaskPageViewData',
        'idFieldName': '',
        'columnSize': 'auto',
        'rowSize': '10% auto',
        'gridTemplate': ['task-header', 'task-main'],
        'areasConfig': [{
          'areaName': 'task-header',
          'widgetFlow': null,
          'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'TaskHeader',
                  'idFieldName': '',
                  'columnSize': '55% 20% auto',
                  'rowSize': 'auto',
                  'gridTemplate': ['task-name status actions'],
                  'areasConfig': [{
                    'areaName': 'task-name',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'taskName'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'status',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'taskStatus'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'actions',
                    'widgetFlow': 'right',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'actions'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }, {
          'areaName': 'task-main', 'widgetFlow': null, 'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'TaskMain',
                  'idFieldName': '',
                  'columnSize': 'auto',
                  'rowSize': '6% 55% auto',
                  'gridTemplate': ['submain1', 'submain2', 'submain3'],
                  'areasConfig': [{
                    'areaName': 'submain1', 'widgetFlow': null, 'widgetConfig': {
                      'options': {
                        'innerGridConfig': {
                          'value': {
                            'type': 'SubMain1',
                            'idFieldName': '',
                            'columnSize': '10% 10% 10% auto',
                            'rowSize': 'auto',
                            'gridTemplate': ['submain1-1 submain1-2 submain1-3 submain1-4'],
                            'areasConfig': [{
                              'areaName': 'submain1-1',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain1-2',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain1-3',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain1-4',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }],
                            'viewType': 'DYNAMIC_PAGE'
                          }
                        }, 'additionalProperties': {'value': {}}
                      }, 'type': 'INNER_GRID', 'dataType': null
                    }
                  }, {
                    'areaName': 'submain2', 'widgetFlow': null, 'widgetConfig': {
                      'options': {
                        'innerGridConfig': {
                          'value': {
                            'type': 'SubMain2',
                            'idFieldName': '',
                            'columnSize': '60% auto',
                            'rowSize': 'auto',
                            'gridTemplate': ['submain2-1 submain2-2'],
                            'areasConfig': [{
                              'areaName': 'submain2-1', 'widgetFlow': null, 'widgetConfig': {
                                'options': {
                                  'innerGridConfig': {
                                    'value': {
                                      'type': 'SubMain21',
                                      'idFieldName': '',
                                      'columnSize': '20% auto',
                                      'rowSize': 'max-content 15% max-content max-content 15% max-content max-content',
                                      'gridTemplate': ['communication-type-label communication-type-select', 'periodicity-label periodicity', 'responsible-label responsible-select', 'participants-label participants-select', 'agenda-label agenda-text-area', 'connected-label connected', 'attachments-label attachments'],
                                      'areasConfig': [{
                                        'areaName': 'communication-type-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'communicationTypeLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'communication-type-select',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'communicationType'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'periodicity-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'periodicityLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'periodicity',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'fieldName': {'value': 'periodicity'},
                                            'width': {'value': '70%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '70%'}
                                          }, 'dataType': 'String', 'type': 'TEXTAREA'
                                        }
                                      }, {
                                        'areaName': 'responsible-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'responsibleLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'responsible-select',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'responsible'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'participants-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'participantsLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'participants-select',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'participants'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'agenda-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'agendaLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'agenda-text-area',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'agenda'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'connected-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'connectedLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'attachments-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'attachmentsLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }],
                                      'viewType': 'DYNAMIC_PAGE'
                                    }
                                  }, 'additionalProperties': {'value': {}}
                                }, 'type': 'INNER_GRID', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain2-2', 'widgetFlow': null, 'widgetConfig': {
                                'options': {
                                  'innerGridConfig': {
                                    'value': {
                                      'type': 'SubMain22',
                                      'idFieldName': '',
                                      'columnSize': '30% auto',
                                      'rowSize': 'max-content max-content',
                                      'gridTemplate': ['create-label create-date-input', 'workload-label workload-input'],
                                      'areasConfig': [{
                                        'areaName': 'create-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'createLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'create-date-input',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'fieldName': {'value': 'createDate'},
                                            'additionalProperties': {'value': {}}
                                          }, 'dataType': 'LocalDate', 'type': 'INPUT_DATE'
                                        }
                                      }, {
                                        'areaName': 'workload-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'workloadLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'workload-input',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'minValue': {'value': 4.9E-324},
                                            'fieldName': {'value': 'workload'},
                                            'maxValue': {'value': 1.7976931348623157E308},
                                            'width': {'value': '40%'},
                                            'additionalProperties': {'value': {}},
                                            'mask': {'value': ''},
                                            'height': {'value': '80%'}
                                          }, 'dataType': 'Number', 'type': 'INPUT_NUMBER'
                                        }
                                      }],
                                      'viewType': 'DYNAMIC_PAGE'
                                    }
                                  }, 'additionalProperties': {'value': {}}
                                }, 'type': 'INNER_GRID', 'dataType': null
                              }
                            }],
                            'viewType': 'DYNAMIC_PAGE'
                          }
                        }, 'additionalProperties': {'value': {}}
                      }, 'type': 'INNER_GRID', 'dataType': null
                    }
                  }, {
                    'areaName': 'submain2',
                    'widgetFlow': null,
                    'widgetConfig': {
                      'options': {
                        'innerGridConfig': {
                          'value': {
                            'type': 'SubMain3',
                            'idFieldName': '',
                            'columnSize': 'auto',
                            'rowSize': 'auto 10%',
                            'gridTemplate': ['submain3-1', 'submain3-2'],
                            'areasConfig': [],
                            'viewType': 'DYNAMIC_PAGE'
                          }
                        }, 'additionalProperties': {'value': {}}
                      }, 'type': 'INNER_GRID', 'dataType': null
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }],
        'viewType': 'DYNAMIC_PAGE'
      }
    }, {
      'pageUID': '73A8F0B215B6060840873EA50276BADB', 'key': 'ComponentPageView', 'viewConfig': {
        'type': 'ComponentPageViewData',
        'idFieldName': '',
        'columnSize': 'auto',
        'rowSize': '10% auto',
        'gridTemplate': ['component-header', 'component-main'],
        'areasConfig': [{
          'areaName': 'component-header', 'widgetFlow': null, 'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'ComponentHeader',
                  'idFieldName': '',
                  'columnSize': 'max-content max-content auto',
                  'rowSize': 'auto',
                  'gridTemplate': ['component-name version component-actions'],
                  'areasConfig': [{
                    'areaName': 'component-name',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'name'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'version',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'version'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'component-actions',
                    'widgetFlow': 'right',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'actions'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }, {
          'areaName': 'component-main', 'widgetFlow': null, 'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'ComponentMain',
                  'idFieldName': '',
                  'columnSize': '20% auto',
                  'rowSize': '10% 10% 10% 25% auto',
                  'gridTemplate': ['planning-date-label planning-data-input', 'include-component-label include-component-select', 'type-label type-select', 'description-label description-text-area', 'include-product-label include-product-table'],
                  'areasConfig': [{
                    'areaName': 'planning-date-label',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'planningDateLabel'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'planning-data-input',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'options': {'fieldName': {'value': 'planningDate'}, 'additionalProperties': {'value': {}}},
                      'dataType': 'LocalDate',
                      'type': 'INPUT_DATE'
                    }
                  }, {
                    'areaName': 'include-component-label',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'includeComponentLabel'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'include-component-select',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'options': {
                        'multiselect': {'value': false},
                        'endpoint': {'value': ''},
                        'fieldName': {'value': 'includeComponentSelect'},
                        'additionalProperties': {'value': {}}
                      }, 'dataType': 'class java.lang.String', 'type': 'SELECT'
                    }
                  }, {
                    'areaName': 'type-label',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'typeLabel'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'type-select',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'options': {
                        'multiselect': {'value': false},
                        'endpoint': {'value': ''},
                        'fieldName': {'value': 'typeSelect'},
                        'additionalProperties': {'value': {}}
                      }, 'dataType': 'class java.lang.String', 'type': 'SELECT'
                    }
                  }, {
                    'areaName': 'description-label',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'descriptionLabel'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'description-text-area',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'descriptionTextArea'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'include-product-label',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'includeProductLabel'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'include-product-table',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'includeProductTable'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }],
        'viewType': 'DYNAMIC_PAGE'
      }
    }, {
      'pageUID': 'FCA2D32B92FDCA96D38A8313FC0C79A9', 'key': 'DevelopTaskPageView', 'viewConfig': {
        'type': 'DevelopTaskPageViewData',
        'idFieldName': '',
        'columnSize': 'auto',
        'rowSize': '10% auto',
        'gridTemplate': ['task-header', 'task-main'],
        'areasConfig': [{
          'areaName': 'task-header',
          'widgetFlow': null,
          'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'TaskHeader',
                  'idFieldName': '',
                  'columnSize': '55% 20% auto',
                  'rowSize': 'auto',
                  'gridTemplate': ['task-name status actions'],
                  'areasConfig': [{
                    'areaName': 'task-name',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'taskName'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'status',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'taskStatus'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'actions',
                    'widgetFlow': 'right',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'actions'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }, {
          'areaName': 'task-main', 'widgetFlow': null, 'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'TaskMain',
                  'idFieldName': '',
                  'columnSize': 'auto',
                  'rowSize': '6% 55% auto',
                  'gridTemplate': ['submain1', 'submain2', 'submain3'],
                  'areasConfig': [{
                    'areaName': 'submain1', 'widgetFlow': null, 'widgetConfig': {
                      'options': {
                        'innerGridConfig': {
                          'value': {
                            'type': 'SubMain1',
                            'idFieldName': '',
                            'columnSize': '10% 10% 10% auto',
                            'rowSize': 'auto',
                            'gridTemplate': ['submain1-1 submain1-2 submain1-3 submain1-4'],
                            'areasConfig': [{
                              'areaName': 'submain1-1',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain1-2',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain1-3',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain1-4',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }],
                            'viewType': 'DYNAMIC_PAGE'
                          }
                        }, 'additionalProperties': {'value': {}}
                      }, 'type': 'INNER_GRID', 'dataType': null
                    }
                  }, {
                    'areaName': 'submain2', 'widgetFlow': null, 'widgetConfig': {
                      'options': {
                        'innerGridConfig': {
                          'value': {
                            'type': 'SubMain2',
                            'idFieldName': '',
                            'columnSize': '60% auto',
                            'rowSize': 'auto',
                            'gridTemplate': ['submain2-1 submain2-2'],
                            'areasConfig': [{
                              'areaName': 'submain2-1', 'widgetFlow': null, 'widgetConfig': {
                                'options': {
                                  'innerGridConfig': {
                                    'value': {
                                      'type': 'SubMain21',
                                      'idFieldName': '',
                                      'columnSize': '20% auto',
                                      'rowSize': 'max-content max-content max-content 15% max-content max-content',
                                      'gridTemplate': ['build-label build-select', 'specification-label specification-link', 'responsible-label responsible-select', 'description-label description-text-area', 'connected-label connected', 'attachments-label attachments'],
                                      'areasConfig': [{
                                        'areaName': 'build-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'buildLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'build-select',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'multiselect': {'value': false},
                                            'endpoint': {'value': ''},
                                            'fieldName': {'value': 'build'},
                                            'additionalProperties': {'value': {}}
                                          }, 'dataType': 'class java.lang.String', 'type': 'SELECT'
                                        }
                                      }, {
                                        'areaName': 'specification-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'specificationLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'specification-link',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': null,
                                          'options': {
                                            'fieldName': {'value': 'specification'},
                                            'label': {'value': 'Спецификация'},
                                            'additionalProperties': {'value': {}}
                                          },
                                          'type': 'LINK'
                                        }
                                      }, {
                                        'areaName': 'responsible-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'responsibleLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'responsible-select',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'responsible'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'description-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'descriptionLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'description-text-area',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'fieldName': {'value': 'description'},
                                            'width': {'value': '70%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '70%'}
                                          }, 'dataType': 'String', 'type': 'TEXTAREA'
                                        }
                                      }, {
                                        'areaName': 'connected-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'connectedLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'attachments-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'attachmentsLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }],
                                      'viewType': 'DYNAMIC_PAGE'
                                    }
                                  }, 'additionalProperties': {'value': {}}
                                }, 'type': 'INNER_GRID', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain2-2', 'widgetFlow': null, 'widgetConfig': {
                                'options': {
                                  'innerGridConfig': {
                                    'value': {
                                      'type': 'SubMain22',
                                      'idFieldName': '',
                                      'columnSize': '30% auto',
                                      'rowSize': 'max-content max-content max-content',
                                      'gridTemplate': ['create-label create-date-input', 'deadline-label deadline-input', 'workload-label workload-input'],
                                      'areasConfig': [{
                                        'areaName': 'create-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'createLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'create-date-input',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'fieldName': {'value': 'createDate'},
                                            'additionalProperties': {'value': {}}
                                          }, 'dataType': 'LocalDate', 'type': 'INPUT_DATE'
                                        }
                                      }, {
                                        'areaName': 'deadline-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'deadlineLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'deadline-input',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'fieldName': {'value': 'deadlineDate'},
                                            'additionalProperties': {'value': {}}
                                          }, 'dataType': 'LocalDate', 'type': 'INPUT_DATE'
                                        }
                                      }, {
                                        'areaName': 'workload-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'workloadLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'workload-input',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'minValue': {'value': 4.9E-324},
                                            'fieldName': {'value': 'workload'},
                                            'maxValue': {'value': 1.7976931348623157E308},
                                            'width': {'value': '40%'},
                                            'additionalProperties': {'value': {}},
                                            'mask': {'value': ''},
                                            'height': {'value': '80%'}
                                          }, 'dataType': 'Number', 'type': 'INPUT_NUMBER'
                                        }
                                      }],
                                      'viewType': 'DYNAMIC_PAGE'
                                    }
                                  }, 'additionalProperties': {'value': {}}
                                }, 'type': 'INNER_GRID', 'dataType': null
                              }
                            }],
                            'viewType': 'DYNAMIC_PAGE'
                          }
                        }, 'additionalProperties': {'value': {}}
                      }, 'type': 'INNER_GRID', 'dataType': null
                    }
                  }, {
                    'areaName': 'submain2',
                    'widgetFlow': null,
                    'widgetConfig': {
                      'options': {
                        'innerGridConfig': {
                          'value': {
                            'type': 'SubMain3',
                            'idFieldName': '',
                            'columnSize': 'auto',
                            'rowSize': 'auto 10%',
                            'gridTemplate': ['submain3-1', 'submain3-2'],
                            'areasConfig': [],
                            'viewType': 'DYNAMIC_PAGE'
                          }
                        }, 'additionalProperties': {'value': {}}
                      }, 'type': 'INNER_GRID', 'dataType': null
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }],
        'viewType': 'DYNAMIC_PAGE'
      }
    }, {
      'pageUID': '0641584FE30EFB64245BC3AF94A92BC2', 'key': 'TestTaskPageView', 'viewConfig': {
        'type': 'TestTaskPageViewData',
        'idFieldName': '',
        'columnSize': 'auto',
        'rowSize': '10% auto',
        'gridTemplate': ['task-header', 'task-main'],
        'areasConfig': [{
          'areaName': 'task-header',
          'widgetFlow': null,
          'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'TaskHeader',
                  'idFieldName': '',
                  'columnSize': '55% 20% auto',
                  'rowSize': 'auto',
                  'gridTemplate': ['task-name status actions'],
                  'areasConfig': [{
                    'areaName': 'task-name',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'taskName'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'status',
                    'widgetFlow': 'left',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'taskStatus'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }, {
                    'areaName': 'actions',
                    'widgetFlow': 'right',
                    'widgetConfig': {
                      'dataType': 'String',
                      'options': {
                        'fieldName': {'value': 'actions'},
                        'width': {'value': '100%'},
                        'additionalProperties': {'value': {}},
                        'height': {'value': '100%'}
                      },
                      'type': 'LABEL'
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }, {
          'areaName': 'task-main', 'widgetFlow': null, 'widgetConfig': {
            'options': {
              'innerGridConfig': {
                'value': {
                  'type': 'TaskMain',
                  'idFieldName': '',
                  'columnSize': 'auto',
                  'rowSize': '6% 55% auto',
                  'gridTemplate': ['submain1', 'submain2', 'submain3'],
                  'areasConfig': [{
                    'areaName': 'submain1', 'widgetFlow': null, 'widgetConfig': {
                      'options': {
                        'innerGridConfig': {
                          'value': {
                            'type': 'SubMain1',
                            'idFieldName': '',
                            'columnSize': '10% 10% 10% auto',
                            'rowSize': 'auto',
                            'gridTemplate': ['submain1-1 submain1-2 submain1-3 submain1-4'],
                            'areasConfig': [{
                              'areaName': 'submain1-1',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain1-2',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain1-3',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain1-4',
                              'widgetFlow': 'left',
                              'widgetConfig': {
                                'options': {
                                  'width': {'value': 'max-content'},
                                  'additionalProperties': {'value': {}},
                                  'height': {'value': 'max-content'}
                                }, 'type': 'BUTTON', 'dataType': null
                              }
                            }],
                            'viewType': 'DYNAMIC_PAGE'
                          }
                        }, 'additionalProperties': {'value': {}}
                      }, 'type': 'INNER_GRID', 'dataType': null
                    }
                  }, {
                    'areaName': 'submain2', 'widgetFlow': null, 'widgetConfig': {
                      'options': {
                        'innerGridConfig': {
                          'value': {
                            'type': 'SubMain2',
                            'idFieldName': '',
                            'columnSize': '60% auto',
                            'rowSize': 'auto',
                            'gridTemplate': ['submain2-1 submain2-2'],
                            'areasConfig': [{
                              'areaName': 'submain2-1', 'widgetFlow': null, 'widgetConfig': {
                                'options': {
                                  'innerGridConfig': {
                                    'value': {
                                      'type': 'SubMain21',
                                      'idFieldName': '',
                                      'columnSize': '20% auto',
                                      'rowSize': 'max-content 20% max-content max-content max-content max-content',
                                      'gridTemplate': ['responsible-label responsible-select', 'description-label description-text-area', 'use-case-label use-case-link', 'build-label build-link', 'connected-label connected', 'attachments-label attachments'],
                                      'areasConfig': [{
                                        'areaName': 'responsible-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'respLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'responsible-select',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'responsible'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'description-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'descriptionLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'description-text-area',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'fieldName': {'value': 'description'},
                                            'width': {'value': '70%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '70%'}
                                          }, 'dataType': 'String', 'type': 'TEXTAREA'
                                        }
                                      }, {
                                        'areaName': 'use-case-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'useCaseLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'use-case-link',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': null,
                                          'options': {
                                            'fieldName': {'value': 'useCaseLink'},
                                            'label': {'value': 'Сценарий использования'},
                                            'additionalProperties': {'value': {}}
                                          },
                                          'type': 'LINK'
                                        }
                                      }, {
                                        'areaName': 'build-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'buildLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'build-link',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': null,
                                          'options': {
                                            'fieldName': {'value': 'buildLink'},
                                            'label': {'value': 'Сценарий использования'},
                                            'additionalProperties': {'value': {}}
                                          },
                                          'type': 'LINK'
                                        }
                                      }, {
                                        'areaName': 'connected-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'connectedLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'attachments-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'attachmentsLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }],
                                      'viewType': 'DYNAMIC_PAGE'
                                    }
                                  }, 'additionalProperties': {'value': {}}
                                }, 'type': 'INNER_GRID', 'dataType': null
                              }
                            }, {
                              'areaName': 'submain2-2', 'widgetFlow': null, 'widgetConfig': {
                                'options': {
                                  'innerGridConfig': {
                                    'value': {
                                      'type': 'SubMain22',
                                      'idFieldName': '',
                                      'columnSize': '30% auto',
                                      'rowSize': 'max-content max-content max-content',
                                      'gridTemplate': ['create-label create-date-input', 'deadline-label deadline-input', 'workload-label workload-input'],
                                      'areasConfig': [{
                                        'areaName': 'create-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'createLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'create-date-input',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'fieldName': {'value': 'createDate'},
                                            'additionalProperties': {'value': {}}
                                          }, 'dataType': 'LocalDate', 'type': 'INPUT_DATE'
                                        }
                                      }, {
                                        'areaName': 'deadline-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'deadlineLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'deadline-input',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'fieldName': {'value': 'deadlineDate'},
                                            'additionalProperties': {'value': {}}
                                          }, 'dataType': 'LocalDate', 'type': 'INPUT_DATE'
                                        }
                                      }, {
                                        'areaName': 'workload-label',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'dataType': 'String',
                                          'options': {
                                            'fieldName': {'value': 'workloadLabel'},
                                            'width': {'value': '100%'},
                                            'additionalProperties': {'value': {}},
                                            'height': {'value': '100%'}
                                          },
                                          'type': 'LABEL'
                                        }
                                      }, {
                                        'areaName': 'workload-input',
                                        'widgetFlow': 'left',
                                        'widgetConfig': {
                                          'options': {
                                            'minValue': {'value': 4.9E-324},
                                            'fieldName': {'value': 'workload'},
                                            'maxValue': {'value': 1.7976931348623157E308},
                                            'width': {'value': '40%'},
                                            'additionalProperties': {'value': {}},
                                            'mask': {'value': ''},
                                            'height': {'value': '80%'}
                                          }, 'dataType': 'Number', 'type': 'INPUT_NUMBER'
                                        }
                                      }],
                                      'viewType': 'DYNAMIC_PAGE'
                                    }
                                  }, 'additionalProperties': {'value': {}}
                                }, 'type': 'INNER_GRID', 'dataType': null
                              }
                            }],
                            'viewType': 'DYNAMIC_PAGE'
                          }
                        }, 'additionalProperties': {'value': {}}
                      }, 'type': 'INNER_GRID', 'dataType': null
                    }
                  }, {
                    'areaName': 'submain2',
                    'widgetFlow': null,
                    'widgetConfig': {
                      'options': {
                        'innerGridConfig': {
                          'value': {
                            'type': 'SubMain3',
                            'idFieldName': '',
                            'columnSize': 'auto',
                            'rowSize': 'auto 10%',
                            'gridTemplate': ['submain3-1', 'submain3-2'],
                            'areasConfig': [],
                            'viewType': 'DYNAMIC_PAGE'
                          }
                        }, 'additionalProperties': {'value': {}}
                      }, 'type': 'INNER_GRID', 'dataType': null
                    }
                  }],
                  'viewType': 'DYNAMIC_PAGE'
                }
              }, 'additionalProperties': {'value': {}}
            }, 'type': 'INNER_GRID', 'dataType': null
          }
        }],
        'viewType': 'DYNAMIC_PAGE'
      }
    }]
};
