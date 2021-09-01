import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { Icategory } from 'src/app/shared/service/dashboard-services/Icategory';
import { orderDB } from "../../../shared/tables/order-list";
@Component({
  selector: 'app-categoryList',
  templateUrl: './categoryList.component.html',
  styleUrls: ['./categoryList.component.scss']
})
export class categoryListComponent implements OnInit {

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
    public categoryList;
  public temp = [];
  categoryId;
  typeName;
  isLoading: boolean = true ;
  constructor( private categorySer:CategoryService,private router:Router) {
    // this.order = orderDB.list_order;
  }
  public settings = {
    hideSubHeader:true,
    actions: false,
  delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },

    columns: {
      'id': {
        title: 'id',
        type:'html',
        valuePrepareFunction: (cell, row) => {
            return "<a href='#/category/category-type/"+row.id +"/"+row.name+ "' >"+row.id+"</a>";
        }
      },
      'code': {
        title: 'code',
      },
      'name': {
        title: 'name',
      },
      'nameAr': {
        title: 'nameAr',
        filter: false,

      },
      'active': {
        title: 'active',
        filter: false,
      },
      'createdDate': {
        title: 'createdDate',
      },
    },
  };

  onRowSelect(event){

// if(event.type == 'click') {
//   this.categoryId=event.row.id;
//   this.typeName=event.row.name;
//   this.router.navigate(['category/category-type/',this.categoryId,this.typeName])
// }
  }
  ngOnInit() {

    this.categorySer.getCategoryList().subscribe((data:any)=>{
      this.isLoading = false;
      console.log(data)
      this.categoryList=data.response.data;

    },(err)=>{this.isLoading = false ;})
  }

}
