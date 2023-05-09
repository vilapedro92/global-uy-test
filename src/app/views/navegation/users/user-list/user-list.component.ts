import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BtnColorEnum} from "../../../../shared/enum/btn-color.enum";
import {UserListMeta as Meta} from "./user-list.meta";
import {AppAuthService} from "../../../../shared/services/app-auth.service";
import {Observable, take} from "rxjs";
import {IUser} from "../../../../core/domain/user.model";
import {UserDialogAddEditComponent} from "../user-dialog-add-edit/user-dialog-add-edit.component";
import {MatDialog} from "@angular/material/dialog";
import {NotificationService} from "../../../../shared/services/notification.service";

@Component({
  selector: 'app-users-list',
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

  get tableActions() {
    return Meta.actionsList;
  }

  constructor(
    private appAuthService: AppAuthService,
    private cdr: ChangeDetectorRef,
    private matDialog: MatDialog,
    private notificationService: NotificationService
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
    this.notificationService.openInfo('Usuarios Eliminados')
  }

  updateSelection(event: any) {
    this.usersSelected = event;
  }

  onDelete(event: any) {
    this.appAuthService.removeUsers([event]);
    this.notificationService.openInfo('Usuario eliminado')
  }

  openInfoDialog(isNew = true, data?: any) {
    return this.matDialog
      .open(UserDialogAddEditComponent, {
        width: '45%',
        disableClose: true,
        data: {isNew, data}
      }).afterClosed()
      .pipe(take(1))
      .subscribe(res => {
        if (res) this.notificationService.openInfo(isNew ? 'Ha sido agregado el usuario' : 'Ha sido actualizado el usuario')
      })
  }

  private _getUsers() {
    this.users$ = this.appAuthService.users$;
  }

}
