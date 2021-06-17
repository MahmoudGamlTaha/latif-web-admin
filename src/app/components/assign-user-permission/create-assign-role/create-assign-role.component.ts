import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';

@Component({
  selector: 'app-create-assign-role',
  templateUrl: './create-assign-role.component.html',
  styleUrls: ['./create-assign-role.component.scss']
})
export class CreateAssignRoleComponent implements OnInit {

  createform:FormGroup
  roleList: any;
  constructor(private RoleSer:RoleService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.RoleSer.getRoleList().subscribe((data:any)=>{
      this.roleList =data
      console.log(this.roleList)
    })
    
    this.createform=this.fb.group({
      RoleId : ['',[Validators.required]],
      PermissionId : ['',[Validators.required]]
    })

  }
  get RoleId(){
    return this.createform.get('RoleId')
  }
  get PermissionId(){
    return this.createform.get('PermissionId')
  }
  create(){
    console.log(this.createform.value)
    this.RoleSer.createAssignPermission(this.createform.value).subscribe(
      (data: any) => {

        console.log(data)

      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
