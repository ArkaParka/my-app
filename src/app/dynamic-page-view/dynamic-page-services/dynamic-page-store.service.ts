import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {IDynamicPageStore} from "../interfaces/IDynamicPageStore";
import {distinctUntilChanged, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DynamicPageStoreService {
  private stateSubject: BehaviorSubject<IDynamicPageStore> = new BehaviorSubject<IDynamicPageStore>({
    widgetAction: [],
    typePageViewConfigs: [],
    initialWidgetData: [],
    isInitialDataLoaded: false,
    widgetDataRequest: null,
    widgetData: null
  });

  public getState = (): Observable<IDynamicPageStore> => this.stateSubject.pipe(distinctUntilChanged());

  public getStateSnapshot = (): IDynamicPageStore => this.stateSubject.getValue();

  public setState = (partialState: Partial<IDynamicPageStore>): void =>
    this.stateSubject.next(Object.assign({}, this.getStateSnapshot(), partialState));

  public select<K extends keyof IDynamicPageStore>(key: K): Observable<IDynamicPageStore[K]> {
    return this.stateSubject.pipe(
      map((state: IDynamicPageStore) => state[key]),
      distinctUntilChanged()
    );
  }
}
