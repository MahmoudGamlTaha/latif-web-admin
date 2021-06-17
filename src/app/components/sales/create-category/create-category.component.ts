import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  public createForm: FormGroup;
  typeList
  constructor(private fb: FormBuilder,private categorySer:CategoryService,private route:Router) { 

    this.categorySer.getCategoryList().subscribe(
      (data:any)=>{
        this.typeList=data.response.data
      },(err)=>console.log("err",err)
    )

  }
  ngOnInit(): void {
    
    this.createForm = this.fb.group({
      Type :['',[Validators.required]],
      CategoryName:['',[Validators.required]],
      NameAr:['',[Validators.required]],
      Icon:['',[Validators.required]],
      Icon_select:['',[Validators.required]],
      External:[''],
      Active:[''],
    });
  }
  get CategoryName(){
    return this.createForm.get('CategoryName')
  }
  get NameAr(){
    return this.createForm.get('NameAr')
  }
  get Icon(){
    return this.createForm.get('Icon')
  }
  get Icon_select(){
    return this.createForm.get('Icon_select')
  }
  get Type(){
    return this.createForm.get('Type')
  }
  create(){

    if(!this.createForm.valid){return ;}
    console.log(this.createForm.value.Type)

    this.categorySer.createCategory(this.createForm.value).subscribe(
      (data)=>{
        
        console.log(data)
        this.typeList.filter((item)=>{
          if(item.id==this.createForm.value.Type){
            this.route.navigate(['sales/categorytype/',item.id,item.name])
          }
        })
        

      }
    )
  }
}
