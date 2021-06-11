import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMenuComponent } from './reportsXD/list-menu.component';
import { CreateMenuComponent } from './reportsReasons/create-menu.component';

const routes: Routes = [
  {
    path: '',
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
