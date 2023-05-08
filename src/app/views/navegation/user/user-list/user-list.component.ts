import {Component, OnInit} from '@angular/core';
import {BtnColorEnum} from "../../../../shared/enum/btn-color.enum";
import {UserListMeta as Meta} from "./user-list.meta";
import {AppAuthService} from "../../../../shared/services/app-auth.service";
import {Observable, of} from "rxjs";
import {IUser} from "../../../../core/domain/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<IUser[]> = of([]);

  usersSelected: IUser[] = [];
  search!: string;

  get btnColor() {
    return BtnColorEnum
  }

  get tableConfig() {
    return Meta.tableConfig;
  }

  constructor(
    private appAuthService: AppAuthService
  ) {
  }

  ngOnInit(): void {
    this._getUsers();
  }

  updateSelection(event: any) {
    this.usersSelected = event;
  }

  remove() {
    if (!this.usersSelected.length) return;

    this.appAuthService.removeUsers(this.usersSelected);
    this.usersSelected = [];
  }

  applyFilter(event: Event) {
    this.search = (event.target as HTMLInputElement).value === "" ?
      " " :
      (event.target as HTMLInputElement).value;
  }

  private _getUsers() {
    this.users$ = this.appAuthService.users$;
  }


}
