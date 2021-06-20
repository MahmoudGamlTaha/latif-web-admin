import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/app/shared/service/dashboard-services/AuthorizeGuard';
import { CreateCouponComponent } from './updateXD/create-coupon.component';
import { ListCouponComponent } from './XDList/list-coupon.component';

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthorizeGuard],
    children: [
      {
        path: 'adslist',
        component: ListCouponComponent,
        data: {
          title: "Ads List",
          breadcrumb: "Ads List"
        }
      },
      {
        path: 'updateads/:id',
        component: CreateCouponComponent,
        data: {
          title: "update Ads",
          breadcrumb: "update Ads"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponsRoutingModule { }
