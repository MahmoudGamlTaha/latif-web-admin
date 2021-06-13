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

  public ReportedXDList:any ;
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
      edit : false,
    },

      columns: {

      'user.id': {
        title: 'user id',
        valuePrepareFunction: (cell, row) => {
          return row.user.id;
        },
      },
      'user.username': {
        title: 'reported username',
        valuePrepareFunction: (cell, row) => {
          return row.user.username;
        },
      },
      'user.email': {
        title: 'reported email',
        valuePrepareFunction: (cell, row) => {
          return row.user.email;
        },
      },
      'user.firstName': {
        title: 'reported Name',
        valuePrepareFunction: (cell, row) => {
          return row.user.firstName;
        },
      },
      // 'user.phone': {
      //   title: 'reported phone',
      //   valuePrepareFunction: (cell, row) => {
      //     return row.user.phone;
      //   }},
        
      // type: {
      //   title: 'type',
      // },

      "ad.id": {
        title: 'Ads id',
        type:"html",

        valuePrepareFunction:(cell,row)=>{
          return '<a href="#/ads/updateads/'+row.ad.id+'" style="cursor: pointer" id="'+row.ad.id+'">'+row.ad.id+'</a>';
        } 
},
      "ad.city": {
        title: 'Ads city',
        valuePrepareFunction: (cell, row) => {
          return row.ad.city;
        },
      },
      "ad.type": {
        title: 'Ads type',
        valuePrepareFunction: (cell, row) => {
          return row.ad.type;
        },
      },
        
    },
  }


  AllReportsAds(){

  this.ReportsAdsSer.getAllReportedAds().subscribe((res:any)=>{

    this.ReportedXDList=res.response.data
    })
  }

  ngOnInit() { }



}
