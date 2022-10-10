import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor(private category:CategoryService) { }

  ngOnInit(): void {
  }

}
