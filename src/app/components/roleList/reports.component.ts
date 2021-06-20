import { Component, OnInit } from '@angular/core';
import * as chartData from '../../shared/data/chart';
import { reportDB } from 'src/app/shared/tables/report';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public roleList = [];
  isLoading: boolean = true ;
closeResult;
deletedItemId;
  constructor(private modalService: NgbModal,private RoleSer:RoleService) {
    // this.report = reportDB.report;
  }


  public settings = {
    actions: {
      position: 'right'
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
        title: 'name',
        type : "html",
        valuePrepareFunction:(cell,row)=>{
          return "<a href='#/assignpermission/role-id/"+row.id+"'>"+row.name+"</a>";
          }

      },
      created_at: {
        title: 'created_at',
        filter: false,
      }
    },
  };

  ngOnInit() {
    this.RoleSer.getRoleList().subscribe(
      (data: any) => {
        this.isLoading = false;
        this.roleList = data;
        console.log(data)
      },
      (error) => {
      this.isLoading = false
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
