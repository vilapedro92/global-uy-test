import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SessionsRoutingModule} from './sessions-routing.module';
import {SigninComponent} from './signin/signin.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    SigninComponent,
    RecoverAccountComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SessionsModule {
}
