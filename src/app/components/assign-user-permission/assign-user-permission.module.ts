import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignUserPermissionRoutingModule } from './assign-user-permission-routing.module';
import { RoleIdComponent } from './role-id/role-id.component';


@NgModule({
  declarations: [RoleIdComponent],
  imports: [
    CommonModule,
    AssignUserPermissionRoutingModule
  ]
})
export class AssignUserPermissionModule { }
