import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'guy-form-field-select',
  templateUrl: './guy-form-field-select.component.html',
  styleUrls: ['./guy-form-field-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuyFormFieldSelectComponent {

  @Input() control: FormControl = new FormControl<any>({});
  @Input() error = 'Campo requerido *';
  @Input() hintText = '';
  @Input() label = 'Label';
  @Input() list: { key: string, value: any }[] = [];

  @Output() onSelect: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  select({value}: any) {
    this.onSelect.emit(value);
  }

}
