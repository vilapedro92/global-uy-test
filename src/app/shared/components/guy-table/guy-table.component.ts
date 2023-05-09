import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild
} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {DataTableInterface, DataTableItemEnum, DataTableItemType} from "../../interfaces/data-table.interface";
import {ActionsEnum, ActionsType} from "../../enum/actions.enum";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'guy-table',
  templateUrl: './guy-table.component.html',
  styleUrls: ['./guy-table.component.scss']
})
export class GuyTableComponent implements OnChanges, OnInit {

  @Input() actionsList: ActionsType[] = [];
  @Input() config!: DataTableInterface[];
  @Input() elements: any[] = [];
  @Input() haveChecks: boolean = true;
  @Input() search: string = '';

  @Output() wasChecked = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onResolve = new EventEmitter<any>();
  @Output() onReject = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  get actionsListEnum() {
    return ActionsEnum
  }

  constructor(
    private datePipe: DatePipe,
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['elements']?.currentValue) {
      this.dataSource = new MatTableDataSource(this.elements);
      this.selection.clear();
    }

    if (changes['search']?.currentValue) {
      this.dataSource.filter = this.search.trim().toLowerCase();
    }
  }

  ngOnInit(): void {
    const select = []
    const actions = []

    if (this.haveChecks) {
      select.push('select')
    }
    if (this.actionsList.length) {
      actions.push('actions')
    }

    this.displayedColumns = [...select, ...this.config.map(el => el.displayedColumn), ...actions];
    this.dataSource = new MatTableDataSource(this.elements);
  }

  getDisplayedColumnFormat<T>(text: T, format: DataTableItemType = DataTableItemEnum.TEXT) {
    return format === DataTableItemEnum.DATE ?
      this.datePipe.transform(text as string, 'dd-MM-yyyy') :
      text
  }

  edit(row: any) {
    this.onEdit.emit(row);
  }

  remove(row: any) {
    this.onDelete.emit(row)
  }

  resolve(row: any) {
    this.onResolve.emit(row)
  }

  reject(row: any) {
    this.onReject.emit(row)
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.wasChecked.emit(this.selection.selected);
      return;
    }
    this.selection.select(...this.dataSource.data);
    this.wasChecked.emit(this.selection.selected);
  }

  checkboxLabel<T>(row?: T): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  notificationSelection(row: any) {
    this.selection.toggle(row);
    this.wasChecked.emit(this.selection.selected);
  }

}
