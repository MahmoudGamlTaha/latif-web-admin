import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Description } from '@ks89/angular-modal-gallery';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { adsFilter } from 'src/app/shared/models/adsFilter';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { BlogsService } from 'src/app/shared/service/dashboard-services/Blogs.service';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { CitesService } from 'src/app/shared/service/dashboard-services/cites.service';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';
import { UsersService } from 'src/app/shared/service/dashboard-services/users.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [NgbRatingConfig]
})
export class ProductDetailComponent implements OnInit {

  public blogForm: FormGroup;
  public blogCategoryList;
  userList: any;

  constructor(private blogSer: BlogsService, private userService: UsersService, private categorySer: CategoryService, private citiesSer: CitesService,
    private formBuilder: FormBuilder, private router: ActivatedRoute) {
    this.userService.userList().subscribe(
      (data: any) => {
        this.userList = data.response.data
        console.log(this.userList)
      }, (err) => console.log("err", err)
    )
    this.getblogCategory()
  }

  ngOnInit() {
    this.blogForm = this.formBuilder.group({
      Category:['',[Validators.required]],
      Title: ['',[Validators.required]],
      ExtrnImage: [''],
      UserId: ['',[Validators.required]],
      Description: ['',[Validators.required]],
      External: [''],
    });
  }
  getblogCategory() {
    this.blogSer.getblogCategory().subscribe(
      (data: any) => {
        this.blogCategoryList = data.response.data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  typeDropDown(event) {
    console.log(event.target.value)
  }
  onClickToggle(event) {
    console.log(event.target.checked)
  }
  get Category() {
    return this.blogForm.get('Category');
  }
  get Title() {
    return this.blogForm.get('Title');
  }
  get ExtrnImage() {
    return this.blogForm.get('ExtrnImage');
  }
  get Description() {
    return this.blogForm.get('Description');
  }
  get UserId() {
    return this.blogForm.get('UserId');
  }
  get External() {
    return this.blogForm.get('External');
  }

  create(){

    if(!this.blogForm.valid){return ;}
    console.log(this.blogForm.value)
    this.blogSer.createBlogList(this.blogForm.value).subscribe(
      (data)=>{

        console.log("success")
      },(err)=>{console.log("err",err)}
    )
  }


}
