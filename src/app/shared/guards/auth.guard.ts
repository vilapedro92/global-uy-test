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
      !user ? resolve(true) : reject(this.router.navigateByUrl('/product/list'));
    });
  }
}


@Injectable({
  providedIn: 'root',
})
export class IsAdmin implements CanActivate {
  private permission = inject(PermissionsService);
  private router = inject(Router);

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.permission.isAdmin()) {
      this.router.navigate(['/product/list']);
      return false
    }

    return true;
  }
}
