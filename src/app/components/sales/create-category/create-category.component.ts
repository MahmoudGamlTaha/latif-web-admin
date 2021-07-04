import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { UsersService } from 'src/app/shared/service/dashboard-services/users.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  public createForm: FormGroup;
  typeList = [] ;
  catParentList = [] ;
  selectedTypeId : String ;
  constructor(private fb: FormBuilder,
    private categorySer:CategoryService,
    private router : ActivatedRoute,private route:Router) { 
      this.selectedTypeId = this.router.snapshot.paramMap.get('type')
      console.log(this.selectedTypeId)
    
      this.categorySer.getCategoryList().subscribe(
        (data:any)=>{
          this.typeList=data.response.data
          console.log(data.response.data)
        },(err)=>console.log("err",err)
      )
    this.categorySer.getCategoriesByParent(this.selectedTypeId).subscribe(
      (data:any)=>{
        this.catParentList=data.response.data
      },(err)=>console.log("err",err)
    )
  }



  ngOnInit(): void {
    this.createForm = this.fb.group({
      Type :[this.selectedTypeId,[Validators.required]],
      CategoryName:['',[Validators.required]],
      NameAr:['',[Validators.required]],
      Icon:['',[Validators.required]],
      Icon_select:['',[Validators.required]],
      External:[''],
      Active:[''],
      catParent:['you'],
    });
    
  }
  ngAfterViewInit(): void {
    
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
  get catParent(){
    return this.createForm.get('catParent')
  }
  create(){
    let formData : category

    formData = {
      active : this.createForm.value.Active ,
      catParent : this.createForm.value.catParent ,
      externalLink : this.createForm.value.External ,
      icon : this.createForm.value.Icon ,
      icon_select : this.createForm.value.Icon_select ,
      name : this.createForm.value.External ,
      nameAr : this.createForm.value.NameAr ,
      type : this.createForm.value.CategoryName ,
    }
    if(!this.createForm.valid){return ;}
    console.log(this.createForm.value)

    this.categorySer.createCategory(formData).subscribe(
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
