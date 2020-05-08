export interface ModuleMenuFormConfig {
    actions: Actions[],
    viewConfig: ViewConfiguration,
    dataTypes: DataTypes   
}

export interface Actions {
    actionName: string,
    actionTitle: string,
    type: Type,
    dataType: string,
    formKey: string
}

enum Type {
    NO_REQ,
    REQ_ONE,
    REQ_MULTY
}

export interface ViewConfiguration {
    type: string,
    config: BaseTableVew
}

export interface BaseTableVew {
    columnDefs: object[],
    pagination?: boolean,
    paginationAutoPageSize?: boolean,
    rowSelection: string,
    suppressDragLeaveHidesColumns?: boolean,
    rowHeight?: number,
    suppressMovableColumns?: boolean
}

export interface DataTypes {
    typeName: string,
    schema: object,
    forms: {
        formKey: string,
        schema: object[]
    }
}

export interface ModuleMenuFormConfigForFront {
    dataFromActions: object[],
    dataFromViewConfig: BaseTableVew,
    dataFromDataTypes: object[]
}

export interface ModuleData {
    data: {
        type: string,
        data: MData[]
    },
    pageInfo: {
        pageIndex: number,
        pageSize: number,
        totalSize: number
    }
}

export interface MData {
    id: number,
    divisionName: string,
    supervisor: string
    numberOfEmployees: string
}

export interface Modules {
    moduleName: string,
    displayName: string
}
