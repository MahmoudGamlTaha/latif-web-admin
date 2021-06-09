import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  categoryform: FormGroup

  categoryType;
  CategoryName
  icon
  external
  active
  nameAr
  icon_select
  categoryid
  typeid

  categorylist
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private catSer: CategoryService) {
    this.typeid = this.route.snapshot.paramMap.get('categoryid')
    this.categoryType = this.route.snapshot.paramMap.get('typename')
    this.categoryid = this.route.snapshot.paramMap.get('id')

  }

  ngOnInit(): void {
    this.catSer.getCategoryList().subscribe((data: any) => {
      this.categorylist = data.response.data;
    }
    )
    this.categoryform = this.fb.group({
      CategoryName: [],
      CategoryType: [],
      Icon: [],
      External: [],
      Active: [],
      NameAr: [],
      Icon_select: [],
      CategoryId: [],
    });
  }

  createCategory() {
    console.log(this.categoryform.value)

    this.catSer.updateCategory(this.categoryform.value).subscribe(
      (res) => {
        console.log('res', res)
      }, (err) => { console.log('err', err) }
    )
  }

}
