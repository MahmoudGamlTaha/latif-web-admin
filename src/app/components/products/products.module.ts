import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ngx-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsRoutingModule } from './products-routing.module';
import { UpdateBlogComponent } from './physical/blog/update-blog.component';
import { DigitalCategoryComponent } from './digital/digital-category/digital-category.component';
import { DigitalSubCategoryComponent } from './digital/digital-sub-category/digital-sub-category.component';
import { DigitalListComponent } from './digital/digital-list/digital-list.component';
import { DigitalAddComponent } from './digital/digital-add/digital-add.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { CreateBlogComponent } from './physical/createBlog/create-blog.component';
import { SubCategoryComponent } from './physical/blogCategory/sub-category.component';
import { blogListComponent } from './physical/blogList/blog-list.component';
import { createBlogCategoryComponent } from './physical/createBlogCategory/createBlogCategory.component';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadFileComponent } from '../upload-file/upload-file.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://highcoder.com',
};



@NgModule({
  declarations: [blogListComponent, SubCategoryComponent, createBlogCategoryComponent, UpdateBlogComponent, DigitalCategoryComponent, DigitalSubCategoryComponent, DigitalListComponent, DigitalAddComponent, CreateBlogComponent, UploadFileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    ProductsRoutingModule,
    Ng2SmartTableModule,
    NgbModule,
    DropzoneModule,
    FileUploadModule,
    GalleryModule.forRoot()
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    NgbActiveModal
  ]
})
export class ProductsModule { }
