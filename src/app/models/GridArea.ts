import {GridAreaItem} from "./GridAreaItem";

export class GridArea {
  areaName: string;
  areaTemplate: string[];
  areaColumnSize: string;
  areaRowSize?: string;
  areaItems: GridAreaItem[];

  constructor() {
    this.areaItems = new Array<GridAreaItem>();
    this.areaTemplate = new Array<string>();
  }
}
