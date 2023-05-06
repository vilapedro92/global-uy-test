import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-guy-form-field-input',
  templateUrl: './guy-form-field-input.component.html',
  styleUrls: ['./guy-form-field-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuyFormFieldInputComponent {

  @Input() control: FormControl = new FormControl<any>({});
  @Input() error = 'Campo requerido *';
  @Input() haveIcon = false;
  @Input() hintText = '';
  @Input() icon!: string;
  @Input() label = 'Label';
  @Input() placeholder!: string;
  @Input() type = 'text';

}
