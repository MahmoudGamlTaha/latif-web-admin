import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SalesRoutingModule } from './sales-routing.module';
import { TransactionsComponent } from './category/transactions.component';
import { OrdersComponent } from './categoryList/orders.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [OrdersComponent, TransactionsComponent, CreateCategoryComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    // FormGroup,
    NgbModule,
  ]
})
export class SalesModule { }
