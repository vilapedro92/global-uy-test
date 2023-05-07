import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./modules/material.module";
import {ComponentsModule} from "./components/components.module";
import {SharedDirectivesModule} from "./directives/shared-directives.modules";


const modules = [
  MaterialModule,
  ComponentsModule,
  SharedDirectivesModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules]
})
export class SharedModule {
}
