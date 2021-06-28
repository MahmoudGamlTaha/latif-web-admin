import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/app/shared/service/dashboard-services/AuthorizeGuard';
import { updateXDComponent } from './updateXD/updateXD.component';
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
        component: updateXDComponent,
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
