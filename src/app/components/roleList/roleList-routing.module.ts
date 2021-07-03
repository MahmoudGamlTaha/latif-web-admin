import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { roleListComponent } from './roleList.component';


const routes: Routes = [
  {
    path: '',
    component: roleListComponent,
    data: {
      title: "Role List",
      breadcrumb: "Role"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class roleListRoutingModule { }
