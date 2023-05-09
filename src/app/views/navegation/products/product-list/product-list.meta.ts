import {DataTableInterface} from "../../../../shared/interfaces/data-table.interface";
import {ActionsEnum, ActionsType} from "../../../../shared/enum/actions.enum";

export class ProductListMeta {

  static readonly tableConfig: DataTableInterface[] = [
    {
      displayedColumn: 'id',
      displayedColumnName: 'Id'
    },
    {
      displayedColumn: 'name',
      displayedColumnName: 'Nombre'
    }
  ]

  static readonly actionsList: ActionsType[] = [
    ActionsEnum.EDIT,
    ActionsEnum.DELETE
  ]
}
