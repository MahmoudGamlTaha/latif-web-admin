import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';

const routes: Routes = [
  {
    path: '',
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
