import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/app/shared/service/dashboard-services/AuthorizeGuard';
import { categoryComponent } from './category/category.component';
import { categoryListComponent } from './categoryList/categoryList.component';
import { CreateCategoryComponent } from './create-category/create-category.component';


const routes: Routes = [
  {
    path: '',
    canActivate:[AuthorizeGuard],

    children: [
      {
        path: 'category-list',
        component: categoryListComponent,
        data: {
          title: "Category List",
          breadcrumb: "Category List"
        }
      },
      {
        path: 'category-type/:id/:typeName',
        component: categoryComponent,
        data: {
          title: "Category Type",
          breadcrumb: "Category Type"
        }
      },
      {
        path: 'create-category/:type',
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
