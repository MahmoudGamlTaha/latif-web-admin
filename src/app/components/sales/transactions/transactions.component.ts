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

  transactions ;
  heroId;
  constructor(private route:ActivatedRoute,private router:Router,private categorySer:CategoryService) {
  
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
        valuePrepareFunction:(cell,row)=>{
          return row.category.id
        },
      },
      'category.name': {
        title: 'name', 
        valuePrepareFunction:(cell,row)=>{
          return row.category.name
        }
      },
      'category.nameAr': {
        title: 'nameAr',
        valuePrepareFunction:(cell,row)=>{return row.category.nameAr}
      },
      'category.icon': {
        title: 'icon',
        type: 'html',
        valuePrepareFunction:(cell,row)=>{return row.category.icon.slice(0, 30);}
      },
      // 'category.iconSelect': {
      //   title: 'iconSelect',
      //   type: 'html',
      //   valuePrepareFunction:(cell,row)=>{return row.category.iconSelect.slice(0, 30);}

      // },
      'category.type': {
        title: 'type', 
        valuePrepareFunction:(cell,row)=>{return row.category.type}

      },
      'category.isExternalLink': {
        title: 'isExternalLink',
        valuePrepareFunction:(cell,row)=>{return row.category.isExternalLink}

      },
      'category.parent.category': {
        title: 'parent', 
        valuePrepareFunction:(cell,row)=>{return row.category.parent.category}

      }
    },
  };
  
  ngOnInit() {

    this.heroId = this.route.snapshot.paramMap.get('id');
    this.categorySer.getCategoryType(this.heroId).subscribe((data:any)=>{
    this.transactions = data.response.data;
    },
  (error) => {
    console.log('error', error);
  }) 
    
    
  }

  // ngAfterViewInit() {
  //   }
  onDeleteConfirm(event){}
  onEditConfirm(event){}
  onCreateConfirm(event){}

}