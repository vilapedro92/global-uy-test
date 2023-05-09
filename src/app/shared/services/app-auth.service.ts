import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IProduct} from "../../core/domain/product.model";
import {IUser} from "../../core/domain/user.model";
import {IRequestModel} from "../../core/domain/request.model";
import {UserInterface} from "../interfaces/user.interface";
import {RoleEnum} from "../enum/role.enum";
import {UsersClassMeta} from "../class/users.class.meta";
import {ProductsClassMeta} from "../class/products.class.meta";
import {RequestsClassMeta} from "../class/requests.class.meta";

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
      email: 'user1@gmail.com',
      password: 'user123**',
      role: RoleEnum.Usuario
    }
  ]

  private userList: IUser[] = UsersClassMeta.users;
  private productsList: IProduct[] = ProductsClassMeta.products;
  private requestList: IRequestModel[] = RequestsClassMeta.requests;

  private users = new BehaviorSubject<IUser[]>(this.userList);
  private products = new BehaviorSubject<IProduct[]>(this.productsList);
  private requests = new BehaviorSubject<IRequestModel[]>(this.requestList);

  users$ = this.users.asObservable();

  products$ = this.products.asObservable();

  requests$ = this.requests.asObservable();


  signing(email: string, password: string): Observable<UserInterface> {
    return new Observable(subscriber => {
      const user = this.oAuth.find(el => el.email === email && el.password === password);
      subscriber.next(user);
    })
  }

  getNewUserId(): number {
    const usersId = this.userList.map(el => el.id);
    return usersId.length ? Math.max(...usersId) + 1 : 1;
  }

  getNewProductId(): number {
    const productId = this.productsList.map(el => el.id);
    return productId.length ? Math.max(...productId) + 1 : 1;
  }

  removeUsers(iUser: IUser[]) {
    iUser.forEach(user => {
      this.userList = this.userList.filter(el => el.id !== user.id)
    });

    this.users.next(this.userList);
  }

  addUser(iUser: IUser) {
    const users = [...this.userList, iUser];
    this.userList = users;

    this.users.next(this.userList);
  }

  editUser(iUser: IUser) {
    const index = this.userList.findIndex((user) => user.id === iUser.id);
    const users = [...this.userList];
    users[index] = iUser;
    this.userList = users;

    this.users.next(this.userList)
  }

  removeProduct(iProduct: IProduct) {
    this.productsList = this.productsList.filter(el => el.id !== iProduct.id)

    this.products.next(this.productsList);
  }

  addProducts(iProduct: IProduct) {
    const products = [...this.productsList, iProduct];
    this.productsList = products;

    this.products.next(this.productsList);
  }

  editProducts(iProduct: IProduct) {
    const index = this.productsList.findIndex((product) => product.id === iProduct.id);
    const products = [...this.productsList];
    products[index] = iProduct;
    this.productsList = products;

    this.products.next(this.productsList)
  }

}
