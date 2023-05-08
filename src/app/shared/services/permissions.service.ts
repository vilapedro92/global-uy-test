import {inject, Injectable} from '@angular/core';
import {RoleEnum, RoleType} from "../enum/role.enum";
import {UserInterface} from "../interfaces/user.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  router = inject(Router);

  get permissionsList() {
    return RoleEnum
  }

  isAdmin(): boolean {
    return this.isRole(RoleEnum.Administrador);
  }

  isUser(): boolean {
    return this.isRole(RoleEnum.Usuario);
  }

  isRole(role: RoleType): boolean {
    const user = <UserInterface>JSON.parse(sessionStorage.getItem('user') ?? '');
    return user.role === role;
  }

  getRole(): RoleType | null {
    const user = <UserInterface>JSON.parse(sessionStorage.getItem('user') ?? '');
    return user.role;
  }

  getUserLogedeId(): string {
    const user = <UserInterface>JSON.parse(sessionStorage.getItem('user') ?? '');
    return user.email;
  }

  logOut() {
    sessionStorage.removeItem('user');
    this.router.navigate([''])
  }
}
