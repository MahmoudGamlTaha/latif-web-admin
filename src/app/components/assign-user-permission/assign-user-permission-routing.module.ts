import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAssignRoleComponent } from './create-assign-role/create-assign-role.component';
import { RoleIdComponent } from './role-id/role-id.component';

const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'role-id/:id',
        component: RoleIdComponent,
        data: {
          title: "role id",
          breadcrumb: "role id"
        }
      },{
        path: 'create-role',
        component: CreateAssignRoleComponent,
        data: {
          title: "create role",
          breadcrumb: "create role"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignUserPermissionRoutingModule { }
