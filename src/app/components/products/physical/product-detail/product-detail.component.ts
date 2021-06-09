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

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [NgbRatingConfig]
})
export class ProductDetailComponent implements OnInit {
 
  public blogForm: FormGroup;
  public blogCategoryList;

  createdDateL : string ;

  constructor(private blogSer: BlogsService, private categorySer: CategoryService,private citiesSer: CitesService,
    private formBuilder: FormBuilder,private router: ActivatedRoute){
      this.getblogCategory()

      }



  ngOnInit() {

    this.blogForm = this.formBuilder.group({
      _external : [],
      category : [],
      description : [],
      extrnImage : [],
      title : [],
      userId : ['1'],
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
  typeDropDown(event){

  }

  createBlog(){
    console.log(this.blogForm.value)
    if(!this.blogForm.valid){return;}
    this.blogSer.createBlogList(this.blogForm.value).subscribe(
      (data)=>{console.log(data)},(err)=>{console.log("err",err.message)}
    )
  }

onClickToggle(event){
console.log(event.target.checked)

}

}
