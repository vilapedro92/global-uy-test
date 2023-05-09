import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppAuthService} from "../../../../shared/services/app-auth.service";
import {IUser} from "../../../../core/domain/user.model";
import {IProduct} from "../../../../core/domain/product.model";

export interface ProductsFormControl {
  name: FormControl,
  id: FormControl
}

@Component({
  selector: 'app-product-dialog-add-edit',
  templateUrl: './product-dialog-add-edit.component.html',
  styleUrls: ['./product-dialog-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDialogAddEditComponent implements OnInit {

  formGroup: FormGroup<ProductsFormControl> = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      id: new FormControl(),
    }
  )

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductDialogAddEditComponent>,
    private appAuthService: AppAuthService,
  ) {
  }

  ngOnInit(): void {
    if (!this.data.isNew) {
      this.formGroup.patchValue({
        name: this.data.data.name,
        id: this.data.data.id
      })
    }
  }

  save() {
    if (!this.formGroup.valid) {
      return
    }

    this.data.isNew ?
      this.appAuthService.addProducts({
        ...this.formGroup.value,
        id: this.appAuthService.getNewProductId()
      } as IProduct) :
      this.appAuthService.editProducts({...this.formGroup.value} as IProduct);

    this.dialogRef.close(true);
  }

}
