import {Injectable} from '@angular/core';
import {RoleEnum, RoleType} from "../enum/role.enum";
import {UserInterface} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
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
}
