import {DataTableInterface} from "../../../../shared/interfaces/data-table.interface";
import {ActionsEnum, ActionsType} from "../../../../shared/enum/actions.enum";

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
      displayedColumnName: 'CI'
    },
    {
      displayedColumn: 'cargo',
      displayedColumnName: 'Cargo'
    },
    {
      displayedColumn: 'role',
      displayedColumnName: 'Rol'
    },
    {
      displayedColumn: 'building',
      displayedColumnName: 'Edificio'
    }
  ]

  static readonly actionsList: ActionsType[] = [
    ActionsEnum.EDIT,
    ActionsEnum.DELETE
  ]
}
