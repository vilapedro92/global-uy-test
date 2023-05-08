import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BtnColorEnum, BtnColorType} from "../../enum/btn-color.enum";

@Component({
  selector: 'app-guy-button-loading',
  templateUrl: './guy-button-loading.component.html',
  styleUrls: ['./guy-button-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuyButtonLoadingComponent {

  @Input() loading!: boolean
  @Input() disable!: boolean
  @Input() text: string = 'Boton'
  @Input() textLoading: string = 'Espere...'
  @Input() color: BtnColorType = BtnColorEnum.DARK

  @Output() clickButton = new EventEmitter<boolean>();

  onClick() {
    this.clickButton.emit(true);
  }

}
