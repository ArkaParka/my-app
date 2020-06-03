export interface Actions {
    actionName: string,
    actionTitle: string,
    type: Type,
    execConfig: {
        formKey?: string,
        confirmMessage?: string
    }
}

enum Type {
    NO_REQ,
    REQ_ONE,
    REQ_MULTY
}
