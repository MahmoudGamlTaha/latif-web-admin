import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportsAdsService } from 'src/app/shared/service/dashboard-services/reports-ads.service';

@Component({
  selector: 'app-create-reason',
  templateUrl: './create-reason.component.html',
  styleUrls: ['./create-reason.component.scss']
})
export class CreateReasonComponent implements OnInit {

  reasonId
  reason
  reasonData
  createForm:FormGroup
  constructor(private fb:FormBuilder,private reportSer:ReportsAdsService,private route:Router) {


  }

  ngOnInit(): void {
    this.createForm=this.fb.group({
      Reason:['',[Validators.required,Validators.minLength(3)]],
      ReasonAr:['',[Validators.required,Validators.minLength(3)]],
    })
  }
  get Reason(){
    return this.createForm.get('Reason')
  }
  get ReasonAr(){
    return this.createForm.get('ReasonAr')
  }
  create(){
    console.log(this.createForm.value)
    if(!this.createForm.valid){return ;}
    this.reportSer.createReasonOfReportedAds(this.createForm.value)
    .subscribe((data:any)=>{
      console.log(data)
      this.route.navigate(['reports/reports-reasons'])
    },
      (err)=>{
      console.log("err",err)
    })
  }

}
