import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppAuthService} from "../../../../shared/services/app-auth.service";
import {IUser} from "../../../../core/domain/user.model";

export interface RequestRejectFormControl {
  text: FormControl,
}


@Component({
  selector: 'app-request-reject-dialog',
  templateUrl: './request-reject-dialog.component.html',
  styleUrls: ['./request-reject-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestRejectDialogComponent {

  formGroup: FormGroup<RequestRejectFormControl> = new FormGroup(
    {
      text: new FormControl('', Validators.required),
    }
  )

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RequestRejectDialogComponent>
  ) {
  }

  save() {
    if (!this.formGroup.valid) {
      return
    }

    this.dialogRef.close(true);
  }

}
