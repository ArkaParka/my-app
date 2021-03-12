export interface IWidgetEventAction {
  actionType: string;
  options: {
    targetArea: string;
    widgetConfig: {
      type: string;
      options: {
        page_key: {
          value: string;
        };
        page_id: {
          value: string;
        };
      };
      dataType: string;
    };
  };
}
