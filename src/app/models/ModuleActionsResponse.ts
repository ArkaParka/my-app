export class ModuleActionsResponse {
  actionName: string;
  displayName: string;
  type: string;
  childActions: Array<ModuleActionsResponse>;
}

export enum ModuleActionType {
  ROOT = 'ROOT',
  PAGE = 'PAGE',
  ACTION = 'ACTION'
}
