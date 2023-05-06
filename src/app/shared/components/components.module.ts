import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {NavLayoutsComponent} from "./layouts/nav-layouts/nav-layouts.component";
import {RouterModule, RouterOutlet} from "@angular/router";

const components = [
  AuthLayoutComponent,
  NavLayoutsComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
  ],
  exports: [...components]
})
export class ComponentsModule {
}
