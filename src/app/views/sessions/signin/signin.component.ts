import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppAuthService} from "../../../shared/services/app-auth.service";
import {finalize, take, tap} from "rxjs";
import {NotificationService} from "../../../shared/services/notification.service";
import {UserInterface} from "../../../shared/interfaces/user.interface";
import {Router} from "@angular/router";
import {GuySocialAuthService} from "../../../shared/services/guy-social-auth.service";
import {PermissionsService} from "../../../shared/services/permissions.service";

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
    private permissionsService: PermissionsService,
    private router: Router,
    private guySocialAuthService: GuySocialAuthService,
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
    this.appAuth.signing(username, password)
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

  signinWithGoogle() {
    this.guySocialAuthService.signinWithGoogle()
      .subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
  }

  private _saveUserInSession(user: UserInterface) {
    if (user) {
      const {password, ...rest} = user;
      sessionStorage.setItem('user', JSON.stringify(rest));
    }
  }

  private _goToDashboard(user: UserInterface) {
    this.permissionsService.isAdmin() ?
      this.router.navigate(['/users/list']) :
      this.router.navigate(['/product/list']);
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
