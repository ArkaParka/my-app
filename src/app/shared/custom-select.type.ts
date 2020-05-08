import { Component, ViewChild, ElementRef, forwardRef, AfterViewInit, HostListener } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'formly-customSelect-type',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectTypeComponent),
      multi: true,
    }
  ],
  host: {'(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()'},
  template: `
  <legend *ngIf="to.label">{{ to.label }}</legend>
    <div class="wrapper">
        <input #searchInput type="text" class="form-control" placeholder="Поиск"  [formControl]="_searchTextControl">
        <div *ngIf="!visibility; else selectButtons"></div>
    </div>
    <ng-template #selectButtons>
        <div class="styleList">
          <div class="styleSelect">
            <button 
                *ngFor="let option of myItems" 
                class="lookLikeSelect" 
                name="{{ option.value }}" 
                value="{{ option.title }}" 
                (click)="changeCurrentValue($event)">
                {{ option.title }}
            </button>
          </div>
        </div>
    </ng-template>
  `,
  styleUrls: [ './custom-select.type.css' ]
})


export class CustomSelectTypeComponent extends FieldType implements AfterViewInit, ControlValueAccessor {

    @ViewChild('currentValue') element: ElementRef;
    @ViewChild('searchInput') searchInput;
  
    @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
      this.visibility = false;
    }
  
    public visibility : boolean = false;
    public _searchTextControl = new FormControl();
    public currentValueOfSelect : string = 'Выберите элемент';
    private allSelects = [
      { value: 'Yards', title: 'Yards', },
      { value: 'Yappy', title: 'Yappy', },
      { value: 'Yearly', title: 'Yearly', },
      { value: 'Yellow', title: 'Yellow', },
      { value: 'Yeasted', title: 'Yeasted', },
      { value: 'item6', title: 'Advise', },
      { value: 'Advise', title: 'Actually', },
      { value: 'Allowed', title: 'Allowed', },
      { value: 'Account', title: 'Account', },
      { value: 'Absolute', title: 'Absolute', },
      { value: 'Agree', title: 'Agree', },
      { value: 'Xenon', title: 'Xenon', },
      { value: 'Xylans', title: 'Xylans', },
      { value: 'Breaking', title: 'Breaking', },
      { value: 'Backup', title: 'Backup', },
      { value: 'Battle', title: 'Battle', },
      { value: 'Begin', title: 'Begin', },
      { value: 'Basic', title: 'Basic', },
      { value: 'Calling', title: 'Calling', },
      { value: 'Century', title: 'Century', },
    ];
    public myItems: any[] = [];

    ngOnInit() {
  
    }
  
    public ngAfterViewInit() : void {
      this.callRequireForYoutubeService();
    } 
  
    public callRequireForYoutubeService () : void {
      fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        distinctUntilChanged()
        )
      .subscribe(result => {
        if (result.length > 0 && result.match(/^\s/) === null) {
          this.visibility = true; 
          this.myItems = this.allSelects.filter(elem => {
            if (elem.value.toLowerCase().startsWith(result.toLowerCase())) {
              return elem;
            }
          });
        }
      });
    }
  
    writeValue(value) {
      this.onChange(value);
    }
  
    onChange: any = () => {
    };
    onTouched: any = () => {
    };
  
    registerOnChange(fn) {
      this.onChange = fn;
    }
  
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    
    public changeCurrentValue(changes) : void {
      this.searchInput.nativeElement.value = changes.target.value;
      this.formControl.setValue(changes.target.value);
      this.writeValue(this.currentValueOfSelect);
      this.onTouched();
      this.visibility = false;
    }
}
