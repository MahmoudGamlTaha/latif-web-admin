import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'updatecategory/:categoryid/:typename/:id',
        component: CreateCategoryComponent,
        data: {
          title: "update Category",
          breadcrumb: "update Category"
        }
      }, {
        path: 'createcategory',
        component: CreateCategoryComponent,
        data: {
          title: "create Category",
          breadcrumb: "create Category"
        }
      },
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
