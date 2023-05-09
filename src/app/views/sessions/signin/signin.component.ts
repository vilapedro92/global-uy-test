import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppAuthService} from "../../../shared/services/app-auth.service";
import {finalize, Subject, take, takeUntil, tap} from "rxjs";
import {NotificationService} from "../../../shared/services/notification.service";
import {UserInterface} from "../../../shared/interfaces/user.interface";
import {Router} from "@angular/router";
import {PermissionsService} from "../../../shared/services/permissions.service";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {RoleEnum} from "../../../shared/enum/role.enum";

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
export class SigninComponent implements OnInit, OnDestroy {

  formGroup: FormGroup<SessionFormControl> = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  loading: boolean = false;

  private _disposed$ = new Subject<void>();

  constructor(
    private appAuth: AppAuthService,
    private authService: SocialAuthService,
    private cdr: ChangeDetectorRef,
    private permissionsService: PermissionsService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.signinWithGoogle();
  }

  ngOnDestroy() {
    this._disposed$.complete();
    this._disposed$.next()
  }

  signin() {
    const [username, password] = [this.formGroup.controls.username.value, this.formGroup.controls.password.value];

    if (!username || !password) {
      this._formNotValid();
      return
    }

    this.loading = true;
    this.cdr.detectChanges();
    this.appAuth.signing(username, password)
      .pipe(
        tap((user: UserInterface) => this._saveUserInSession(user)),
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        }),
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
    this.authService.authState
      .pipe(
        takeUntil(this._disposed$),
      )
      .subscribe((user) => {
        this._saveUserGoogleInSession(user);
      });
  }

  private _saveUserInSession(user: UserInterface) {
    if (user) {
      const {password, ...rest} = user;
      sessionStorage.setItem('user', JSON.stringify(rest));
    }
  }

  private _saveUserGoogleInSession(user: SocialUser) {
    if (user) {
      const {email} = user;
      sessionStorage.setItem('user', JSON.stringify({email, role: RoleEnum.Administrador}));
      sessionStorage.setItem('isGoogle', 'true');
      setTimeout(() => this.router.navigate(['/users/list']), 0)
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
