import {Component, inject} from '@angular/core';
import {AppAuthService} from "./shared/services/app-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private appAuth = inject(AppAuthService);

  constructor() {

  }

  title = 'global-uy-test';
}
