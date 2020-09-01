import {Injectable} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private activeRoute$ = new BehaviorSubject<Params>(null);
  public routeChanged$ = this.activeRoute$.asObservable();

  constructor(private route: ActivatedRoute) {
  }

  emit(route) {
    this.activeRoute$.next(route);
  }

}
