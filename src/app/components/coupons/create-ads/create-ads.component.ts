import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';

@Component({
  selector: 'app-create-ads',
  templateUrl: './create-ads.component.html',
  styleUrls: ['./create-ads.component.scss']
})
export class CreateAdsComponent implements OnInit {

  categoryform:FormGroup
  categoryType;
  constructor(private fb:FormBuilder,private adsSer:AdsService,private catSer:CategoryService) { }

  ngOnInit(): void {

    this.catSer.getCategoryList().subscribe((data:any)=>{
      this.categoryType=data.response.data;
      console.log(this.categoryType)
    },(err)=> console.log("err",err.message)
      )

    this.categoryform = this.fb.group({
      type : [],
      code : [],
      category_type : [],
      category_id : [],
      created_by : [],
      diseasesDisabilitiesDesc:[],
      diseasesDisabilities:[],
      playWithKids : [],
      passport : [],
      barkingProblem : [],
      food : [],
      training : [],
      vaccinationCertificate:[],
      neutering:[],
      weaned : [],
      stock : [],
      breed : [],
      price : [],
      short_description : [],
      description:[],
      name:[],
      active : [],
    });
  }

  createCategory(){
    console.log(this.categoryform.value)
    this.adsSer.createAds(this.categoryform.value).subscribe(
      (res)=>{
        console.log('res',res)
      },(err)=>{console.log('err',err)}
    )
  }

}
