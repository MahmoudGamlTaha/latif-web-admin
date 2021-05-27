import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';


const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
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
export class ReportsRoutingModule { }
