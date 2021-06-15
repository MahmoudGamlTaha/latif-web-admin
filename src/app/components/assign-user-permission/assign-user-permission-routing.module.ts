import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleIdComponent } from './role-id/role-id.component';

const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'role-id',
        component: RoleIdComponent,
        data: {
          title: "role id",
          breadcrumb: "role id"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignUserPermissionRoutingModule { }
