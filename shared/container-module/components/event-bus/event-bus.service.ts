import {Injectable} from "@angular/core";
import {Subject, Subscription} from "rxjs";
import {filter, map, tap} from "rxjs/operators";
import {BusEvent} from "./BusEvent";

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  constructor() {
  }

  private subject$ = new Subject<BusEvent>();

  emit(event: BusEvent) {
    this.subject$.next(event);
  }

  on(eventType: string, callback: any): Subscription {
    return this.subject$.pipe(
      filter((e: BusEvent) => e.eventType === eventType),
      map((e: BusEvent) => e.eventPayload)
    ).subscribe(callback)
  }

}
