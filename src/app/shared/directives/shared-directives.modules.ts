import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PermissionDirective} from "./permission.directive";


const directives = [
  PermissionDirective
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class SharedDirectivesModule {
}
