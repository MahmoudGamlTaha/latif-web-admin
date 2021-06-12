import { Component, OnInit } from '@angular/core';
import { ReportsAdsService } from 'src/app/shared/service/dashboard-services/reports-ads.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent implements OnInit {

  reportsReasonsList;
  id
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
  delete: {
    confirmDelete: true,
    deleteButtonContent: 'Delete data',
    saveButtonContent: 'save',
    cancelButtonContent: 'cancel',
  },
  pager:{
    display:true,
  },
  columns: {
    id:{
    title:"id",
    type:"html",
    valuePrepareFunction:(cell,row)=>{
      
      return '<a href="#/reports/update-reasons/'+row.id+'/'+row.value+'" style="cursor: pointer" value="'+row.id+'" >'+row.id+'</a>';

    } 

  },
  value:{
    title : "value"
  }
  }
}
  ngOnInit() {
  }

  onDeleteConfirm(event){

    console.log("id",event.data.id)
  
    this.reportsSer.deleteReasonOfReportedAds(event.data.id)
      .subscribe((data: any) => {
        console.log(data)
      }, (err) => {
        console.log("err", err)
      })
  }
}
