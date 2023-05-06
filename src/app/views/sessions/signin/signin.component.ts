import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppAuthService} from "../../../shared/services/app-auth.service";
import {finalize, take, tap} from "rxjs";
import {NotificationService} from "../../../shared/services/notification.service";
import {UserInterface} from "../../../shared/interfaces/user.interface";
import {Router} from "@angular/router";

export interface SessionFormControl {
  username: FormControl,
  password: FormControl,
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent {

  formGroup: FormGroup<SessionFormControl> = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  loading: boolean = false;

  constructor(
    private appAuth: AppAuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  signin() {
    const [username, password] = [this.formGroup.controls.username.value, this.formGroup.controls.password.value];

    if (!username || !password) {
      this._formNotValid();
      return
    }

    this.loading = true;
    this.appAuth.signin(username, password)
      .pipe(
        tap((user: UserInterface) => this._saveUserInSession(user)),
        finalize(() => this.loading = false),
        take(1),
      )
      .subscribe({
        next: user => {
          user ? this._goToDashboard(user) : this._userNotLegal()
        },
        error: err => {
          this._errorService(err);
        },
      })
  }

  private _saveUserInSession(user: UserInterface) {
    const {password, ...rest} = user;
    sessionStorage.setItem('user', JSON.stringify(rest));
  }

  private _goToDashboard(user: UserInterface) {
    // TODO poner la ruta, verificar rol para determinar la ruta.
    this.router.navigate(['/'])
  }

  private _formNotValid() {
    this.notificationService.openInfo('Complete los campos requeridos *')
  }

  private _userNotLegal() {
    this.notificationService.openInfo('Sus credenciales son incorrectas!')
  }

  private _errorService<T>(err: T) {
    this.notificationService.openInfo(`Error ${err}`)
  }

}
