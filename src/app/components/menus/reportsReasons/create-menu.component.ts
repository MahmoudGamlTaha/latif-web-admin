import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportsAdsService } from 'src/app/shared/service/dashboard-services/reports-ads.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent implements OnInit {

  reportsReasonsList;
  id
  closeResult: string;
  constructor(private modalService: NgbModal,private reportsSer: ReportsAdsService) {

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

  onDeleteConfirm(event,content){

    // 
    this.modalService.open(content, event.data.id ).result.then((result) => {
      
      this.reportsSer.deleteReasonOfReportedAds(event.data.id).subscribe((data: any) => {
        console.log(data)
      }, (err) => {
        console.log("err", err)
      })
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    // 
    console.log("id",event.data.id)
  

  }

  // 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // 
}
