import {IFieldGroup} from "./IFieldGroup";

export interface IFieldGroupDefaultProperties {
  className?:	string,
  fieldArray?: {
    type: string,
    fieldGroup: IFieldGroup[]
  },
  fieldGroup?: IFieldGroup[],
  key?: string,
  templateOptions?: {
    label?: string,
    required?: boolean,
    type?: string
  },
  type?: string,
  widgetOptions?: object
}
