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
      };
      dataType: string;
    };
  };
}
