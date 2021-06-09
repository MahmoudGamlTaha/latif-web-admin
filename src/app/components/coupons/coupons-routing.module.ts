import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { CreateAdsComponent } from './create-ads/create-ads.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'createads',
        component: CreateAdsComponent,
        data: {
          title: "create Ads",
          breadcrumb: "create Ads"
        }
      },
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
