export interface ITreeListDataValue {
  id: {
    id: number;
    type: string
  };
  title: string;
  children: ITreeListDataValue[];
}
