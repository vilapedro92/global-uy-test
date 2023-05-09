import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequestsRoutingModule} from './requests-routing.module';
import {RequestListComponent} from './request-list/request-list.component';
import {SharedModule} from "../../../shared/shared.module";
import {RequestRejectDialogComponent} from './request-reject-dialog/request-reject-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RequestListComponent,
    RequestRejectDialogComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RequestsModule {
}
