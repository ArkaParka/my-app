import {ITask} from "./ITask";
import {IFIle} from "./IFIle";

export interface IClaim {
  claimInfo: {
    taskType: string;
    buildComponent: string;
    spec: string;
    taskResponsible: string;
    taskDescription: string;
    taskResult: string;
    relatedTasks: ITask[];
    taskFiles: IFIle[];
  }
  claimDeadline: {
    createDate: Date;
    executionDeadline: Date;
    time: string;
  }
}
