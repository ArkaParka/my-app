import {Component} from "@angular/core";
import {IClaim} from "./IClaim";
import {ClaimService} from "./claim-service";
import {EventBusService} from "../../event-bus/event-bus.service";

@Component({
  selector: 'app-claim-component',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent {
  constructor(private claimService: ClaimService) {
    this.claimService.getClaimInfo().subscribe((result: IClaim) => {
      this.claim = result;
      this.isClaimLoading = false;
    });
  }

  isClaimLoading: boolean = true;
  claim: IClaim;

  taskTypes = [
    "Задача на разработку",
  ];
  buildComponents = [
    "Форма Алгоритма"
  ];
  taskResponsibles = [
    "Иванов И.К"
  ];


}
