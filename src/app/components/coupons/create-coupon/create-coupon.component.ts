import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { CitesService } from 'src/app/shared/service/dashboard-services/cites.service';
import { Icategory } from 'src/app/shared/service/dashboard-services/Icategory';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.scss'],
})
export class CreateCouponComponent implements OnInit {
  
  public generalForm: FormGroup;

  active: boolean;
  typeOfAds: string;
  categoryList ;
  categoryName: string;
  categoryNameList;
  AdsId : number;
  categoryId : number;
  city : string ;
  description : string ;
  extra: any[] = [];
  name : string ;
  price : number ;
  image : string ;
  images : [] ;
  ///////////createdBy => personal
  id : number ;
  address : string ;
  ads;
  adsCount : number;
  email : string ;
  firstName : string ;
  lastName : string ;
  phone : number;
  //////////////// extra => subscriptions
  code : string ;
  cities;
  rowSelectedData = JSON.parse(localStorage.getItem('RowSelect'));
  constructor(
    private adsSer: AdsService,
    private AdsSer: AdsService,
    private categorySer: CategoryService,
    private citiesSer: CitesService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
  ) {
    this.AdsId = parseInt(this.router.snapshot.paramMap.get('id'));
    this.getDataFormApi();
    this.getAdsByIdType();
  }
  getAdsByIdType() {
    this.AdsSer.getAdsByIdType(this.AdsId).subscribe((data: any) => {
      this.active = data.response.data.active;
      this.typeOfAds = data.response.data.type;
      this.categoryName = data.response.data.categoryName;
      this.address = data.response.data.createdBy.address;
      this.ads = data.response.data.createdBy.ads;
      this.adsCount = data.response.data.createdBy.address;
      this.email = data.response.data.createdBy.Email;
      this.firstName = data.response.data.createdBy.firstName;
      this.lastName = data.response.data.createdBy.lastName;
      this.phone = data.response.data.createdBy.phone;
      this.city = data.response.data.city;
      this.description = data.response.data.description;
      this.name = data.response.data.name; //
      this.price = data.response.data.price;
      this.extra = data.response.data.extra; //
      this.images = data.response.data.images;
      /**
       * this.categoryList.filter()
       * this filter get SubCatList using id of typeOfAds
       *
       **/
      this.categoryList.filter((data:Icategory) => {
        if ( this.typeOfAds == data.code ) {
          this.categoryId = data.id;
          this.categorySer
            .getCategoryType(this.categoryId)
            .subscribe((data: any) => {
              this.categoryNameList = data.response.data;
            });
          this.typeOfAds = data.name;
        }
      });
    });
  }

  getDataFormApi() {
    this.citiesSer.getcitesList().subscribe((data: any) => {
      this.cities = data.response.data;
    });
    this.categorySer.getCategoryList().subscribe(( data :any) => {
      this.categoryList = data.response.data;
    });
  }



  ngOnInit() {
    //const itemsCtrls = this.createItemsCtrls(this.extra);
    // generate form Builder
    this.generalForm = this.formBuilder.group({
      Id : [this.id],
      TypeOfAds : [this.typeOfAds],
      CategoryName : [this.categoryName],
      City : [this.city],
      Active : [this.active],
      Description : [this.description],
      Price : [this.price],
      images : [this.image],
      Firstname : ['', [Validators.required, Validators.minLength(3)]],
      Lastname : ['', [Validators.required]],
      Email : ['', [Validators.required]],
    });
  }

  onSelect(event) {
    // drop

    this.typeOfAds = event.target.value;
    this.categoryList.filter((item) => {
      if (item.name == this.typeOfAds) {
        return (this.categoryId = parseInt(item.id) );
      }
    });
  }

  get Id() {
    return this.generalForm.get('Id');
  }
  get Category() {
    return this.generalForm.get('Category');
  }
  get CategoryName() {
    return this.generalForm.get('CategoryName');
  }
  get Description() {
    return this.generalForm.get('Description');
  }
  get Price() {
    return this.generalForm.get('Price');
  }
  get Image() {
    return this.generalForm.get('Image');
  }
  get Firstname() {
    return this.generalForm.get('Firstname');
  }
  get Lastname() {
    return this.generalForm.get('Lastname');
  }
  get Email() {
    return this.generalForm.get('Email');
  }
  get Items() {
    return this.generalForm.get('Items') as FormArray;
  }
}
