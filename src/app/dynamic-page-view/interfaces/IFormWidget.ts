import {IDynamicPageViewConfig} from '../../models/IDynamicPageViewConfig';

export interface IFormWidget {
  dataType: string;
  header: string;
  idType: string;
  key: string;
  pageViewConfig: IDynamicPageViewConfig;
  uid: string;
}
