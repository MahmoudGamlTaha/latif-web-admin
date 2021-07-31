import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/service/dashboard-services/users.service';
import { StatusComponent } from '../status/status.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public user_list = []
  isLoading: boolean = true ;
closeResult;
deletedItemId;
  constructor(private modalService: NgbModal,private userSer:UsersService) {
    this.userSer.userList().subscribe(
      (data:any)=>{
        this.isLoading = false ;
        this.user_list =data.response.data
        console.log(this.user_list)
      },(err)=>{
        this.isLoading = false ;
        console.log("err",err)}
    );
  }

  public settings = {
    actions:{
      position:"right",
      edit:false,
      add:false,
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
        type:'html',
        valuePrepareFunction:(cell,row)=>{
          return '<a href="#/users/user-details/'+row.id+'" style=""cursor": "pointer"" id="'+row.id+'">'+row.id+'</a>';

        } 
      },
      
      firstName: {
        title: 'Name',
      },
      phone: {
        title: 'phone'
      },
      email: {
        title: 'Email'
      },
      username: {
        title: 'username'
      },
      active: {
        title: 'Active',
        type: 'custom',
        filter: false,
        renderComponent: StatusComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            // alert(`${row.active} saved!`)
          });},
         valuePrepareFunction: (cell, row) => {
          return "activate";
          },
          width:"15px"
      },
      adsposerstatus: {
        title: 'adsPoser',
        type: 'custom',
        filter: false,
        renderComponent: StatusComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            // alert(`${row.active} saved!`)
          });
        },
         valuePrepareFunction: (cell, row) => {
          return "suspend";
          },
          width:"15px"
      },
      registrationDate: {
        title: 'registrationDate', 
        filter : false,
      },
    },
  };
  ngOnInit() {
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

