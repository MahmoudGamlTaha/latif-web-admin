import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MenusRoutingModule } from './menus-routing.module';
import { ListMenuComponent } from './reportsXD/list-menu.component';
import { CreateMenuComponent } from './reportsReasons/create-menu.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CreateReasonComponent } from './create-reason/create-reason.component';
import { UpdateReasonComponent } from './update-reason/update-reason.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListMenuComponent, CreateMenuComponent, CreateReasonComponent, UpdateReasonComponent],
  imports: [
    CommonModule,
    MenusRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,

  ]
})
export class MenusModule { }
