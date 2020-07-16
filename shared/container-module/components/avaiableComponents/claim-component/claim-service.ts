import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IClaim} from "./IClaim";

@Injectable({
  providedIn: 'root'
})

export class ClaimService {
  constructor(private http: HttpClient) {
  }

  public getClaimInfo(): Observable<IClaim> {
    return of(this.claim)
  }


  private claim: IClaim = {
    claimInfo: {
      taskType: "Задача на разработку",
      buildComponent: "Форма Алгоритма",
      spec: "Форма 1",
      taskResponsible: "Иванов И.К",
      taskDescription: "Требование к GUI формы требования с типом Алгоритм.\nРеализовать форму.",
      taskResult: "",
      relatedTasks: [
        {
          taskName: "Провести ревью решения Pr-1058",
          taskRelation: "Блокирует",
        },
        {
          taskName: "Реализовать требования Pr-1059",
          taskRelation: "Блокируется",
        }
      ],
      taskFiles: [
        {
          fileName: "Приложение №20.xlsx"
        },
        {
          fileName: "Отчёт о выполнении.docx"
        }
      ]
    },
    claimDeadline: {
      createDate: new Date(Date.now()),
      executionDeadline: new Date(Date.now()),
      time: "12h"
    }
  }
}
