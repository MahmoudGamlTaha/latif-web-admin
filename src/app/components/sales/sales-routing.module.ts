import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './category/transactions.component';
import { OrdersComponent } from './categoryList/orders.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'categorylist',
        component: OrdersComponent,
        data: {
          title: "Category List",
          breadcrumb: "Category List"
        }
      },
      {
        path: 'categorytype/:id/:typeName',
        component: TransactionsComponent,
        data: {
          title: "Category Type",
          breadcrumb: "Category Type"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
