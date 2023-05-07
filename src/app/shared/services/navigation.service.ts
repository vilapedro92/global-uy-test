import {Injectable} from '@angular/core';
import {NavigationInterface} from "../interfaces/navigation.interface";
import {RoleEnum} from "../enum/role.enum";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private readonly navList: NavigationInterface[] = [
    {
      label: 'Usuarios',
      icon: 'people',
      routerLink: '/user/list',
      permission: RoleEnum.Administrador
    },
    {
      label: 'Pedidos',
      icon: 'receipt_long',
      routerLink: '/request/list',
      permission: RoleEnum.All
    },
    {
      label: 'Productos',
      icon: 'laptop_chromebook',
      routerLink: '/product/list',
      permission: RoleEnum.All
    }
  ];

  get navigationList() {
    return this.navList;
  }

}
