import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { listCouponsDB } from 'src/app/shared/tables/list-coupon';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.scss']
})
export class ListCouponComponent implements OnInit {
  public rolList ;
  public adsList;
  public rolListUpdate ;
  public closeResult: string;
  selected;
  AdsType:[];

  constructor(private modalService: NgbModal,private router:Router,private adsSer:AdsService) {
    // this.digital_categories = listCouponsDB.list_coupons;
  }

  
  // open(content) {
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
      
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
 
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
   
      
      // code: {
      //   title: 'code',
      // } ,
      // type: {
      //   title: 'type',
      // } ,
      'createdBy.firstName': {
        title: 'Name',
        valuePrepareFunction: (cell, row) => { return row.createdBy.firstName+' '+row.createdBy.lastName }

      },
      'createdBy.phone': {
        title: 'phone',
        valuePrepareFunction: (cell, row) => { return row.createdBy.phone }

      },
      // 'createdBy.subscriptions': {
      //   title: 'subscriptions',
      //   valuePrepareFunction: (cell, row) => { return row.createdBy.subscriptions }

      // },
      // 'createdBy.adsCount': {
      //   title: 'adsCount',
      //   valuePrepareFunction: (cell, row) => { return row.createdBy.adsCount }
      // }
      city: {
        title: 'city',
        // valuePrepareFunction: (cell, row) => { return row.user.firstName }
      },
      name: {
        title: 'categoryName',
      
      },
      
      categoryName: {
        title: 'service',
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
        valuePrepareFunction: (cell, row) => { return row.short_description.slice(0,30) }

      },
      price: {
        title: 'price',
      },
      image: {
        title: 'image',
        type:'html',
        valuePrepareFunction: (cell, row) => { return '<img src="'+row.image+'" width=50 height=50/>' }
      },

    }
  };
  getAdsList(){
    this.adsSer.getAdsList().subscribe(
      (data: any) => {
        this.adsList = data.response.data;
        this.rolList = this.adsList;
        localStorage.setItem('adsList',JSON.stringify(this.rolList)) ;
        console.log(data.response.data)
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getAdsType(){
    this.adsSer.getAdsType().subscribe(
      (data: any) => {
        this.AdsType = data.response.data;
        console.log(this.AdsType)
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  ngOnInit() {

    this.getAdsList();
    this.getAdsType();
    

  
  }

  onDeleteConfirm(event){ 

    // alert(event.data.id)

    
    // if (window.confirm('Are you sure you want to save?')) {
    
    //   this.adsSer.deleteblogList(parseInt(event.data.id))
    //   event.confirm.resolve(event.newData);
    // } else {
    //   event.confirm.reject();
    // }

  }
  onEditConfirm(event){
    // console.log(event.data)
    // this.adsSer.updateblogList(event.data).subscribe(res => {
    //   console.log('Success : ', res)
    // }, err => {
    //   console.log('EError : ', err)
    // })
    // event.confirm.resolve(event.newData);
  }
  onCreateConfirm(event) {
    // console.log(event)
    // this.adsSer.createBlogList(event.data)
    // event.confirm.resolve(event.newData);

  }

  onUserRowSelect(event){
    if(event.selected.length != null && event.selected.length != undefined && event.selected.length != 0 ){
      console.log(event.selected[0]);
      console.log(event.selected[0].type);
      console.log(event.selected[0].createdBy.id);
      localStorage.setItem('RowSelect',JSON.stringify(event.selected[0]))
      this.router.navigate(["/ads/updateads/",event.selected[0].createdBy.id])

    }
  }

  onSelect(event){  /// drop down 
    if(event != null){
      console.log(event);
      this.selected = event.target.value;
      this.rolList = this.adsList;
      if(this.selected != 'ALL'){  
        console.log(this.selected);  
        this.rolList =this.adsList;
        this.rolList = this.rolList.filter(item  => {return item.type == this.selected});
      }
    
      }
  }

}
