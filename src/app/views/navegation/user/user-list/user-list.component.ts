import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BtnColorEnum} from "../../../../shared/enum/btn-color.enum";
import {UserListMeta as Meta} from "./user-list.meta";
import {AppAuthService} from "../../../../shared/services/app-auth.service";
import {Observable} from "rxjs";
import {IUser} from "../../../../core/domain/user.model";
import {UserDialogAddEditComponent} from "../user-dialog-add-edit/user-dialog-add-edit.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$!: Observable<IUser[]>;

  usersSelected: IUser[] = [];
  search!: string;

  get btnColor() {
    return BtnColorEnum
  }

  get tableConfig() {
    return Meta.tableConfig;
  }

  constructor(
    private appAuthService: AppAuthService,
    private cdr: ChangeDetectorRef,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this._getUsers();
  }

  applyFilter(event: Event) {
    this.search = (event.target as HTMLInputElement).value === "" ?
      " " :
      (event.target as HTMLInputElement).value;
  }

  delete() {
    if (!this.usersSelected.length) return;

    this.appAuthService.removeUsers(this.usersSelected);
    this.usersSelected = [];
  }

  updateSelection(event: any) {
    this.usersSelected = event;
  }

  onDelete(event: any) {
    this.appAuthService.removeUsers([event]);
  }

  openInfoDialog(isNew = true, data?: any) {
    return this.matDialog
      .open(UserDialogAddEditComponent, {
        width: '45%',
        disableClose: true,
        data: {isNew, data}
      })
  }

  private _getUsers() {
    this.users$ = this.appAuthService.users$;
  }

}
