import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPermissionRoutingModule } from './user-permission-routing.module';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';

@NgModule({
  declarations: [CreatePermissionComponent, PermissionListComponent,UpdatePermissionComponent],
  imports: [
    CommonModule,
    UserPermissionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SmartTableModule,
  ]
})
export class UserPermissionModule { }
