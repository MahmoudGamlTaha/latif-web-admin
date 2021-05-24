import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { Icategory } from 'src/app/shared/service/dashboard-services/Icategory';
import { orderDB } from "../../../shared/tables/order-list";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public order;
  public temp = [];
  categoryId;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor( private categorySer:CategoryService,private router:Router) {
    // this.order = orderDB.list_order;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.order = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  onSelect(event){
// alert(event)

if(event.type == 'click') {
  this.categoryId=event.row.id;
  this.router.navigate(['http://localhost:4200/sales/transactions/',this.categoryId])
}
  }
  ngOnInit() {

    this.categorySer.getCategoryList().subscribe((data)=>{
      console.log(data)
      this.order=data.response.data;

    })
  }

}
