import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './components/products/products.module';
import { SalesModule } from './components/categories/sales.module';
import { CouponsModule } from './components/coupons/coupons.module';
import { PagesModule } from './components/pages/pages.module';
import { MediaModule } from './components/subscriptions/media.module';
import { MenusModule } from './components/menus/menus.module';
import { VendorsModule } from './components/vendors/vendors.module';
import { UsersModule } from './components/users/users.module';
import { LocalizationModule } from './components/localization/localization.module';
import { InvoiceModule } from './components/invoice/invoice.module';
import { SettingModule } from './components/setting/setting.module';;
import { roleListModule } from './components/roleList/roleList.module';
import { AuthModule } from './components/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { environment, server } from 'src/environments/environment';
import {CookieService} from 'ngx-cookie-service';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import { ColorsComponent } from './components/vendors/colors/colors.component';
import { EditCategoryComponent } from './app/components/categories/edit-category/edit-category/edit-category.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'latif-app' }),
    AppRoutingModule,
    DashboardModule,
    InvoiceModule,
    SettingModule,
    roleListModule,
    AuthModule,
    SharedModule,
    LocalizationModule,
    ProductsModule,
    SalesModule,
    VendorsModule,
    CouponsModule,
    PagesModule,
    MediaModule,   
    HttpClientModule,
    MenusModule,
    UsersModule,
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: server.cloud_name})
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
