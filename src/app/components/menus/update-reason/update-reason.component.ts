import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsAdsService } from 'src/app/shared/service/dashboard-services/reports-ads.service';

@Component({
  selector: 'app-update-reason',
  templateUrl: './update-reason.component.html',
  styleUrls: ['./update-reason.component.scss']
})
export class UpdateReasonComponent implements OnInit {

  updateForm: FormGroup
  reasonId
  reason
  reasonar
  constructor(private fb: FormBuilder, private reportSer: ReportsAdsService
    ,private router:ActivatedRoute,private route:Router) {
    this.reasonId=this.router.snapshot.paramMap.get("id")
    this.reason=this.router.snapshot.paramMap.get("reason")
    this.reasonar=this.router.snapshot.paramMap.get("reasonAr")

    console.log(this.reason,this.reasonId)

  }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      Id: [this.reasonId],
      Reason: [this.reason],
      ReasonAr: [this.reasonar],
    })
  }

  update() {

    console.log(this.updateForm.value)
    if (!this.updateForm.valid) { return; }
    this.reportSer.updateReasonOfReportedAds(this.updateForm.value)
      .subscribe((data: any) => {
        console.log(data)
        this.route.navigate(['reports/reports-reasons'])

      }, (err) => {
        console.log("err", err)
      })
  }

}
