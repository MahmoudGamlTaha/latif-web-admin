import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { roleListComponent } from './roleList.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { roleListRoutingModule } from './roleList-routing.module';

@NgModule({
  declarations: [roleListComponent],
  imports: [
    CommonModule,
    ChartsModule,
    Ng2GoogleChartsModule,
    NgxChartsModule,
    ChartistModule,
    roleListRoutingModule,
    Ng2SmartTableModule,NgbModule,
  ]
})
export class roleListModule { }
