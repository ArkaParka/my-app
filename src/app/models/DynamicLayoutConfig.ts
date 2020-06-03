import {GridItem} from "./GridItem";

export class DynamicLayoutConfig {
  breakPoint: string;
  areaNames: any;
  gridItems: GridItem[];
  gridTemplate: string[];

  constructor() {
    this.gridTemplate = new Array<string>();
  }
}
