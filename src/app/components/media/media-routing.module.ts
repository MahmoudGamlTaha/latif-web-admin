import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/app/shared/service/dashboard-services/AuthorizeGuard';
import { MediaComponent } from './subscription/media.component';

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthorizeGuard],

    children: [
      {
        path: '',
        component: MediaComponent,
        data: {
          title: "subscription",
          breadcrumb: "subscription"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
