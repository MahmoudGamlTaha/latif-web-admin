import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { transactionsDB } from 'src/app/shared/tables/transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions;
  categoryId;
  typeName;
  constructor(private route: ActivatedRoute, private router: Router, private categorySer: CategoryService) {

  }

  public settings = {
    actions: {
      position: 'right',
    },
    delete: {
      confirmDelete: true,

      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      'category.id': {
        title: 'id',
        type:'html',
        valuePrepareFunction: (cell, row) => {
          return '<a href="sales/updatecategory/' + this.categoryId + '/' + this.typeName + '/' + row.category.id + '" style="cursor: pointer">' + row.category.id + '</a>';
        },
      },
      'category.name': {
        title: 'name',
        valuePrepareFunction: (cell, row) => {
          return row.category.name
        }
      },
      // 'category.nameAr': {
      //   title: 'nameAr',
      //   valuePrepareFunction:(cell,row)=>{return row.category.nameAr}
      // },
      'category.icon': {
        title: 'icon',
        type: 'html',
        valuePrepareFunction: (cell, row) => { return "<img src='" + row.category.icon + "' width='50' height='50' />"; }
      },
      'category.iconSelect': {
        title: 'iconSelect',
        type: 'html',
        valuePrepareFunction: (cell, row) => { return "<img src='" + row.category.iconSelect + "' width='50' height='50' />"; }

      },
      'category.type': {
        title: 'type',
        valuePrepareFunction: (cell, row) => { return row.category.type }
      },
      // 'category.isExternalLink': {
      //   title: 'isExternalLink',
      //   valuePrepareFunction:(cell,row)=>{return row.category.isExternalLink}

      // },
      // 'category.parent.category': {
      //   title: 'parent', 
      //   valuePrepareFunction:(cell,row)=>{return row.category.parent.category}

      // }
    },
  };

  ngOnInit() {

    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.typeName = this.route.snapshot.paramMap.get('typeName');

    this.categorySer.getCategoryType(this.categoryId).subscribe((data: any) => {
      this.transactions = data.response.data;
      console.log(this.transactions)
    },
      (error) => {
        console.log('error', error);
      })


  }

  // ngAfterViewInit() {
  //   }
  onDeleteConfirm(event) { }
  onEditConfirm(event) { }
  onCreateConfirm(event) { }

}