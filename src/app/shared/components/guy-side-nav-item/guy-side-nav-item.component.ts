import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'guy-side-nav-item',
  templateUrl: './guy-side-nav-item.component.html',
  styleUrls: ['./guy-side-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuySideNavItemComponent {

  @Input() icon: string = 'edit';
  @Input() label: string = 'Label';
  @Input() routerLink!: string;

}
