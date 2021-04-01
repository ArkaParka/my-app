import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {IDynamicPageStore} from '../interfaces/IDynamicPageStore';
import {distinctUntilChanged, map, mergeMap, switchMap} from 'rxjs/operators';
import {getDeepValue} from '../helpers/getDeepValueHelper';
import {EActionUseWhenType} from '../interfaces/EEventTypes';
import {isArray} from 'ngx-bootstrap/chronos';
import {IButtonSubjectStore} from '../interfaces/IButtonSubjectStore';
import * as _ from 'lodash';

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
    modalWidgetsData: []
  });

  private buttonSubject$: BehaviorSubject<IButtonSubjectStore> = new BehaviorSubject<IButtonSubjectStore>({
    widgetData: [],
    fieldName: ''
  });

  public setButtonData = (newData: IButtonSubjectStore): void => {
    return this.buttonSubject$.next(newData);
  }

  public selectButtonData(fieldName: string, condition: string): Observable<any> {
    const result = {
      checked: true,
      data: null,
    };
    return this.buttonSubject$.pipe(
      map((button: IButtonSubjectStore) => (button.fieldName === fieldName) ? button : null),
      map((button: IButtonSubjectStore) => {
        switch (condition) {
          case EActionUseWhenType.SELECTED_ONE: {
            result.checked = (isArray(button?.widgetData) && (button?.widgetData.length === 1));
            result.data = button?.widgetData;
            return of(result);
          }
          case EActionUseWhenType.SELECTED_MANY: {
            result.checked = (isArray(button?.widgetData) && (button?.widgetData.length >= 1));
            result.data = button?.widgetData;
            return of(result);
          }
          case EActionUseWhenType.ALWAYS: {
            // result.checked = true;
            return of(result);
          }
          case EActionUseWhenType.FILLED: {
            result.checked = !!button?.widgetData;
            result.data = button?.widgetData;
            return of(result);
          }
          default:
            return of(result);
        }
      }),
      distinctUntilChanged()
    );
  }

  constructor() {
    this.select('needsDetectChanges').subscribe(ndc => {
      if (ndc) {
        this.setState({needsDetectChanges: false});
      }
    });
  }

  public pushData(data: { key: string, value: any }) {
    const newData = this.getStateSnapshot().modalWidgetsData;
    newData.push(data);
    this.setState({modalWidgetsData: newData});
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

  public selectDeepByFilter<K extends keyof IDynamicPageStore>(key: K, filter: string): Observable<IDynamicPageStore[K]> {
    return this.stateSubject.pipe(
      map((state: IDynamicPageStore) => state[key]),
      map((data: any) => getDeepValue(data, filter)),
      distinctUntilChanged()
    );
  }
}
