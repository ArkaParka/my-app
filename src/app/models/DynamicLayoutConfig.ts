import {GridArea} from "./GridArea";

export class DynamicLayoutConfig {
  breakPoint: string;
  gridAreas: GridArea[];
  gridTemplate: string[];
  columnSize: string;
  rowSize?: string;

  constructor() {
    this.gridTemplate = new Array<string>();
    this.gridAreas = new Array<GridArea>();
  }
}
