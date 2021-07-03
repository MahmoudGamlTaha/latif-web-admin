import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit {
  public permissionList = [];
  isLoading: boolean = true;
closeResult;
deletedItemId;
  constructor(private modalService: NgbModal,private RoleSer:RoleService) {
  }


  public settings = {
    actions: false,
      delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    columns: {
      id: {
        title: 'id',
        type:"html",
        valuePrepareFunction: (cell, row) => {
          return '<a href="#/user-permission/update-permission/'+row.id+'" >'+row.id+' </a>';}

      },
      httpMethod: {
        title: 'httpMethod',

      },
      httpPath: {
        title: 'httpPath',
    },

      created_at: {
        title: 'created_at'
      },
      updated_at: {
        title: 'updated_at'
      },

    },
  };

  ngOnInit() {
    this.RoleSer.UserPermissionList().subscribe(
      (data: any) => {
        this.isLoading=false;
        this.permissionList = data.response.data.content;
        console.log("data",data)

      },
      (error) => {
        this.isLoading=false
        console.log('error', error);
      }
    );
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
