import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {BtnColorEnum} from "../../../../shared/enum/btn-color.enum";
import {AppAuthService} from "../../../../shared/services/app-auth.service";
import {MatDialog} from "@angular/material/dialog";
import {NotificationService} from "../../../../shared/services/notification.service";
import {IProduct} from "../../../../core/domain/product.model";
import {ProductListMeta as Meta} from "./product-list.meta";
import {ProductDialogAddEditComponent} from "../product-dialog-add-edit/product-dialog-add-edit.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$!: Observable<IProduct[]>;

  search!: string;

  get btnColor() {
    return BtnColorEnum
  }

  get tableConfig() {
    return Meta.tableConfig;
  }

  get tableActions() {
    return Meta.actionsList;
  }

  constructor(
    private appAuthService: AppAuthService,
    private cdr: ChangeDetectorRef,
    private matDialog: MatDialog,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this._getProducts();
  }

  applyFilter(event: Event) {
    this.search = (event.target as HTMLInputElement).value === "" ?
      " " :
      (event.target as HTMLInputElement).value;
  }

  onDelete(event: any) {
    this.appAuthService.removeProduct(event);
    this.notificationService.openInfo('Producto eliminado')
  }

  openInfoDialog(isNew = true, data?: any) {
    return this.matDialog
      .open(ProductDialogAddEditComponent, {
        width: '40%',
        disableClose: true,
        data: {isNew, data}
      }).afterClosed()
      .pipe(take(1))
      .subscribe(res => {
        if (res) this.notificationService.openInfo(isNew ? 'Ha sido agregado el producto' : 'Ha sido actualizado el producto')
      })
  }

  private _getProducts() {
    this.products$ = this.appAuthService.products$;
  }

}
