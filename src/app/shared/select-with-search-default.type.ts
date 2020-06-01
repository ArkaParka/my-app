import { Component, OnInit, OnChanges } from '@angular/core';
import { DynamicMenuService } from '../services/dynamic-menu.service';
import { FieldType } from '@ngx-formly/core';
import { DataSelect } from '../menu/responce-interface';


@Component({
    selector: 'select-with-search',
    template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <legend *ngIf="to.description">{{ to.description }}</legend>
    <ng-select  [items]="items"
                bindValue="name"
                bindLabel="name"
                placeholder="Search"
                [loading]="itemsLoading"
                [(ngModel)]="selectedItem"
                (change)="onChange($event)">
    </ng-select>
    `
})
export class SearchDefaultComponent extends FieldType implements OnInit {

    items: DataSelect[] = [];
    itemsLoading = false;
    selectedItem: any;

    constructor(private dynamicMenuService: DynamicMenuService) {
        super();
    }

    ngOnInit() {
        this.loadPeople();
    }

    private loadPeople() {
        this.itemsLoading = true;
    }
    onChange($event) {
        this.formControl.setValue(this.selectedItem);
    }
}
