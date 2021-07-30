import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { adsFilter } from 'src/app/shared/models/adsFilter';
import { StatusComponent } from '../status/status.component';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { server } from 'src/environments/environment';

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
  pageSize = 19;
  source: LocalDataSource = new LocalDataSource();
  numOfPages: number;
  isLoading: boolean = true;
deletedItemId;
  constructor(
    private modalService: NgbModal,private categorySer: CategoryService,
    private router: Router,
    private adsSer: AdsService
  ) {
    this.selected = 'ALL';
  }

  public settings = {

    hideSubHeader: true,
    actions:{
      edit:false,
      position: 'right',
    },

  delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    // edit: {
    //   editButtonContent:'<button class="btn btn-primary">',
    //   editButtonTitle:"ddd",
    //   confirmSave: false,
    // },
    pager: {
      display: true,
      perPage: this.pageSize,
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
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          if(row.createdBy){
            let lastName:string = row.createdBy.lastName == null ? "" : row.createdBy.lastName;
          return '<a style=""cursor": "pointer" href="#/user-details/'+ row.createdBy.id+'"/>'+ row.createdBy.firstName + ' ' + lastName;
          }
        },
      },
      'createdBy.phone': {
        title: 'phone',
        valuePrepareFunction: (cell, row) => {
          if(row.createdBy){
          return row.createdBy.phone;
          }
          return "";
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
        filter: false,
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
           // this.adsSer.changeStateOfAds(row.id, row.active).subscribe(res=> console.log("success"));
            // alert(`${row.active} saved!`)
          });},
      
          width:"15px"
      },
      image: {
        title: 'image',
        filter: false,
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
        this.isLoading = false;
        this.adsList = data.response.data;
        this.rolList = this.adsList;
      //  localStorage.setItem('adsList', JSON.stringify(this.rolList));
      },
      (error) => {
        this.isLoading = false;
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
    // this.source.onChanged().subscribe((change) => {
    //   if (change.action === 'page') {
    //     this.pageChange(change.paging.page);
    //   }
    // });
    this.getAdsList();
    this.getAdsType();
  }


  delete(id) {
        console.log(id)

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

onDeleteConfirm(event,content){
console.log("asd",event.data.id,content)
this.deletedItemId=event.data.id
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}


  // pageChange(pageIndex) {
  //   const loadedRecordCount = this.source.count();
  //   const lastRequestedRecordIndex = pageIndex * this.pageSize;
  //   console.log(loadedRecordCount,lastRequestedRecordIndex)
  // }


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

}
