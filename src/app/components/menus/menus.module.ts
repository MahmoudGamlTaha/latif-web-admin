import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MenusRoutingModule } from './menus-routing.module';
import { ListMenuComponent } from './reportsXD/list-menu.component';
import { CreateMenuComponent } from './reportsReasons/create-menu.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [ListMenuComponent, CreateMenuComponent],
  imports: [
    CommonModule,
    MenusRoutingModule,
    Ng2SmartTableModule,

  ]
})
export class MenusModule { }
