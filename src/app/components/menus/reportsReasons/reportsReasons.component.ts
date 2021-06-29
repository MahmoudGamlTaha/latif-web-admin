import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportsAdsService } from 'src/app/shared/service/dashboard-services/reports-ads.service';

@Component({
  selector: 'app-reportsReasons',
  templateUrl: './reportsReasons.component.html',
  styleUrls: ['./reportsReasons.component.scss']
})
export class reportsReasonsComponent implements OnInit {

  reportsReasonsList;
  id
  closeResult: string;
  isLoading: boolean = true ;
  constructor(private modalService: NgbModal,private reportsSer: ReportsAdsService) {

    this.reportsSer.getReasonOfReportedAds().subscribe(
      (data: any)=>{
        this.isLoading = false ;
        this.reportsReasonsList = data.response.data
        console.log(data)
      }, (err) => { 
        this.isLoading = false ;
        console.log("err", err) }
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
      return '<a href="#/reports/update-reasons/'+row.id+'/'+row.value+'/'+row.valueAr+'" style="cursor: pointer" value="'+row.id+'" >'+row.id+'</a>';
    } 
  },
  value:{
    title : "value"
  },
  valueAr:{
    title : "valueAr"
  },

  }
}
  ngOnInit() {
  }

  onDeleteConfirm(event){

    this.reportsSer.deleteReasonOfReportedAds(event.data.id).subscribe((data: any) => {
        console.log(data)
      }, (err) => {
        console.log("err", err)
      })

    console.log("id",event.data.id)
  
  }
}
