import { Component, OnInit } from '@angular/core';
import { ReportsAdsService } from 'src/app/shared/service/dashboard-services/reports-ads.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent implements OnInit {

  reportsReasonsList;
  constructor(private reportsSer: ReportsAdsService) {

    this.reportsSer.getReasonOfReportedAds().subscribe(
      (data: any)=>{
        this.reportsReasonsList = data.response.data
        console.log(data)
      }, (err) => { console.log("err", err) }
    )
  }
  public settings = {
  actions:{
    position:"right",
    add:false,
    edit:false,
  },
  pager:{
    display:true,
  },
  columns: {
    id:{
    title:"id",
  },
  value:{
    title : "value"
  }
  }
}
  ngOnInit() {
  }

}
