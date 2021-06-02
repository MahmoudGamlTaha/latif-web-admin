import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './physical/category/category.component';
import { SubCategoryComponent } from './physical/sub-category/sub-category.component';
import { ProductListComponent } from './physical/product-list/product-list.component';
import { AddProductComponent } from './physical/add-product/add-product.component';
import { DigitalCategoryComponent } from './digital/digital-category/digital-category.component';
import { DigitalSubCategoryComponent } from './digital/digital-sub-category/digital-sub-category.component';
import { DigitalListComponent } from './digital/digital-list/digital-list.component';
import { DigitalAddComponent } from './digital/digital-add/digital-add.component';
import { ProductDetailComponent } from './physical/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'blogs/bloglist',
        component: CategoryComponent,
        data: {
          title: "blog List",
          breadcrumb: "blog List"
        }
      },
      {
        path: 'blogs/blogcategory',
        component: SubCategoryComponent,
        data: {
          title: "blog Category",
          breadcrumb: "blog Category"
        }
      },
      // {
      //   path: 'physical/product-list',
      //   component: ProductListComponent,
      //   data: {
      //     title: "Product List",
      //     breadcrumb: "Product List"
      //   }
      // },
      {
        path: 'blogs/product-detail',
        component: ProductDetailComponent,
        data: {
          title: "Product Detail",
          breadcrumb: "Product Detail"
        }
      },
      // {
      //   path: 'physical/add-product',
      //   component: AddProductComponent,
      //   data: {
      //     title: "Add Products",
      //     breadcrumb: "Add Product"
      //   }
      // },
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
