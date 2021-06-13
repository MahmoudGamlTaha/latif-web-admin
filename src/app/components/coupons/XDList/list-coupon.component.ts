import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { adsFilter } from 'src/app/shared/models/adsFilter';
import { StatusComponent } from '../status/status.component';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.scss'],
})
export class ListCouponComponent implements OnInit {
  public rolList;
  public adsList;
  public rolListUpdate;
  public closeResult: string;
  public categoryNameList;
  selectedCatName: any;
  selectedCatId: any;
  selected;
  AdsType;
  CatId: number;
  pageSize = 10;
  source: LocalDataSource = new LocalDataSource();
  numOfPages: number;
  constructor(
    private categorySer: CategoryService,
    private router: Router,
    private adsSer: AdsService
  ) {
    this.selected = 'ALL';
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
      editButtonContent:'<button class="btn btn-primary">',
      editButtonTitle:"ddd",
      confirmSave: false,
    },
    pager: {
      display: true,
      perPage: this.pageSize,
    },
    actions: {
      // edit:false,
      // delete:false,
      position: 'right',
      
    },
      // custom: [{ name: 'View', title: `<i class="fa fa-eye" ></i>` }]
      // mode:"external"
      columns: {
      id: {
        title: 'id',
        type:"html",

        valuePrepareFunction:(cell,row)=>{
          return '<a href="#/ads/updateads/'+row.id+'" style=""cursor": "pointer"" id="'+row.id+'">'+row.id+'</a>';

        } 
      } ,
      // type: {
      //   title: 'type',
      // } ,
      'createdBy.firstName': {
        title: 'Name',
        valuePrepareFunction: (cell, row) => {
          return row.createdBy.firstName + ' ' + row.createdBy.lastName;
        },
      },
      'createdBy.phone': {
        title: 'phone',
        valuePrepareFunction: (cell, row) => {
          return row.createdBy.phone;
        },
      },
      // 'createdBy.subscriptions': {
      //   title: 'subscriptions',
      //   valuePrepareFunction: (cell, row) => { return row.createdBy.subscriptions }

      // },
      // 'createdBy.adsCount': {
      //   title: 'adsCount',
      //   valuePrepareFunction: (cell, row) => { return row.createdBy.adsCount }
      // }
      // city: {
      //   title: 'city',
      //   // valuePrepareFunction: (cell, row) => { return row.user.firstName }
      // },
      name: {
        title: 'categoryName',
      },

      categoryName: {
        title: 'service', class: "cursor:pointer",
      },
      // 'extra.code': {
      //   title: 'code',
      //   valuePrepareFunction: (cell, row) => { return row.extra.code }
      // },
      // 'extra.name': {
      //   title: 'name',
      //   valuePrepareFunction: (cell, row) => { return row.extra.name }
      // },
      // 'extra.value': {
      //   title: 'value',
      //   valuePrepareFunction: (cell, row) => { return row.extra.value }
      // }, 
      short_description: {
        title: 'description',
        valuePrepareFunction: (cell, row) => {
          return row.short_description.slice(0, 30);
        },
      },
      price: {
        title: 'price',
      },
      active: {
        title: 'Active',
        type: 'custom',
        filter: false,
        renderComponent: StatusComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            // alert(`${row.active} saved!`)
          });},
        // valuePrepareFunction: (cell, row) => {
          
        //   console.log(row.active)
        //   if(row.active){return row.active }else{

        //   }
        //   },
          width:"15px"
      },
      image: {
        title: 'image',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          if (row.image != null && row.image != undefined && row.image != '') {
            return '<img src="' + row.image + '" width=50 height=50/>';
          }
        },
      },
    },
  }
  getAdsList() {
    this.adsSer.getAdsList().subscribe(
      (data: any) => {
        this.adsList = data.response.data;
        this.rolList = this.adsList;
        localStorage.setItem('adsList', JSON.stringify(this.rolList));
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getAdsType() {
    this.adsSer.getAdsType().subscribe(
      (data: any) => {
        this.AdsType = data.response.data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  ngOnInit() {
    this.source.onChanged().subscribe((change) => {
      if (change.action === 'page') {
        this.pageChange(change.paging.page);
      }
    });
    this.getAdsList();
    this.getAdsType();
  }
  pageChange(pageIndex) {
    const loadedRecordCount = this.source.count();
    const lastRequestedRecordIndex = pageIndex * this.pageSize;
    console.log(loadedRecordCount,lastRequestedRecordIndex)
  }

  onDeleteConfirm(event) {
    // alert(event.data.id)
    // if (window.confirm('Are you sure you want to save?')) {
    //   this.adsSer.deleteblogList(parseInt(event.data.id))
    //   event.confirm.resolve(event.newData);
    // } else {
    //   event.confirm.reject();
    // }
  }
  onEditConfirm(event) {
    // this.adsSer.updateblogList(event.data).subscribe(res => {
    //   console.log('Success : ', res)
    // }, err => {
    //   console.log('EError : ', err)
    // })
    // event.confirm.resolve(event.newData);
  }
  onCreateConfirm(event) {

  }
  onUserRowSelect(event) {
    console.log(event)
    if (
      event.selected.length != null &&
      event.selected.length != undefined &&
      event.selected.length != 0
    ) {
      this.router.navigate(['/ads/updateads/', event.selected[0].id]);
    }
  }

  public customFilter(filterAds: adsFilter) {
    this.adsSer.getFilterAds(filterAds).subscribe(
      (res: any) => {
        this.rolList = res.response.data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  typeDropDown(event) {
    /// drop down filter type

    if (event != null || this.selected != null) {
      this.selected = event.target.value;

      let filterAds: adsFilter;
      filterAds = { type: this.selected };

      this.customFilter(filterAds);
      this.AdsType.filter((item) => {
        if (item.code == this.selected) {
          this.selectedCatName = item.code;
          this.selectedCatId = item.id;
        }
      });
      this.createSubCat(this.selectedCatId);
    }
  }

  createSubCat(catId) {
    //categoryName=name
    if (catId != null) {
      this.categorySer.getCategoryType(catId).subscribe(
        (data: any) => {
          this.categoryNameList = data.response.data;
          this.numOfPages=data.response.totalPages;
        },
        (error) => {
          console.log('error', error);
        }
      );
    }
  }

  subCatDropDown(event) {
    let filterAds: adsFilter;
    filterAds = { category: event.target.value, type: this.selected };
    this.customFilter(filterAds);
    console.log(this.settings.pager,this.settings.pager )
  }

  onCustom(event){
    switch ( event.action) {
      case 'viewrecord':
        // this.viewRecord(event.data);
        break;
    case 'editrecord':
        // this.editRecord(event.data);
    }
  }

}
