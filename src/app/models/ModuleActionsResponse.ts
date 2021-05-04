export class ModuleActionsResponse {
  actionName: string;
  displayName: string;
  type: string;
  childActions: Array<ModuleActionsResponse>;
  id: string;
}

export enum ModuleActionType {
  ROOT = 'ROOT',
  PAGE = 'PAGE',
  ACTION = 'ACTION'
}
