import {Component, Input, OnInit} from '@angular/core';
import {IBreadCrumbsItem} from "../../../models/IBreadCrumbsItem";
import {BreadcrumbsStoreService} from '../../../services/breadcrumbs-store.service';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {

  private pages: BehaviorSubject<IBreadCrumbsItem[]> = new BehaviorSubject<IBreadCrumbsItem[]>([]);

  constructor(private bcStore: BreadcrumbsStoreService) {
    combineLatest(this.bcStore.select('module'), this.bcStore.select('pages'),
      this.bcStore.select('tab'), this.bcStore.select('tree_lists')).pipe(
      filter(data => !!data)
    ).subscribe(data => {
      this.pages.next(data.flat(Infinity));
    });
  }
}
