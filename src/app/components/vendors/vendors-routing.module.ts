import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVendorsComponent } from './list-vendors/list-vendors.component';
import { CreateVendorsComponent } from './policy/create-vendors.component';


const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'list-vendors',
      //   component: ListVendorsComponent,
      //   data: {
      //     title: "Vendor List",
      //     breadcrumb: "Vendor List"
      //   }
      // },
      {
        path: 'policy',
        component: CreateVendorsComponent,
        data: {
          title: "policy",
          breadcrumb: "policy"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VendorsRoutingModule { }
