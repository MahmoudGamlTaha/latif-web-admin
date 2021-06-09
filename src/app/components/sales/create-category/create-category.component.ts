import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  categoryform:FormGroup
  categoryType;
  constructor(private fb:FormBuilder,private catSer:CategoryService) { }

  ngOnInit(): void {
    this.catSer.getCategoryList().subscribe((data:any)=>{
      this.categoryType=data.response.data;
      console.log(this.categoryType)
    },(err)=> console.log("err",err.message)
      )
    this.categoryform = this.fb.group({
      CategoryName : [],
      CategoryType : [],
      Icon : [],
      External : [],
      Active : [],
      NameAr:[],
      Icon_select:[],
    });
  }

  createCategory(){
    console.log(this.categoryform.value)
    this.catSer.createCategory(this.categoryform.value).subscribe(
      (res)=>{
        console.log('res',res)
      },(err)=>{console.log('err',err)}
    )
  }
}
