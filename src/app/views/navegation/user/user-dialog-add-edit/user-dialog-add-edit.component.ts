import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoleClassMeta} from "../../../../shared/class/role.class.meta";
import {CargoClassMeta} from "../../../../shared/class/cargo.class.meta";
import {AppAuthService} from "../../../../shared/services/app-auth.service";
import {IUser} from "../../../../core/domain/user.model";

export interface SessionFormControl {
  name: FormControl,
  email: FormControl,
  ci: FormControl,
  cargo: FormControl,
  role: FormControl,
  id: FormControl,
}


@Component({
  selector: 'app-user-dialog-add-edit',
  templateUrl: './user-dialog-add-edit.component.html',
  styleUrls: ['./user-dialog-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDialogAddEditComponent implements OnInit {

  roles = RoleClassMeta.roles.map(el => ({key: el.name, value: el.name}));
  cargos = CargoClassMeta.cargos.map(el => ({key: el.name, value: el.name}));

  formGroup: FormGroup<SessionFormControl> = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      ci: new FormControl('', Validators.required),
      cargo: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      id: new FormControl(),
    }
  )

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserDialogAddEditComponent>,
    private appAuthService: AppAuthService,
  ) {
  }

  ngOnInit(): void {
    if (!this.data.isNew) {
      this.formGroup.patchValue({
        ci: this.data.data.ci,
        cargo: this.data.data.cargo,
        email: this.data.data.email,
        role: this.data.data.role,
        name: this.data.data.name,
        id: this.data.data.id
      })
    }
  }

  save(event: any) {
    if (!this.formGroup.valid) {
      return
    }

    this.data.isNew ?
      this.appAuthService.addUser({...this.formGroup.value, id: this.appAuthService.getNewId()} as IUser) :
      this.appAuthService.editUser({...this.formGroup.value} as IUser);

    this.dialogRef.close();
  }

}
