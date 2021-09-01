import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'products',
    loadChildren: () => import('../../components/products/products.module').then(m => m.ProductsModule),
    data: {
      breadcrumb: "blog"
    }
  },
  {
    path: 'category',
    loadChildren: () => import('../../components/categories/sales.module').then(m => m.SalesModule),
    data: {
      breadcrumb: "category"
    }
  },
  {
    path: 'ads',
    loadChildren: () => import('../../components/coupons/coupons.module').then(m => m.CouponsModule),
    data: {
      breadcrumb: "ADS"
    }
  },
  {
    path: 'pages',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: "Pages"
    }
  },
  {
    path: 'subscription',
    loadChildren: () => import('../../components/subscriptions/media.module').then(m => m.MediaModule),
  },
  {
    path: 'reports',
    loadChildren: () => import('../../components/menus/menus.module').then(m => m.MenusModule),
    data: {
      breadcrumb: "Reports"
    }
  },
  {
    path: 'users',
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    data: {
      breadcrumb: "Users"
    }
  },
  {
    path: 'configuration',
    loadChildren: () => import('../../components/vendors/vendors.module').then(m => m.VendorsModule),
    data: {
      breadcrumb: "configuration"
    }
  },
  {
    path: 'localization',
    loadChildren: () => import('../../components/localization/localization.module').then(m => m.LocalizationModule),
    data: {
      breadcrumb: "Localization"
    }
  },
  {
    path: 'role',
    loadChildren: () => import('../../components/roleList/roleList.module').then(m => m.roleListModule),
  
  },
  {
    path: 'assignpermission',
    loadChildren: () => import('../../components/assign-user-permission/assign-user-permission.module').then(m => m.AssignUserPermissionModule),
  
  },
  {
    path: 'user-permission',
    loadChildren: () => import('../../components/user-permission/user-permission.module').then(m => m.UserPermissionModule),
  
  },
  {
    path: 'settings',
    loadChildren: () => import('../../components/setting/setting.module').then(m => m.SettingModule),
    data: {
      breadcrumb: "Settings"
    }
  },
  {
    path: 'invoice',
    loadChildren: () => import('../../components/invoice/invoice.module').then(m => m.InvoiceModule),
    data: {
      breadcrumb: "Invoice"
    }
  }
];