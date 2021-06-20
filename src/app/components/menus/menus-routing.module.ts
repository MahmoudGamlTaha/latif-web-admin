import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMenuComponent } from './reportsXD/list-menu.component';
import { CreateMenuComponent } from './reportsReasons/create-menu.component';
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
        component: ListMenuComponent,
        data: {
          title: "Menu Lists",
          breadcrumb: "Menu Lists"
        }
      },
      {
        path: 'reports-reasons',
        component: CreateMenuComponent,
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
