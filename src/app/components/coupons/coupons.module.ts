import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CouponsRoutingModule } from './coupons-routing.module';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StatusComponent } from './status/status.component';
import { CreateAdsComponent } from './create-ads/create-ads.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListCouponComponent, CreateCouponComponent, StatusComponent, CreateAdsComponent],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
  ]
})
export class CouponsModule { }
