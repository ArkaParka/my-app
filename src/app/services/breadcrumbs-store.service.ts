import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IDynamicPageStore} from '../dynamic-page-view/interfaces/IDynamicPageStore';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {IBreadcrumbsStore} from '../dynamic-page-view/interfaces/IBreadcrumbsStore';
import {IBreadCrumbsItem} from '../models/IBreadCrumbsItem';

@Injectable({
  providedIn: 'root'
})

export class BreadcrumbsStoreService {
  private stateSubject: BehaviorSubject<IBreadcrumbsStore> = new BehaviorSubject<IBreadcrumbsStore>({
    module: { title: '', key: '' },
    pages: [],
    tab: { title: '', key: ''},
    tree_lists: []
  });

  public getStateSnapshot = (): IBreadcrumbsStore => this.stateSubject.getValue();

  public setState = (partialState: Partial<IBreadcrumbsStore>): void =>
    this.stateSubject.next(Object.assign({}, this.getStateSnapshot(), partialState))

  public select<K extends keyof IBreadcrumbsStore>(key: K): Observable<IBreadcrumbsStore[K]> {
    return this.stateSubject.pipe(
      map((state: IBreadcrumbsStore) => state[key]),
      distinctUntilChanged()
    );
  }
}
