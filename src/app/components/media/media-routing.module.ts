import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaComponent } from './subscription/media.component';

const routes: Routes = [
  {
    path: '',
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
