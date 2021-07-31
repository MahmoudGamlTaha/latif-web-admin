import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { UsersService } from 'src/app/shared/service/dashboard-services/users.service';
import { UploadFileComponent } from '../../upload-file/upload-file.component';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  public createForm: FormGroup;
  typeList = [] ;
  catParentList = [] ;
  selectedParent:any;
  selectedTypeId : String ;
  iconUpload:string = 'https://res.cloudinary.com/highcoder/image/upload/v1627770020/1_xkvipn.jpg';
  iconSelectUpload:string = 'https://res.cloudinary.com/highcoder/image/upload/v1627770020/1_xkvipn.jpg';
  constructor(private fb: FormBuilder,
    private categorySer:CategoryService,
    private router : ActivatedRoute,private route:Router) { 
      this.selectedTypeId = this.router.snapshot.paramMap.get('type')
      this.categorySer.getCategoryList().subscribe(
        (data:any)=>{
          this.typeList=data.response.data
          console.log(data.response.data)
        },(err)=>console.log("err",err)
      )
    this.categorySer.getCategoriesByParent(this.selectedTypeId).subscribe(
      (data:any)=>{
        console.log(data)

        this.catParentList=data.response.data
      },(err)=>console.log("err",err)
    )
  }



  ngOnInit(): void {
    this.createForm = this.fb.group({
      Type :[this.selectedTypeId,[Validators.required]],
      CategoryName:['',[Validators.required]],
      NameAr:['',[Validators.required]],
      External:true,
      Active:[''],
      catParent:[''],
    });
    
  }  
  ngAfterViewInit(): void {
    
  }
  setIcon(value){
    this.iconUpload  = value.url;
  }
  setIconSelect(value){
    this.iconSelectUpload = value.url;

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
    return this.createForm.get('catParent').value;
  }
  create(){
    let formData : category;
    console.log(this.selectedParent);
    formData = {
      active : this.createForm.value.Active ,
      catParent : this.createForm.value.catParent,
      external_link : this.createForm.value.External ,
      icon : this.iconUpload,
      icon_select : this.iconSelectUpload ,
      name : (this.createForm.value.CategoryName).trim() ,
      nameAr : this.createForm.value.NameAr.trim() ,
      type : this.createForm.value.Type ,
    }
    
    if(!this.createForm.valid){
       alert("there is missing data");
      return ;
    }
   

    this.categorySer.createCategory(formData).subscribe(
      (data)=>{
        this.typeList.filter((item)=>{
          if(item.id==this.createForm.value.Type){
            this.route.navigate(['/category/category-type/',item.id,item.name])
          }
        })
        

      }
    )
  }
}
