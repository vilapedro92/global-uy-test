import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IsAdmin} from "../../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: 'user',
    canActivate: [IsAdmin],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: {title: 'Users', breadcrumb: 'Users List'}
  },
  {
    path: 'request',
    loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule),
    data: {title: 'Requests', breadcrumb: 'Request List'}
  },
  {
    path: 'product',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    data: {title: 'Products', breadcrumb: 'Products List'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegationRoutingModule {
}
