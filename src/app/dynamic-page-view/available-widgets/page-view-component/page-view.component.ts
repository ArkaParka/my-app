import {Component, Input, OnInit} from "@angular/core";
import {IDynamicPageViewConfig} from "../../../models/IDynamicPageViewConfig";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";
import {ITypePageViewConfig} from "../../interfaces/ITypePageViewConfig";
import {filter, find} from "rxjs/operators";

@Component({
  template: `
    <app-grid-container [widgetOptions]="innerPageViewConfig"></app-grid-container>`
})
export class PageViewComponent implements OnInit {
  @Input() widgetOptions: { page_key: { value: string } };
  public innerPageViewConfig: IDynamicPageViewConfig;

  constructor(private dpStore: DynamicPageStoreService) {
  }

  ngOnInit(): void {
    this.dpStore.select('typePageViewConfigs')
      .pipe(filter(data => !!data))
      .subscribe((configs: ITypePageViewConfig[]) => {
        this.innerPageViewConfig = configs.find(config => config.key === this.widgetOptions.page_key?.value)?.viewConfig;
      })
  }
}
