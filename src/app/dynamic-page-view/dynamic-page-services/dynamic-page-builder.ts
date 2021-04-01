import {IDynamicPageViewConfig} from "../../models/IDynamicPageViewConfig";
import {IAreasConfig} from "../interfaces/IAreasConfig";
import * as _ from 'lodash'
import {lcm} from "mathjs";

export module DynamicPageBuilder {
  export const generateFlatPageConfig = (pageConfig: IDynamicPageViewConfig): IDynamicPageViewConfig => {
    let flattenedPageConfig = Object.assign({}, pageConfig);
    let flattenedAreas: IAreasConfig[] = [];
    let tmpAreas = getChildTemplates(flattenedPageConfig);
    let finalFlatLevel: string[] = flattenedPageConfig.gridTemplate;

    // console.log("initial config", _.cloneDeep(pageConfig))

    if (tmpAreas.length) {

      flattenedAreas = tmpAreas
        .map(area => getFlatLevelConfig(area))
        .flat()
        .map((area) => area.areas)
        .flat()
        .filter(area => !area.widgetConfig?.options?.innerGridConfig?.value);
      // console.log("new areas", _.cloneDeep(flattenedAreas))

      // console.log("levels", _.cloneDeep(tmpAreas))

      let flatLevels: ILevelTemplate[] = tmpAreas.map(area => getFlatLevelConfig(area))
        .flat()
        .sort((lvl1, lvl2) => lvl1.level - lvl2.level);

      const maxLevel = Math.max(...flatLevels.map(level => level.level));
      // console.log("flat levels", flatLevels)
      // console.log("max level", maxLevel)

      for (let depth = maxLevel - 1; depth !== -1; depth--) {
        // console.log("level", depth)
        let parentAreas: ILevelTemplate[] = flatLevels
          .filter(area => area.level === depth)
          .filter(area => area.childTemplates.length);

        parentAreas.forEach((parent: ILevelTemplate) => {
          for (let p_i = 0; p_i < parent.ownTemplate.length;) {
            let row_children: ILevelTemplate[] = [];

            for (let p_j = 0; p_j < parent.ownTemplate[0].length; p_j++) {
              let child = parent.childTemplates.find(child => child.areaName === parent.ownTemplate[p_i][p_j]);
              if (child) row_children.push(child);
            }

            if (row_children.length) {
              const expandValue = lcm(1, ...row_children.map(child => child.ownTemplate.length));

              row_children.forEach((row, index, array) =>
                array[index].ownTemplate = extendGridTemplate(array[index].ownTemplate, ExtendDirection.ROW, expandValue));

              const parentRow = parent.ownTemplate[p_i];
              const tmpParentArr = [];

              for (let index = 0; index < expandValue; index++) tmpParentArr.push(parentRow);
              parent.ownTemplate.splice(p_i, 1, ...tmpParentArr);
              p_i += expandValue;
            } else p_i += 1;
          }

          for (let p_j = 0; p_j < parent.ownTemplate[0].length;) {
            let column_children: ILevelTemplate[] = [];
            for (let p_i = 0; p_i < parent.ownTemplate.length; p_i++) {
              let child = parent.childTemplates.find(child => child.areaName === parent.ownTemplate[p_i][p_j]);
              if (child) column_children.push(child);
            }

            column_children = _.uniqBy(column_children, "areaName");
            if (column_children.length) {
              const expandValue = lcm(1, ...column_children.map(child => child.ownTemplate[0].length));

              column_children.forEach((column, index, array) =>
                array[index].ownTemplate = extendGridTemplate(array[index].ownTemplate, ExtendDirection.COLUMN, expandValue));

              for (let p_i = 0; p_i < parent.ownTemplate.length; p_i++) {
                const parentColumn = parent.ownTemplate[p_i][p_j];
                const tmpParentArr = [];

                for (let index = 0; index < expandValue; index++) tmpParentArr.push(parentColumn);
                let row = _.cloneDeep(parent.ownTemplate[p_i]);

                row.splice(p_j, 1, ...tmpParentArr);
                parent.ownTemplate[p_i] = row;
              }
              p_j += expandValue;
            } else p_j += 1;
          }

          // console.log("parent before change", _.cloneDeep(parent))
          parent.childTemplates.forEach(child => {
            parent.ownTemplate = replaceNodesInTemplate(parent.ownTemplate, child.ownTemplate, child.areaName)
          });

          // console.log("parent", _.cloneDeep(parent))
        });
        // console.log("result", parentAreas)
        finalFlatLevel = parentAreas[0].ownTemplate.map(row => row.join(" "));
        // console.log("final", finalFlatLevel)
      }

    }

    // console.log("flattened final", finalFlatLevel)
    flattenedPageConfig.areasConfig = flattenedAreas;
    flattenedPageConfig.gridTemplate = finalFlatLevel;

    return flattenedPageConfig;
  };

