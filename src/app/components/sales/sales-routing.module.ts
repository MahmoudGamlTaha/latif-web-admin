import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './category/transactions.component';
import { OrdersComponent } from './categoryList/orders.component';
import { CreateCategoryComponent } from './create-category/create-category.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'category-list',
        component: OrdersComponent,
        data: {
          title: "Category List",
          breadcrumb: "Category List"
        }
      },
      {
        path: 'category-type/:id/:typeName',
        component: TransactionsComponent,
        data: {
          title: "Category Type",
          breadcrumb: "Category Type"
        }
      },
      {
        path: 'create-category',
        component: CreateCategoryComponent,
        data: {
          title: "create Category",
          breadcrumb: "create Category"
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
