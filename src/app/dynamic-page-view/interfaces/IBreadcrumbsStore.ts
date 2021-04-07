import {IBreadCrumbsItem} from '../../models/IBreadCrumbsItem';

export interface IBreadcrumbsStore {
  module: IBreadCrumbsItem;
  pages: IBreadCrumbsItem[];
  tab?: IBreadCrumbsItem;
  tree_lists?: IBreadCrumbsItem[];
}
