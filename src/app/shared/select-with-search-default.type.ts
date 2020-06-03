import { Component, OnInit } from '@angular/core';
import { DynamicMenuService } from '../services/dynamic-menu.service';
import { FieldType } from '@ngx-formly/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, filter, tap, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'select-with-search',
    template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <legend *ngIf="to.description">{{ to.description }}</legend>
    <ng-select  [items]="items$ | async"
                bindValue="id"
                bindLabel="title"
                placeholder="Search"
                [loading]="itemsLoading$ | async"
                [(ngModel)]="selectedItem"
                [typeahead]="input$"
                (change)="onChange()">
    </ng-select>
    `
})
export class SearchDefaultComponent extends FieldType implements OnInit {

    readonly items$: BehaviorSubject<any[]> = new BehaviorSubject([]);
    readonly itemsLoading$: BehaviorSubject<any> = new BehaviorSubject(true);;
    selectedItem: any;
    readonly input$ = new Subject<any>();
    readonly destroy$ = new Subject<any>();


    constructor(private dynamicMenuService: DynamicMenuService) {
        super();
    }
    ngOnInit(): void {
        this.input$.pipe(
            filter(data => data.length > 0 && data.match(/^\s/) == null),
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(value => this.dynamicMenuService.findSelectableData((this.field as any).widgetOptions.module, (this.field as any).widgetOptions.endPoint, value)),
            tap(() => this.itemsLoading$.next(false)),
            takeUntil(this.destroy$)
          ).subscribe(data => {
            this.items$.next(data);
          });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onChange($event) {
        this.formControl.setValue(this.selectedItem);
    }
}
