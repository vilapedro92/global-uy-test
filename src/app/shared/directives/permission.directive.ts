import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {PermissionsService} from "../services/permissions.service";

@Directive({
  selector: '[guyPermission]'
})
export class PermissionDirective {

  constructor(
    private permissionService: PermissionsService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  @Input() set guyPermission(accessType: string[]) {
    const access = accessType[0] === this.permissionService.permissionsList.All ?
      true :
      accessType.some(value => value === this.permissionService.getRole());

    access ?
      this.viewContainer.createEmbeddedView(this.templateRef) :
      this.viewContainer.clear();
  }

}
