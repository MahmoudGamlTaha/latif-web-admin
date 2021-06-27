import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './physical/createBlogCategory/product-list.component';
import { UpdateBlogComponent } from './physical/blog/update-blog.component';
import { CategoryComponent } from './physical/blogList/category.component';
import { SubCategoryComponent } from './physical/blogCategory/sub-category.component';
import { CreateBlogComponent } from './physical/createBlog/create-blog.component';
import { AuthorizeGuard } from 'src/app/shared/service/dashboard-services/AuthorizeGuard';

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthorizeGuard],

    children: [
      {
        path: 'blogs/blog-list',
        component: CategoryComponent,
        data: {
          title: "blog List",
          breadcrumb: "blog List"
        }
      },
      {
        path: 'blogs/blog-category',
        component: SubCategoryComponent,
        data: {
          title: "blog Category",
          breadcrumb: "blog Category"
        }
      },
      {
        path: 'blogs/create-blogCategory',
        component: ProductListComponent,
        data: {
          title: "create category",
          breadcrumb: "create category"
        }
      },
      {
        path: 'blogs/create-blog',
        component: CreateBlogComponent,
        data: {
          title: "create blog",
          breadcrumb: "create blog"
        }
      },
      {
        path: 'blogs/update-blog/:id',
        component: UpdateBlogComponent,
        data: {
          title: "update blog",
          breadcrumb: "update blog"
        }
      },
      // {
      //   path: 'digital/digital-category',
      //   component: DigitalCategoryComponent,
      //   data: {
      //     title: "Category",
      //     breadcrumb: "Category"
      //   }
      // },
      // {
      //   path: 'digital/digital-sub-category',
      //   component: DigitalSubCategoryComponent,
      //   data: {
      //     title: "Sub Category",
      //     breadcrumb: "Sub Category"
      //   }
      // },
      // {
      //   path: 'digital/digital-product-list',
      //   component: DigitalListComponent,
      //   data: {
      //     title: "Product List",
      //     breadcrumb: "Product List"
      //   }
      // },
      // {
      //   path: 'digital/digital-add-product',
      //   component: DigitalAddComponent,
      //   data: {
      //     title: "Add Products",
      //     breadcrumb: "Add Product"
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
