import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit {
  public permissionList = [];

  constructor(private RoleSer:RoleService) {
  }


  public settings = {
    actions: false,
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
        this.permissionList = data.response.data.content;
        console.log("data",data)

      },
      (error) => {
        console.log('error', error);
      }
    );
  }

}
