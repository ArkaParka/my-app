export interface IActiveWidgetAction {
  actionType: string;
  modalData?: any[];
  options: {
    formKey: string;
    pageUID: string;
    actionKey: string;
  };
}
