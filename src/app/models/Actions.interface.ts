export interface Actions {
  actionName: string,
  actionTitle: string,
  type: Type,
  configType: string,
  execConfig: {
    formActionType?: string,
    formKey?: string,
    confirmMessage?: string
  }
}

enum Type {
  NO_REQ,
  REQ_ONE,
  REQ_MULTY
}
