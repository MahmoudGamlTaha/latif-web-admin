import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';

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
