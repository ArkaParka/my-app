export interface ITreeListDataValue {
  id: number;
  title: string;
  dataType: string;
  children: ITreeListDataValue[];
}
