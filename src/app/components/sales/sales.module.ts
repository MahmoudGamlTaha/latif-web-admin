import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SalesRoutingModule } from './sales-routing.module';
import { categoryComponent } from './category/category.component';
import { categoryListComponent } from './categoryList/categoryList.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { FileUploadModule } from 'ng2-file-upload';
import { updateXDComponent } from '../coupons/updateXD/updateXD.component';
import { ProductsModule } from '../products/products.module';
import { FileUploaderComponent } from 'src/app/shared/components/upload-file/file-uploader.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [categoryListComponent, categoryComponent, CreateCategoryComponent, FileUploaderComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FileUploadModule,
    // FormGroup,
    NgbModule,
  ],
}) 
export class SalesModule { }
