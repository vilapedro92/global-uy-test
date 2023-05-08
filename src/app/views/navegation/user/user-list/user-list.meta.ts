import {DataTableInterface} from "../../../../shared/interfaces/data-table.interface";

export class UserListMeta {

  static readonly tableConfig: DataTableInterface[] = [
    {
      displayedColumn: 'id',
      displayedColumnName: 'Id'
    },
    {
      displayedColumn: 'name',
      displayedColumnName: 'Nombre'
    },
    {
      displayedColumn: 'email',
      displayedColumnName: 'Email'
    },
    {
      displayedColumn: 'ci',
      displayedColumnName: 'Cedula'
    },
    {
      displayedColumn: 'cargo',
      displayedColumnName: 'Cargo'
    },
    {
      displayedColumn: 'role',
      displayedColumnName: 'Rol'
    },
  ]
}
