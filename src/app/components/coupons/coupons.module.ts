import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CouponsRoutingModule } from './coupons-routing.module';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [ListCouponComponent, CreateCouponComponent, StatusComponent],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NgxDatatableModule,FormsModule 
  ]
})
export class CouponsModule { }
