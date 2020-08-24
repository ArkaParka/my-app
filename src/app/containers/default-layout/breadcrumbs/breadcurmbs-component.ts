import {ChangeDetectorRef, Component, Input} from "@angular/core";
import {NzTreeNode} from "ng-zorro-antd";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs-component.html',
  styleUrls: ['./breadcrumbs-component.scss']
})
export class BreadcrumbsComponent {
  private _module: string = null;
  private _pages: NzTreeNode[] = [];

  constructor(private cd: ChangeDetectorRef) {
  }

  @Input('currentModule') set module(value) {
    this._module = value;
    this._pages = [];
  }

  @Input('modulePages') set pages(value) {
    this._pages = value;
  }

  get module() {
    return this._module;
  }

  get pages() {
    return this._pages;
  }
}
