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
  constructor(private fb: FormBuilder) { 

    

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
  getTypeList(event){}
}
