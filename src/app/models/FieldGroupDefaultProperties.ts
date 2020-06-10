import {FieldGroup} from "./FieldGroup.interface";

export interface FieldGroupDefaultProperties {
  className?:	string,
  fieldArray?: {
    type: string,
    fieldGroup: FieldGroup[]
  },
  fieldGroup?: FieldGroup[],
  key?: string,
  templateOptions?: {
    label?: string,
    required?: boolean,
    type?: string
  },
  type?: string,
  widgetOptions?: object
}
