import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  public createForm: FormGroup;
  typeList
  categoryList
  constructor(private fb: FormBuilder,private categorySer:CategoryService) { 

    this.categorySer.getCategoryList().subscribe(
      (data:any)=>{
        this.typeList=data.response.data
      },(err)=>console.log("err",err)
    )

  }
  ngOnInit(): void {
    
    this.createForm = this.fb.group({
      Type :[''],
      CategoryName:[''],
      NameAr:[''],
      Icon:[''],
      Icon_select:[''],
      External:[''],
      Active:[''],
    });

  }
  getTypeList(event){
    console.log()
    this.categorySer.getCategoryType(event.target.value).subscribe(
      (data:any)=>{
        this.categoryList=data.response.data
      },(err)=>console.log("err",err)
    )
  }

  create(){

    if(!this.createForm.valid){return ;}
    console.log(this.createForm.value)
    this.categorySer.createCategory(this.createForm.value).subscribe(
      (data)=>{console.log(data)}
    )
  }
}
