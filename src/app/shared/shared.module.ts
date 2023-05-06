import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./modules/material.module";
import {ComponentsModule} from "./components/components.module";


const modules = [
  MaterialModule,
  ComponentsModule
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
