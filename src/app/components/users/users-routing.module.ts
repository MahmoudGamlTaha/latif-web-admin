import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthorizeGuard } from 'src/app/shared/service/dashboard-services/AuthorizeGuard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ContentLayoutComponent } from 'src/app/shared/layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthorizeGuard],
    children: [
      {
        path: 'list-user',
        component: ListUserComponent,
        data: {
          title: "User List",
          breadcrumb: "User List"
        }
      },
      {
        path: 'users/user-details/:id',
        component: UserDetailsComponent,
        data: {
          title: "User Details",
          breadcrumb: "User/User Details"
        }
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: {
          title: "Create User",
          breadcrumb: "Create User"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
