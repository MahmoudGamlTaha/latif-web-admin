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
  public typeList;

  external: boolean;
  typeId: number=0;
  type: string;
  description: string;
  image:[];
  userId : number =1;


  categoryId: number;
  category: string;

  categoryList;


  images : [];
  path : number;

  createdDateL : string ;

  constructor(private adsSer:AdsService,private blogSer: BlogsService, private categorySer: CategoryService,private citiesSer: CitesService,
    private formBuilder: FormBuilder,private router: ActivatedRoute){
      this.getAdsType()

      }



  ngOnInit() {

    this.blogForm = this.formBuilder.group({
      Type : [],
      BlogId : [],
      Description : [],
      Image : [[]],
      Images : [[]],
      Path : [],
      UserId : [Number],
      createdDateL : [],
      externalLink : [Boolean],
    });

    console.log(this.typeList) 


  }

  
  getAdsType() {
    this.adsSer.getAdsType().subscribe(
      (data: any) => {
        this.typeList = data.response.data;        
        console.log(this.typeList)
      },
      (error) => {
        console.log('error', error);
      }
    )
    
  }

createBlogApi(){

  if(!this.blogForm.valid){return}
  console.log(this.blogForm.value);
    this.blogSer.createBlogList(this.blogForm.value).subscribe((data)=>{
      console.log(" done to added a New Blog ");
      
      })
  
}

  get BlogId() {
    return this.blogForm.get('BlogId');
  }
  get Title() {
    return this.blogForm.get('Title');
  }
  get Category() {
    return this.blogForm.get('Category');
  }
  get Description() {
    return this.blogForm.get('Description');
  }
  get Image() {
    return this.blogForm.get('Image');
  }
  get Images() {
    return this.blogForm.get('Images');
  }
  get Path() {
    return this.blogForm.get('Path');
  }
  get User() {
    return this.blogForm.get('User');
  }
  get CreatedDateL() {
    return this.blogForm.get('createdDateL');
  }
  // get Items() {
  //   return this.blogForm.get('Items') as FormArray;
  // }
}
