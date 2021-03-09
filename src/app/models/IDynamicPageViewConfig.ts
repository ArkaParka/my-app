import {IAreasConfig} from "../dynamic-page-view/interfaces/IAreasConfig";

export interface IDynamicPageViewConfig {
  areasConfig: IAreasConfig[];
  columnSize: string;
  rowSize: string;
  gridTemplate: string[];
  viewType: string;
  columnsFlow?: string;
  type?: string;
  idFieldName?: string;
}
