import { Component, OnInit, OnChanges } from '@angular/core';
import { DynamicMenuService, Person } from '../menu/dynamic-menu.service';
import { FieldType } from '@ngx-formly/core';


@Component({
    selector: 'search-default-example',
    template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <ng-select  [items]="people"
                bindValue="name"
                bindLabel="name"
                placeholder="Search"
                [loading]="peopleLoading"
                [(ngModel)]="selectedItem"
                (change)="onChange($event)">
    </ng-select>
    `
})
export class SearchDefaultComponent extends FieldType implements OnInit {

    people: Person[] = [];
    peopleLoading = false;
    selectedItem: any;

    constructor(private dynamicMenuService: DynamicMenuService) {
        super();
    }

    ngOnInit() {
        this.loadPeople();
    }

    private loadPeople() {
        this.peopleLoading = true;
        this.dynamicMenuService.getDataForSelect((this.field as any).url).subscribe(x => {
            this.people = x;
            this.peopleLoading = false;
        });
    }
    onChange($event) {
        console.log("Selected item", this.selectedItem);
        this.formControl.setValue(this.selectedItem);
    }
}
