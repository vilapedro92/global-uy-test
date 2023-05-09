import {DataTableInterface, DataTableItemEnum} from "../../../../shared/interfaces/data-table.interface";

export class RequestListMeta {

  static readonly tableConfig: DataTableInterface[] = [
    {
      displayedColumn: 'id',
      displayedColumnName: 'Id'
    },
    {
      displayedColumn: 'product',
      displayedColumnName: 'Producto'
    },
    {
      displayedColumn: 'userEmail',
      displayedColumnName: 'Usuario'
    },
    {
      displayedColumn: 'quantity',
      displayedColumnName: 'Cantidad'
    },
    {
      displayedColumn: 'date',
      displayedColumnName: 'Fecha',
      type: DataTableItemEnum.DATE
    },
    {
      displayedColumn: 'clientDirection',
      displayedColumnName: 'Direccion'
    },
  ]
}
