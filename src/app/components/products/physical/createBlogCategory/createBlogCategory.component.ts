import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { category } from 'src/app/shared/models/category';
import { BlogsService } from 'src/app/shared/service/dashboard-services/Blogs.service';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { UploadFileComponent} from 'src/app/components/upload-file/upload-file.component';
import { CloudinaryUploadService } from 'src/app/shared/service/upload/cloudinary.service';
import { FileUploadModule } from 'ng2-file-upload';


@Component({
  selector: 'app-createBlogCategory',
  templateUrl: './createBlogCategory.component.html',
  styleUrls: ['./createBlogCategory.component.scss']
})
export class createBlogCategoryComponent implements OnInit {
  
  public categoryForm: FormGroup;
  categoryList: any;
  uploader:FileUploadModule;
   iconUpload:string = null;
   iconSelectUpload:string = null;
  constructor(private BlogsSer: BlogsService,private router : Router ,
    private formBuilder: FormBuilder, private uploadService:CloudinaryUploadService) {
    
  }

  ngOnInit() {
    this.uploader = this.uploadService.getUploader();
    this.categoryForm = this.formBuilder.group({
      active: [true, [Validators.required]],
      parentCategory: [0],
      external_link: [true],
      icon: [''],
      icon_select: [''],
      name: ['', [Validators.required]],
      nameAr: ['', [Validators.required]],
      // type: ['', [Validators.required]],
      description: [''],
    });
  }
  public setIconSelect(value){
   this.iconSelectUpload = value.url;
  }
public setIcon(value){
    this.iconUpload  = value.url;
  }
  get active() {
    return this.categoryForm.get('active');
  }
  // get catParent() {
  //   return this.categoryForm.get('catParent');
  // }
  get external_link() {
    return this.categoryForm.get('external_link');
  }
  get icon() {
    return this.categoryForm.get('icon');
  }
  get icon_select() {
    return this.categoryForm.get('icon_select');
  }
  get name() {
    return this.categoryForm.get('name');
  }
  get nameAr() {
    return this.categoryForm.get('nameAr');
  }
  // get type() {
  //   return this.categoryForm.get('type');
  // }
    get description() {
    return this.categoryForm.get('description');
  }
  hasUnsavedData():boolean{
    return this.iconSelectUpload != null || this.iconUpload != null;
  }
  create() {
    if (!this.categoryForm.valid) {
      return;
    }
    console.log(this.categoryForm.value)
    let formValue = this.categoryForm.value;
    let Category: category = new category();
    Category.active = formValue.active;
    // Category.parentCategory = formValue.parentCategory;
    Category.external_link = formValue.external_link;
    Category.icon = this.iconUpload;
    Category.icon_select = this.iconSelectUpload;
    Category.name = formValue.name;
    Category.nameAr = formValue.nameAr;
    // Category.type = formValue.type;
    Category.description = formValue.description;
    console.log(Category)
    this.BlogsSer.createBlogCategory(Category).subscribe(
      (data: any) => {
        this.router.navigate(['/products/blogs/blog-category/']);
      }, (err) => { console.log("err", err) }
    )
  }


}
