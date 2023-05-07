import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {BtnColorEnum, BtnColorType} from "../../enum/btn-color.enum";

@Component({
  selector: 'app-guy-button',
  templateUrl: './guy-button.component.html',
  styleUrls: ['./guy-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuyButtonComponent {

  @Input() text: string = 'Button'
  @Input() icon!: string
  @Input() disabled: boolean = false
  @Input() color: BtnColorType = BtnColorEnum.LIGHT;

  @Output() clickButton = new EventEmitter<boolean>();

  onClick() {
    this.clickButton.emit(true);
  }

}
