import { Component } from '@angular/core';
import {BtnColorEnum} from "../../../../shared/enum/btn-color.enum";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  get btnColor() {
    return BtnColorEnum
  }

}