  const getFlatLevelConfig = (level: ILevelTemplate): ILevelTemplate[] => {
    let result: ILevelTemplate[] = [level];
    if (level.childTemplates.length)
      level.childTemplates.forEach(template => result.push(...getFlatLevelConfig(template)));

    return result;
  };

  const getChildTemplates = (config: IDynamicPageViewConfig, level: number = 0): ILevelTemplate[] => {
    let extendableAreas: ILevelTemplate[] = level ? [] : [new ILevelTemplate(config, level, true)];
    if (level)
      config.areasConfig.forEach(area => {
        if (area.widgetConfig.options?.innerGridConfig?.value)
          extendableAreas.push(new ILevelTemplate(area, level));
      });

    return extendableAreas;
  };

  const extendGridTemplate = (oldTemplate: string[][], direction: ExtendDirection, expandValue: number): string[][] => {
    let newTemplate: string[][] = [];
    let oldLength: number = NaN;
    let divider: number = NaN;

    switch (direction) {
      case ExtendDirection.ROW: {
        oldLength = oldTemplate.length;
        divider = expandValue / oldLength;

        for (let i = 0, i_old = 0; i < expandValue; i++, i_old += i % divider ? 0 : 1)
          newTemplate.push(oldTemplate[i_old]);

        break;
      }
      case ExtendDirection.COLUMN: {
        oldLength = oldTemplate[0].length;
        divider = expandValue / oldLength;

        for (let i = 0; i < oldTemplate.length; i++) {
          newTemplate.push([]);
          for (let j = 0, j_old = 0; j < expandValue; j++, j_old += j % divider ? 0 : 1) {
            newTemplate[i].push(oldTemplate[i][j_old]);
          }
        }

        break;
      }
    }

    return newTemplate;
  };

  const replaceNodesInTemplate = (targetTemplate: string[][], itemsTemplate: string[][], areaName: string): string[][] => {
    // console.log("replace target", targetTemplate)
    // console.log("replace items", itemsTemplate)
    // console.log("looking for area", areaName)
    let newTemplate: string[][] = _.cloneDeep(targetTemplate);
    const i_max = itemsTemplate.length;
    const j_max = itemsTemplate[0].length;
    const i_min = targetTemplate.findIndex(row => row.includes(areaName));
    const j_min = targetTemplate[i_min].indexOf(areaName);

    for (let i = i_min, i_old = 0; i < i_min + i_max; i++, i_old++)
      for (let j = j_min, j_old = 0; j < j_min + j_max; j++, j_old++) {
        newTemplate[i][j] = itemsTemplate[i_old][j_old];
      }


    // console.log("result", newTemplate)
    return newTemplate;
  };

  enum ExtendDirection {
    ROW,
    COLUMN
  }

  class ILevelTemplate {
    ownTemplate: string[][];
    ownTemplateRows: string[];
    ownTemplateColumns: string[];
    childTemplates: ILevelTemplate[];
    areas: IAreasConfig[];
    level: number;
    areaName: string;

    constructor(area: IAreasConfig | IDynamicPageViewConfig, level: number, root: boolean = false) {
      if (!root) {
        this.level = level;
        this.areaName = (area as IAreasConfig).areaName;
        this.ownTemplate = (area as IAreasConfig).widgetConfig.options.innerGridConfig.value.gridTemplate.map(row => row.split(/\s+/));
        this.areas = (area as IAreasConfig).widgetConfig.options.innerGridConfig.value.areasConfig;
        this.childTemplates = getChildTemplates((area as IAreasConfig).widgetConfig?.options?.innerGridConfig?.value, this.level + 1);
        this.ownTemplateRows = (area as IAreasConfig).widgetConfig?.options?.innerGridConfig?.value?.rowSize.split(/\s+/);
        this.ownTemplateColumns = (area as IAreasConfig).widgetConfig?.options?.innerGridConfig?.value?.columnSize.split(/\s+/);
      } else {
        this.level = level;
        this.areaName = "ROOT";
        this.areas = (area as IDynamicPageViewConfig).areasConfig;
        this.ownTemplate = (area as IDynamicPageViewConfig).gridTemplate.map(row => row.split(/\s+/));
        this.childTemplates = getChildTemplates((area as IDynamicPageViewConfig), this.level + 1);
        this.ownTemplateRows = (area as IDynamicPageViewConfig).rowSize.split(/\s+/);
        this.ownTemplateColumns = (area as IDynamicPageViewConfig).columnSize.split(/\s+/);
      }
    }
  }
}
