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
  constructor(private RoleSer:RoleService,private router:ActivatedRoute) {
  this.roleId=router.snapshot.paramMap.get('id')
  }


  public settings = {
    actions: {
      position: 'right'
    },
    columns: {
      id: {
        title: 'id',
      },
      // name: {
      //   title: 'name',

      // },
      // permissions: {
      //   title: 'permissions'
      // },
      // created_at: {
      //   title: 'created_at'
      // }
    },
  };

  ngOnInit() {
    this.RoleSer.getByRoleId(this.roleId).subscribe(
      (data: any) => {
        this.roleIdList = data.response.data;
        console.log("data",this.roleIdList)
        console.log(data.response.data)

      },
      (error) => {
        console.log('error', error);
      }
    );
  }

}
