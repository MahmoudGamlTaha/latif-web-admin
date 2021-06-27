import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { category } from 'src/app/shared/models/category';
import { BlogsService } from 'src/app/shared/service/dashboard-services/Blogs.service';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { productDB } from 'src/app/shared/tables/product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public categoryForm: FormGroup;
  categoryList: any;

  constructor(private categorySer: CategoryService,private BlogsSer: BlogsService,private router : Router ,
    private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {

    this.categorySer.getCategoryList().subscribe((data:any)=>{
      console.log(data)
      this.categoryList=data.response.data;

    })

    this.categoryForm = this.formBuilder.group({
      active: [Boolean, [Validators.required]],
      catParent: [0],
      externalLink: [Boolean],
      icon: [''],
      icon_select: [''],
      name: ['', [Validators.required]],
      nameAr: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }
  
  typeDropDown(event) {
    console.log(event.target.value)
  }
  onClickToggle(event) {
    console.log(event.target.checked)
  }
  get active() {
    return this.categoryForm.get('active');
  }
  // get catParent() {
  //   return this.categoryForm.get('catParent');
  // }
  get externalLink() {
    return this.categoryForm.get('externalLink');
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
  get type() {
    return this.categoryForm.get('type');
  }
  
  create() {
    if (!this.categoryForm.valid) {
      return;
    }
    console.log(this.categoryForm.value)
    let formValue = this.categoryForm.value;
    let Category: category = new category();
    Category.active = formValue.active;
    // Category.catParent = formValue.catParent;
    Category.externalLink = formValue.externalLink;
    Category.icon = formValue.icon;
    Category.icon_select = formValue.icon_select;
    Category.name = formValue.name;
    Category.nameAr = formValue.nameAr;
    Category.type = formValue.type;

    console.log(Category)
    this.categorySer.createCategory(Category).subscribe(
      (data: any) => {
        this.router.navigate(['/products/blogs/blog-category/']);
      }, (err) => { console.log("err", err) }
    )
  }


}
