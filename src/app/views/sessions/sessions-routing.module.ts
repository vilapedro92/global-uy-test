import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from "./signin/signin.component";
import {RegisterComponent} from "./register/register.component";
import {RecoverAccountComponent} from "./recover-account/recover-account.component";

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
    data: {title: 'Signin'}
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {title: 'Register'}
  },
  {
    path: 'recover-account',
    component: RecoverAccountComponent,
    data: {title: 'Recover Account'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
