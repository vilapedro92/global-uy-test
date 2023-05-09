export interface DataTableInterface {
  displayedColumn: string;
  displayedColumnName: string;
  type?: DataTableItemType;
}

export enum DataTableItemEnum {
  'DATE' = 'DATE',
  'TEXT' = 'TEXT'
}

export type DataTableItemType = 'DATE' | 'TEXT'
