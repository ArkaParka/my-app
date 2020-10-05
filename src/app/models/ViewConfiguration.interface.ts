import { GridOptions } from 'ag-grid-community';
import {IDynamicPageViewConfig} from "./IDynamicPageViewConfig";

export interface IViewConfig {
    type: string,
    config: GridOptions | IDynamicPageViewConfig
}
