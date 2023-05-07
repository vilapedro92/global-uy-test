import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {PermissionsService} from "../services/permissions.service";


@Injectable({
  providedIn: 'root',
})
export class UserIsLoggedIn implements CanActivate {

  private router = inject(Router);

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const user = sessionStorage.getItem('user');
      user ? resolve(true) : reject(this.router.navigateByUrl(''));
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class UserNotLoggedIn implements CanActivate {

  private router = inject(Router);

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const user = sessionStorage.getItem('user');
      !user ? resolve(true) : reject(this.router.navigateByUrl(''));
    });
  }
}

// TODO AJUSTAR LOS GUARDS PARA Q TE REDIRECCIONE...

@Injectable({
  providedIn: 'root',
})
export class IsUser implements CanActivate {
  private permission = inject(PermissionsService);

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.permission.isAdmin()
  }
}


@Injectable({
  providedIn: 'root',
})
export class IsAdmin implements CanActivate {
  private permission = inject(PermissionsService);

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.permission.isAdmin()
  }
}
