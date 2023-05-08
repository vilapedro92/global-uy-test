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
import {GuySideNavComponent} from './guy-side-nav/guy-side-nav.component';
import {GuySideNavItemComponent} from './guy-side-nav-item/guy-side-nav-item.component';
import {SharedDirectivesModule} from "../directives/shared-directives.modules";
import {GuyFormFiledSearchComponent} from './guy-form-filed-search/guy-form-filed-search.component';
import { GuyTableComponent } from './guy-table/guy-table.component';
import { GuyFormFieldSelectComponent } from './guy-form-field-select/guy-form-field-select.component';

const components = [
  AuthLayoutComponent,
  NavLayoutsComponent,
  GuyLogoComponent,
  GuyFormFieldInputComponent,
  GuyFormFieldInputPasswordComponent,
  GuyButtonComponent,
  GuyButtonLoadingComponent,
  GuyDivisorComponent,
  GuyGoogleBtnComponent,
  GuySideNavComponent,
  GuySideNavItemComponent,
  GuyFormFiledSearchComponent,
  GuyTableComponent,
  GuyFormFieldSelectComponent
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
    SharedDirectivesModule
  ],
  exports: [...components]
})
export class ComponentsModule {
}
