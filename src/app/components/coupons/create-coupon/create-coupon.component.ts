import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbDate, NgbCalendar, NgbDatepickerConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdsService } from 'src/app/shared/service/dashboard-services/ads.service';
import { CategoryService } from 'src/app/shared/service/dashboard-services/category.service';
import { CitesService } from 'src/app/shared/service/dashboard-services/cites.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.scss']
})
export class CreateCouponComponent implements OnInit {
  public generalForm: FormGroup;
  public restrictionForm: FormGroup;
  public usageForm: FormGroup;
  public model: NgbDateStruct;
  public date: { year: number, month: number };
  public modelFooter: NgbDateStruct;

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  cites;
  categoryId;
  city;
rowSelectedData=JSON.parse(localStorage.getItem('RowSelect'))
  constructor(private adsSer:AdsService,private categorySer:CategoryService,private citesSer:CitesService,
              private formBuilder: FormBuilder,private router:ActivatedRoute,private calendar: NgbCalendar) {
    this.createGeneralForm();
  }

  // selectToday() {
  //   this.model = this.calendar.getToday();
  // }

  setDataToFormUbdate(){
    
    this.categoryId =this.router.snapshot.paramMap.get('id')
    this.city=this.rowSelectedData.city;
    console.log(this.rowSelectedData)
    
  }
  createGeneralForm() {


    this.generalForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegx)]], //
    });

  }

  
  ngOnInit() {
    this.citesSer.getcitesList().subscribe((data:any)=>{
      this.cites=data.response.data
    console.log(this.cites[0].category.name);
    })

    this.setDataToFormUbdate();


    console.log('hi,',this.rowSelectedData)


  }


  get firstName() {
    return this.generalForm.get('firstName');
  }
  get lastName() {
    return this.generalForm.get('lastName');
  }
  get email() {
    return this.generalForm.get('email');
  }

}
