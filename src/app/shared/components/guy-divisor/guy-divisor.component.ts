import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'guy-divisor',
  templateUrl: './guy-divisor.component.html',
  styleUrls: ['./guy-divisor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuyDivisorComponent {

  @Input() label = 'o ingresar con'

}
