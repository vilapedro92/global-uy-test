import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductListComponent} from './product-list/product-list.component';
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductDialogAddEditComponent} from './product-dialog-add-edit/product-dialog-add-edit.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDialogAddEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule {
}
