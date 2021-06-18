import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';

@Component({
  selector: 'app-role-id',
  templateUrl: './role-id.component.html',
  styleUrls: ['./role-id.component.scss']
})
export class RoleIdComponent implements OnInit {
  public roleIdList = [];
  roleId ;
  roleName;
  constructor(private RoleSer:RoleService,private router:ActivatedRoute) {
  this.roleId=router.snapshot.paramMap.get('id')
  }


  public settings = {
    actions: false,
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

}
