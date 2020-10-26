import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {IDynamicPageViewConfig} from "../../../models/IDynamicPageViewConfig";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";
import {ITypePageViewConfig} from "../../interfaces/ITypePageViewConfig";
import {filter, takeUntil} from "rxjs/operators";
import {DocumentBaseComponent} from "../../../containers/document-base.component";

@Component({
  template: `
    <app-grid-container [widgetOptions]="innerPageViewConfig"></app-grid-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageViewComponent extends DocumentBaseComponent implements OnInit {
  @Input() widgetOptions: { page_key: { value: string } };
  public innerPageViewConfig: IDynamicPageViewConfig;

  constructor(private dpStore: DynamicPageStoreService) {
    super();
  }

  ngOnInit(): void {
    this.dpStore.select('typePageViewConfigs')
      .pipe(
        filter(data => !!data),
        takeUntil(this.destroy$))
      .subscribe((configs: ITypePageViewConfig[]) => {
        this.innerPageViewConfig = configs.find(config => config.key === this.widgetOptions.page_key?.value)?.viewConfig;
      })
  }
}
