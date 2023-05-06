import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'guy-form-field-input-password',
  templateUrl: './guy-form-field-input-password.component.html',
  styleUrls: ['./guy-form-field-input-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuyFormFieldInputPasswordComponent implements OnInit {

  private _cdr = inject(ChangeDetectorRef);

  @Input() control: FormControl = new FormControl<any>({});
  @Input() hintText = '';
  @Input() label = 'Password';
  @Input() validatePassword = false;
  @Input() validatePasswordRepeat = false;

  icon: 'visibility' | 'visibility_off' = 'visibility_off';
  type: 'text' | 'password' = 'password';
  show = false;

  ngOnInit() {
    // if (this.validatePassword) {
    //   this.control.addValidators(passwordValidator);
    //   this.control.updateValueAndValidity();
    // this._cdr.detectChanges();
    // }
  }

  showPassword() {
    this.show = !this.show;
    this.icon = this.show ? 'visibility' : 'visibility_off';
    this.type = this.show ? 'text' : 'password';
    this._cdr.detectChanges();
  }

}
