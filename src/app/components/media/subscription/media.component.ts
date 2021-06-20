import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { SubscriptionService } from 'src/app/shared/service/dashboard-services/subscription.service';
import { mediaDB } from 'src/app/shared/tables/media';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  public closeResult: string; 
  public subscriptionData = []
  isLoading: boolean = true ;
deletedItemId;
  constructor(private subscriptionSer:SubscriptionService,private modalService: NgbModal) {
    // this.media = mediaDB.data;
  }

  public settings = {
    actions: {
      position: 'right',
      edit:false,
      add:false
    },
  delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },

    columns: {
      id: {
        title: 'id',
  
      },
      name: {
        title: 'name'
      },
      adsNumber: {
        title: 'adsNumber',
      },
      periodInDays: {
        title: 'periodInDays',
  
      },
      // numberUser: {
      //   title: 'numberUser'
      // },
      description: {

        title: 'description',
        filter: false,
      }, 
      price: {
        title: 'price',
      },
    },

  };


  ngOnInit() {

    this.subscriptionSer.getsubscriptionList().subscribe(
      (data: any) => {
        this.isLoading = false
        this.subscriptionData = data.response.data;
      },
      (error) => { 
        this.isLoading = false
        console.log('error', error); });
  }

    delete(id) {
        console.log(id)

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

onDeleteConfirm(event,content){
console.log("asd",event.data.id,content)
this.deletedItemId=event.data.id
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

}
