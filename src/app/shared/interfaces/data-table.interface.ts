export interface DataTableInterface {
  displayedColumn: string;
  displayedColumnName: string;
  type?: DataTableItemType;
}

export enum DataTableItemEnum {
  'DATE' = 'DATE',
  'TEXT' = 'TEXT'
}

type DataTableItemType = 'DATE' | 'TEXT'
