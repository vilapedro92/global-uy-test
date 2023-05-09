import {RoleType} from "../enum/role.enum";

export interface NavigationInterface {
  routerLink: string;
  label: string;
  icon: string;
  permission: RoleType;
}
