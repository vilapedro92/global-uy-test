import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SessionsRoutingModule} from './sessions-routing.module';
import {SigninComponent} from './signin/signin.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SigninComponent
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
