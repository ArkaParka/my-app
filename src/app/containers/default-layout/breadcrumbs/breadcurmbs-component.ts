import {Component, Input} from "@angular/core";
import {IBreadCrumbsItem} from "../../../models/IBreadCrumbsItem";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs-component.html',
})
export class BreadcrumbsComponent {
  @Input('currentModule') module: IBreadCrumbsItem;
  @Input('modulePages') pages: IBreadCrumbsItem[] = [];
}
