export class ModuleActionsResponse {
  actionName: string;
  displayName: string;
  type: string;
  childActions: Array<ModuleActionsResponse>;
}
