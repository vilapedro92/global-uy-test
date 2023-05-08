import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild
} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {DataTableInterface} from "../../interfaces/data-table.interface";

@Component({
  selector: 'guy-table',
  templateUrl: './guy-table.component.html',
  styleUrls: ['./guy-table.component.scss']
})
export class GuyTableComponent implements OnChanges, OnInit {

  @Input() elements: any[] = [];
  @Input() config!: DataTableInterface[];
  @Input() search: string = '';

  @Output() wasChecked = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  constructor() {
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
    this.displayedColumns = ['select', ...this.config.map(el => el.displayedColumn)];
    this.dataSource = new MatTableDataSource(this.elements);
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