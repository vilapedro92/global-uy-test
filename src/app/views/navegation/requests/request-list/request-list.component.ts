import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RequestListMeta as Meta} from "./request-list.meta";
import {Observable, take} from "rxjs";
import {IRequestModel} from "../../../../core/domain/request.model";
import {AppAuthService} from "../../../../shared/services/app-auth.service";
import {NotificationService} from "../../../../shared/services/notification.service";
import {MatDialog} from "@angular/material/dialog";
import {RequestRejectDialogComponent} from "../request-reject-dialog/request-reject-dialog.component";

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestListComponent implements OnInit {

  requests$!: Observable<IRequestModel[]>;

  get tableConfig() {
    return Meta.tableConfig;
  }

  get tableActions() {
    return Meta.actionsList;
  }

  constructor(
    private appAuthService: AppAuthService,
    private matDialog: MatDialog,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this._getRequests();
  }

  resolve(event: any) {
    this.notificationService.openInfo('El pedido ha sido finalizado')
  }

  reject(event: any) {
    return this.matDialog
      .open(RequestRejectDialogComponent, {
        width: '30%',
        disableClose: true,
        data: {}
      }).afterClosed()
      .pipe(take(1))
      .subscribe(res => {
        if (res) this.notificationService.openInfo('El pedido ha sido rechazado')
      })
  }

  private _getRequests() {
    this.requests$ = this.appAuthService.requests$;
  }

}
