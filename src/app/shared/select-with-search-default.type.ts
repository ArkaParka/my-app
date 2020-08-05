import {Component, OnInit, OnDestroy} from '@angular/core';
import {DynamicMenuService} from '../services/dynamic-menu.service';
import {FieldType} from '@ngx-formly/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, filter, tap, takeUntil} from 'rxjs/operators';
import {ISelectableParent} from "../models/ISelectableParent";

@Component({
  selector: 'select-with-search',
  template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <legend *ngIf="to.description">{{ to.description }}</legend>
    <ng-select [items]="items$ | async"
               [readonly]="to.disabled"
               bindValue="id"
               bindLabel="title"
               placeholder="Search"
               [loading]="itemsLoading$ | async"
               [typeahead]="input$"
               (change)="onChange($event)">
    </ng-select>
  `
})
export class SearchDefaultComponent extends FieldType implements OnInit, OnDestroy {

  readonly items$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  readonly itemsLoading$: BehaviorSubject<any> = new BehaviorSubject(false);
  readonly input$ = new Subject<any>();
  readonly destroy$ = new Subject<any>();

  constructor(private dynamicMenuService: DynamicMenuService) {
    super();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.input$.pipe(
      filter(data => data?.length > 0 && data.match(/^\s/) == null),
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.itemsLoading$.next(true)),
      switchMap(value =>
        this.dynamicMenuService.findSelectableData(
          (this.field as any).widgetOptions.module,
          (this.field as any).widgetOptions.endPoint,
          value, this.getParentSelectValues())
          .pipe(
            tap(() => this.itemsLoading$.next(false))
          )),
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.items$.next(data);
    });
  }

  getParentSelectValues(): ISelectableParent[] {
    let result: ISelectableParent[] = [];
    if ((this.field as any).widgetOptions.parents) {
      (this.field as any).widgetOptions.parents.forEach((parent: ISelectableParent) => {
        result.push({
          parentFieldName: parent.parentFieldName,
          parentFieldValue: this.model[`${parent.parentFieldName}`]
        })
      });
    }
    return result;
  }

  onChange($event) {
    this.formControl.setValue($event.id);
  }
}
