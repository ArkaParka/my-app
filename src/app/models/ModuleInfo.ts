import {ModuleDisplayInfoResponse} from "./ModuleDisplayInfoResponse";

export class ModuleInfo {
  nodeName: string;
  module: ModuleDisplayInfoResponse;

  constructor() {
    this.module = new ModuleDisplayInfoResponse();
  }

}
