import {Injectable} from '@angular/core';
import * as productJson from './../../../assets/json/product.json';
import * as usersJson from './../../../assets/json/users.json';
import * as requestsJson from './../../../assets/json/requests.json';
import {Observable, of} from "rxjs";
import {IProduct} from "../../core/domain/product.model";
import {IUser} from "../../core/domain/user.model";
import {IRequestModel} from "../../core/domain/request.model";
import {UserInterface} from "../interfaces/user.interface";
import {RoleEnum} from "../enum/role.enum";

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  oAuth: UserInterface[] = [
    {
      email: 'admin1@gmail.com',
      password: 'admin123**',
      role: RoleEnum.Administrador
    }, {
      email: 'usuario1@gmail.com',
      password: 'usuario123**',
      role: RoleEnum.Usuario
    }
  ]

  get products() {
    return of(productJson as IProduct[])
  }

  get users() {
    return of(usersJson as IUser[])
  }

  get requests() {
    return of(requestsJson as IRequestModel[])
  }


  signing(email: string, password: string): Observable<UserInterface> {
    return new Observable(subscriber => {
      const user = this.oAuth.find(el => el.email === email && el.password === password);
      subscriber.next(user);
    })
  }


}
