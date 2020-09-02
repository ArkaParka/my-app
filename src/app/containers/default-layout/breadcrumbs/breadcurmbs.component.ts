import {Component, Input} from "@angular/core";
import {IBreadCrumbsItem} from "../../../models/IBreadCrumbsItem";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input('currentModule') module: IBreadCrumbsItem;
  @Input('modulePages') pages: IBreadCrumbsItem[] = [];
}
