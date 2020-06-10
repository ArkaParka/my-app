export interface Actions {
  actionName: string,
  actionTitle: string,
  type: Type,
  configType: string,
  execConfig: {
    formActionType?: FormActionTypes,
    formKey?: string,
    confirmMessage?: string
  }
}

enum Type {
  NO_REQ,
  REQ_ONE,
  REQ_MULTY
}

export enum FormActionTypes {
  CREATE='CREATE',
  UPDATE='UPDATE',
  DELETE='DELETE'
}
