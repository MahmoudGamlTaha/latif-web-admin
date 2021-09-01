import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { subscriptionComponent } from './subscription-list/subscription.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: '',
};


@NgModule({
  declarations: [subscriptionComponent, CreateSubscriptionComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    DropzoneModule,
    Ng2SmartTableModule, NgbModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class MediaModule { }
