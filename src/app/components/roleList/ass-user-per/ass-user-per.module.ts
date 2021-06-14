import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssUserPerRoutingModule } from './ass-user-per-routing.module';
import { CreateAssUserPermissionComponent } from './create-ass-user-permission/create-ass-user-permission.component';


@NgModule({
  declarations: [CreateAssUserPermissionComponent],
  imports: [
    CommonModule,
    AssUserPerRoutingModule
  ]
})
export class AssUserPerModule { }
