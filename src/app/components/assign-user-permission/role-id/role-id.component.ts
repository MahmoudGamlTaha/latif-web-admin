import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role-id',
  templateUrl: './role-id.component.html',
  styleUrls: ['./role-id.component.scss']
})
export class RoleIdComponent implements OnInit {
  public roleIdList = [];
  roleId ;
  roleName;
  closeResult;
deletedItemId;
  constructor(private modalService: NgbModal,private RoleSer:RoleService,private router:ActivatedRoute) {
  this.roleId=router.snapshot.paramMap.get('id')
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
      },
      name: {
        title: 'name',

      },
      httpMethod: {
        title: 'httpMethod',
      // valuePrepareFunction: (cell, row) => {return row.permissions;}
    },
      httpPath: {
      title: 'httpPath',
  },

      created_at: {
        title: 'created_at',
        filter: false,
      },
      updated_at: {
        title: 'created_at',
        filter: false,
      },

    },
  };

  ngOnInit() {
    this.RoleSer.getByRoleId(this.roleId).subscribe(
      (data: any) => {
        this.roleName = data.response.data.name;
        this.roleIdList = data.response.data.permissions;
        console.log("data",this.roleIdList)
        console.log(data.response.data)

      },
      (error) => {
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
