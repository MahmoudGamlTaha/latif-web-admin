import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAssUserPermissionComponent } from './ass-user-per/create-ass-user-permission/create-ass-user-permission.component';
import { ReportsComponent } from './reports.component';


const routes: Routes = [
  { path: '',
    children: [
  {
    path: 'role/rolelist',
    component: ReportsComponent,
    data: {
      title: "Role List",
      breadcrumb: "Role"
    }
  },
  {
    path: 'role/create-a-user',
    component: CreateAssUserPermissionComponent,
    data: {
      title: "Create AUser",
      breadcrumb: "Create AUser"
    }
  },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
