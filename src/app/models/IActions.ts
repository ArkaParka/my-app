export interface IActions {
  actionName: string,
  actionTitle: string,
  type: Type,
  configType: EActionConfigType,
  execConfig: {
    pageUID?: string,
    formActionType?: EFormActionType,
    formKey?: string,
    confirmMessage?: string
  }
}

enum Type {
  NO_REQ,
  REQ_ONE,
  REQ_MULTY
}

export enum EFormActionType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

export enum EActionConfigType {
  GET_DATA_REQUEST = 'GET_DATA_REQUEST',
  FORM_ACTION = 'FormAction',
}
