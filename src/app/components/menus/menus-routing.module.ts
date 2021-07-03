import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { reportsXDComponent } from './reportsXD/reportsXD.component';
import { reportsReasonsComponent } from './reportsReasons/reportsReasons.component';
import { CreateReasonComponent } from './create-reason/create-reason.component';
import { UpdateReasonComponent } from './update-reason/update-reason.component';
import { AuthorizeGuard } from 'src/app/shared/service/dashboard-services/AuthorizeGuard';

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthorizeGuard],

    children: [
      {
        path: 'list-menu',
        component: reportsXDComponent,
        data: {
          title: "Menu Lists",
          breadcrumb: "Menu Lists"
        }
      },
      {
        path: 'reports-reasons',
        component: reportsReasonsComponent,
        data: {
          title: "reports Reasons",
          breadcrumb: "reports Reasons"
        }
      },
      {
        path: 'create-reasons',
        component: CreateReasonComponent,
        data: {
          title: "create Reasons",
          breadcrumb: "create Reasons"
        }
      },
      {
        path: 'update-reasons/:id/:reason/:reasonAr',
        component: UpdateReasonComponent,
        data: {
          title: "update Reasons",
          breadcrumb: "update Reasons"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
