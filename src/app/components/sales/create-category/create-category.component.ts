import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      Type :[''],
      CategoryName:[''],
      NameAr:[''],
      Icon:[''],
      Icon_select:[''],
      External:[''],
      Active:[''],
    });
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
