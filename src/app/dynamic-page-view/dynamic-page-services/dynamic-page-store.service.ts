import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {IDynamicPageStore} from "../interfaces/IDynamicPageStore";
import {distinctUntilChanged, map} from 'rxjs/operators';
import {getDeepValue} from "../helpers/getDeepValueHelper";

@Injectable({
  providedIn: 'root'
})
export class DynamicPageStoreService {
  private stateSubject: BehaviorSubject<IDynamicPageStore> = new BehaviorSubject<IDynamicPageStore>({
    widgetAction: [],
    activeWidgetAction: [],
    typePageViewConfigs: [],
    initialWidgetData: [],
    isInitialDataLoaded: false,
    widgetDataRequest: null,
    widgetData: [],
    forms: [],
    needsDetectChanges: false,
    getWidgetDataTrigger: false,
    widgetsData: []
  });

  constructor() {
    this.select('needsDetectChanges').subscribe(ndc => {
      if (ndc) {
        this.setState({needsDetectChanges: false});
      }
    });
  }

  public pushData( data: { key: string, value: any }) {
    const newData = this.getStateSnapshot().widgetsData;
    newData.push(data);
    console.log('data', newData);
    this.setState({widgetsData: newData});
  }


  public getState = (): Observable<IDynamicPageStore> => this.stateSubject.pipe(distinctUntilChanged());

  public getStateSnapshot = (): IDynamicPageStore => this.stateSubject.getValue();

  public setState = (partialState: Partial<IDynamicPageStore>): void =>
    this.stateSubject.next(Object.assign({}, this.getStateSnapshot(), partialState))

  public select<K extends keyof IDynamicPageStore>(key: K): Observable<IDynamicPageStore[K]> {
    return this.stateSubject.pipe(
      map((state: IDynamicPageStore) => state[key]),
      distinctUntilChanged()
    );
  }

  public selectDeepByFilter<K extends keyof IDynamicPageStore>(key: K, filter: string): Observable<IDynamicPageStore[K]> {
    return this.stateSubject.pipe(
      map((state: IDynamicPageStore) => state[key]),
      map((data: any) => getDeepValue(data, filter)),
      distinctUntilChanged()
    );
  }
}
