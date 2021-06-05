import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/shared/data/Token';
import { ReportsAdsService } from 'src/app/shared/service/dashboard-services/reports-ads.service';
import { menuDB } from 'src/app/shared/tables/menu';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  public menus:any ;
  public selected = [];
  pageSize: any=10;

  constructor(private ReportsAdsSer:ReportsAdsService) {
    this.AllReportsAds();
  }

  public settings = {
    hideSubHeader: true,
    add: {
      // addButtonContent: '<button class="btn btn-primary"></button>',
      createButtonContent: '<button class="btn btn-primary"></button>',
      // cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel',
    },
    edit: {
      confirmSave: false,
    },
    pager: {
      display: true,
      perPage: this.pageSize
    },
    actions: {
      position: 'right',
    },

      columns: {

      'id': {
        title: 'id',
      },
      'user.firstName': {
        title: 'firstName',
        valuePrepareFunction: (cell, row) => {
          return row.user.firstName;
        },
      },
      'user.phone': {
        title: 'phone',
        valuePrepareFunction: (cell, row) => {
          return row.user.phone;
        }},
        'user.username': {
        title: 'username',
        valuePrepareFunction: (cell, row) => {
          return row.user.username;
        },
      },
      type: {
        title: 'type',
      },

      "ad.id": {
        title: 'ad.id',
        valuePrepareFunction: (cell, row) => {
          return row.ad.id;
        },
      },
      "ad.type": {
        title: 'ad.type',
        valuePrepareFunction: (cell, row) => {
          return row.ad.type;
        },
      },
      "ad.active": {
        title: 'ad.active',
        valuePrepareFunction: (cell, row) => {
          return row.ad.active;
        },
      },
      "ad.category.id": {
        title: 'category.id',
        valuePrepareFunction: (cell, row) => {
          return row.ad.category.id;
        },
      },
        "ad.category.name": {
        title: 'category.name',
        valuePrepareFunction: (cell, row) => {
          return row.ad.category.name;
        },
      },
      "ad.category.icon": {
        title: 'category.icon',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          if (row.image != null && row.image != undefined && row.image != '') {
            return '<img src="' + row.ad.category.icon + '" width=50 height=50/>';
          }
        },
      },
      "ad.userReportedAds.reportType": {
        title: 'userReportedAds.reportType',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
            return row.ad.userReportedAds.reportType ;
          
        },
      }, 
      "ad.userReportedAds.createdAt": {
        title: 'userReportedAds.createdAt',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
            return row.ad.userReportedAds.createdAt ;
          
        },
      },
      "ad.selling_type": {
        title: 'ad.selling_type',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
            return row.ad.selling_type ;
          
        },
      },
      "reason.value": {
        title: 'reason.value',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
            return row.reason.value ;
          
        },
      },

    },
  }


  AllReportsAds(){

  this.ReportsAdsSer.getAllReportedAds().subscribe((res:any)=>{

    this.menus=res.response.data
    })
  }

  ngOnInit() { }



}
