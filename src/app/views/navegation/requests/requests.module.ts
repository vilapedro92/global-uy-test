import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequestsRoutingModule} from './requests-routing.module';
import {RequestListComponent} from './request-list/request-list.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    RequestListComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    SharedModule
  ]
})
export class RequestsModule {
}
