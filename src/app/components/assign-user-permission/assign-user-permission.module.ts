import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignUserPermissionRoutingModule } from './assign-user-permission-routing.module';
import { RoleIdComponent } from './role-id/role-id.component';
import { CreateAssignRoleComponent } from './create-assign-role/create-assign-role.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [RoleIdComponent, CreateAssignRoleComponent],
  imports: [
    CommonModule,
    AssignUserPermissionRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,NgbModule,
  ]
})
export class AssignUserPermissionModule { }
