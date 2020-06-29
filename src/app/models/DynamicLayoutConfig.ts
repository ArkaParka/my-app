import {GridArea} from "./GridArea";

export class DynamicLayoutConfig {
  areas: string[];
  columnSize: string;
  gridTemplate: string[];

  constructor() {
    this.gridTemplate = new Array<string>();
    this.areas = new Array<string>();
  }
}
