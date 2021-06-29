import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MenusRoutingModule } from './menus-routing.module';
import { reportsXDComponent } from './reportsXD/reportsXD.component';
import { reportsReasonsComponent } from './reportsReasons/reportsReasons.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CreateReasonComponent } from './create-reason/create-reason.component';
import { UpdateReasonComponent } from './update-reason/update-reason.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [reportsXDComponent, reportsReasonsComponent, CreateReasonComponent, UpdateReasonComponent],
  imports: [
    CommonModule,
    MenusRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,

  ]
})
export class MenusModule { }
