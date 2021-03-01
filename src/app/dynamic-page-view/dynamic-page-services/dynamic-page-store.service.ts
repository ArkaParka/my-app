import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {IDynamicPageStore} from "../interfaces/IDynamicPageStore";
import {distinctUntilChanged, map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {IInitWidgetData} from '../interfaces/IInitWidgetData';
import {log} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class DynamicPageStoreService {
  private stateSubject: BehaviorSubject<IDynamicPageStore> = new BehaviorSubject<IDynamicPageStore>({
    widgetAction: [],
    activeWidgetAction: [], // <<
    typePageViewConfigs: [],
    initialWidgetData: [],
    isInitialDataLoaded: false,
    widgetDataRequest: null,
    widgetData: [],
    needsDetectChanges: false
  });

  constructor() {
    this.select('needsDetectChanges').subscribe(ndc => {
      if (ndc)
        this.setState({needsDetectChanges: false});
    });
  }


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
