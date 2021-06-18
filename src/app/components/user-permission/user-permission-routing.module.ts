import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "create-permission",
        component: CreatePermissionComponent ,
        data: {
          title: "create permission",
          breadcrumb: "create permission"
        }
      },
      {
        path: "permission-list",
        component: PermissionListComponent ,
        data: {
          title: "permission list",
          breadcrumb: "permission list"
        }
      },
      {
        path: "update-permission/:id",
        component: UpdatePermissionComponent ,
        data: {
          title: "update permission",
          breadcrumb: "update permission"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPermissionRoutingModule { }
