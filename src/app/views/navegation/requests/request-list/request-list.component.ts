import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RequestListMeta as Meta} from "./request-list.meta";
import {Observable} from "rxjs";
import {IRequestModel} from "../../../../core/domain/request.model";
import {AppAuthService} from "../../../../shared/services/app-auth.service";

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

  constructor(
    private appAuthService: AppAuthService
  ) {
  }

  ngOnInit(): void {
    this._getRequests();
  }

  private _getRequests() {
    this.requests$ = this.appAuthService.requests$;
  }

}
