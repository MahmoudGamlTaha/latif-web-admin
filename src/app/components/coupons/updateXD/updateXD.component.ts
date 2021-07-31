import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { CountriesService } from 'src/app/shared/service/dashboard-services/countries.service';
import { Icategory } from 'src/app/shared/service/dashboard-services/Icategory';

@Component({
  selector: 'app-updateXD',
  templateUrl: './updateXD.component.html',
  styleUrls: ['./updateXD.component.scss'],
})
export class updateXDComponent implements OnInit {
  
  public generalForm: FormGroup;
  constructor(
    private adsSer: AdsService,
    private AdsSer: AdsService,
    private categorySer: CategoryService,
    private citiesSer: CountriesService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.XDId = parseInt(this.router.snapshot.paramMap.get('id'));
    this.getcites();
    this.getAdsByIdType();
  }
  active: boolean;
  typeOfAds: string;
  categoryList ;
  categoryName: string;
  categoryNameList;
  XDId : number;
  categoryId : number;
  city : string ;
  description : string ;
  extra: [];
  name : string ;
  price : number ;
  image : string ;
  images : [] ;
  closeResult: string;
  ///////////createdBy => personal
  id : number ;
  address : string ;
  ads;
  adsCount : number;
  email : string = "";
  firstName : string ;
  lastName : string = "";
  phone : number;
  //////////////// extra => subscriptions
  code : string ;
  cities;
  rowSelectedData = JSON.parse(localStorage.getItem('RowSelect'));
  
  getAdsByIdType() {
    this.AdsSer.getAdsByIdType(this.XDId).subscribe((data: any) => {
      this.id = data.response.data.id;
      this.active = data.response.data.active;
      this.typeOfAds = data.response.data.type;
      this.categoryName = data.response.data.categoryName;
      this.address = data.response.data.createdBy.address;
      this.ads = data.response.data.createdBy.ads;
      this.adsCount = data.response.data.createdBy.address;
      if(data.response.data.createdBy != null){
          this.email = data.response.data.createdBy.email;
          this.firstName = data.response.data.createdBy.firstName;
          this.lastName = data.response.data.createdBy.lastName;
          this.phone = data.response.data.createdBy.phone;
      }
      this.city = data.response.data.city;
      this.description = data.response.data.description;
      this.name = data.response.data.name; //
      this.price = data.response.data.price;
      this.extra = data.response.data.extra; //
      this.images = data.response.data.images;
      this.getCategories();
    });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  getcites() {
    this.citiesSer.getcitesList().subscribe((data: any) => {
      this.cities = data.response.data;
    });
  }
  getCategories(){
    this.categorySer.getCategoryList().subscribe(( data :any) => {
      this.categoryList = data.response.data;
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





  onSelect(event) {
    // drop

    this.typeOfAds = event.target.value;
    this.categoryList.filter((item) => {
      if (item.name == this.typeOfAds) {
        return (this.categoryId = parseInt(item.id) );
      }
    });
  }
  onClick(event) {

    this.adsSer.changeStateOfAds(event.target.id, event.target.checked).subscribe(res=> console.log("success"));

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
    let check = this.generalForm.get('Email') == undefined;
    if(check){
      return "";
    }
    return this.generalForm.get('Email') ;
  }
  get Items() {
    return this.generalForm.get('Items') as FormArray;
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
  
}
