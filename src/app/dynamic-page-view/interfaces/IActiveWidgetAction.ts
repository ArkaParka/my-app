export interface IActiveWidgetAction {
  actionType: string;
  options: {
    formKey: string;
    pageUID: string;
    actionKey: string;
  };
}
