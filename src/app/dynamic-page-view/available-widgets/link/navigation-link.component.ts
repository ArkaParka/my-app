import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional} from '@angular/core';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {takeUntil} from 'rxjs/operators';
import {DocumentBaseComponent} from '../../../containers/document-base.component';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {ILinkWidgetData} from '../../interfaces/ILinkWidgetData';
import {DP_STORE, WIDGET_OPTIONS, WidgetOptions} from "../../dynamic-page-services/IWIdgetFacrotyInterfaces";
import {INavLinkWidgetOptions} from '../../interfaces/INavLinkWidgetOptions';

@Component({
  selector: 'app-nav-link',
  template: `
   <ng-container *ngFor="let data of (this.widgetData | async)">
     <a [routerLink]="\'/app/module/\'+ link?.key + '/' + data?.id?.value"
        (click)="addEventListener()">{{data?.title?.value || "НАВИГАЦИОННАЯ ССЫЛКА"}} </a>
   </ng-container>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationLinkComponent extends DocumentBaseComponent {
  public widgetData: BehaviorSubject<ILinkWidgetData> = new BehaviorSubject<ILinkWidgetData>(null);

  public widgetOptions: INavLinkWidgetOptions;
  public link: {key: string} = {key: ''};

  constructor(@Optional() @Inject(WIDGET_OPTIONS) readonly widgetOptionsGetter: WidgetOptions<any>,
              @Optional() @Inject(DP_STORE) readonly dpStore: DynamicPageStoreService,
              public cd: ChangeDetectorRef) {
    super();

    combineLatest(this.widgetOptionsGetter.getOptions(), this.widgetOptionsGetter.getWidgetData())
      .pipe(takeUntil(this.destroy$))
      .subscribe(([widgetOptions, data]) => {
        this.widgetOptions = widgetOptions;
        this.widgetData.next(data);
        console.log('widgetOptions, data', widgetOptions, data);

        this.link.key = this.widgetOptions.moduleName.value + '/' + this.widgetOptions.parentItemName.value + '.' + this.widgetOptions.itemName.value;
        console.log('this.link.key', this.link.key);
      });
  }

  public addEventListener() {

  }

}
