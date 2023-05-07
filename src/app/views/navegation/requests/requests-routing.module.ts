import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RequestListComponent} from "./request-list/request-list.component";

const routes: Routes = [
  {
    path: 'list',
    component: RequestListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
