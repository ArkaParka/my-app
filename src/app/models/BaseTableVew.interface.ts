export interface BaseTableVew {
    columnDefs: object[],
    pagination?: boolean,
    paginationAutoPageSize?: boolean,
    rowSelection: string,
    suppressDragLeaveHidesColumns?: boolean,
    rowHeight?: number,
    suppressMovableColumns?: boolean
}
