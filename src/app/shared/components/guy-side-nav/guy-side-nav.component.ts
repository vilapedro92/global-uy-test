import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {PermissionsService} from "../../services/permissions.service";

@Component({
  selector: 'guy-side-nav',
  templateUrl: './guy-side-nav.component.html',
  styleUrls: ['./guy-side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuySideNavComponent {

  navigationService = inject(NavigationService);
  permissionsService = inject(PermissionsService);

}
