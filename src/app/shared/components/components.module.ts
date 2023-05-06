import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {NavLayoutsComponent} from "./layouts/nav-layouts/nav-layouts.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {GuyLogoComponent} from './guy-logo/guy-logo.component';
import {GuyFormFieldInputComponent} from './guy-form-field-input/guy-form-field-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../modules/material.module";
import {
  GuyFormFieldInputPasswordComponent
} from './guy-form-field-input-password/guy-form-field-input-password.component';
import {GuyButtonComponent} from './guy-button/guy-button.component';
import {GuyButtonLoadingComponent} from './guy-button-loading/guy-button-loading.component';
import {GuyDivisorComponent} from './guy-divisor/guy-divisor.component';
import {GuyGoogleBtnComponent} from './guy-google-btn/guy-google-btn.component';

const components = [
  AuthLayoutComponent,
  NavLayoutsComponent,
  GuyLogoComponent,
  GuyFormFieldInputComponent,
  GuyFormFieldInputPasswordComponent,
  GuyButtonComponent,
  GuyButtonLoadingComponent,
  GuyDivisorComponent,
  GuyGoogleBtnComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [...components]
})
export class ComponentsModule {
}
