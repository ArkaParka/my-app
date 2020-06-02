import { Component } from '@angular/core';
import { DynamicMenuService } from '../services/dynamic-menu.service';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'select-with-search',
    template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <legend *ngIf="to.description">{{ to.description }}</legend>
    <ng-select  [items]="items"
                bindValue="id"
                bindLabel="title"
                placeholder="Search"
                [loading]="itemsLoading"
                [(ngModel)]="selectedItem"
                (search)="onSearch($event)"
                (change)="onChange($event)">
    </ng-select>
    `
})
export class SearchDefaultComponent extends FieldType {

    items: object[] = [];
    itemsLoading = false;
    selectedItem: any;

    constructor(private dynamicMenuService: DynamicMenuService) {
        super();
    }
    
    onSearch($event) {
        this.loadItems($event.term);
    }

    public loadItems(filter: string) {
        this.itemsLoading = true;
        if (filter.length > 0 && filter.match(/^\s/) == null) {
            this.dynamicMenuService.findSelectableData((this.field as any).widgetOptions.module, (this.field as any).widgetOptions.endPoint, filter).subscribe(data => {
                this.items = data;
                this.itemsLoading = false;
            });
        }
    }

    onChange($event) {
        this.formControl.setValue(this.selectedItem);
    }
}
