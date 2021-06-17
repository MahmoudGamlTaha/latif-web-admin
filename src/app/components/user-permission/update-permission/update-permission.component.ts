import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';

@Component({
  selector: 'app-update-permission',
  templateUrl: './update-permission.component.html',
  styleUrls: ['./update-permission.component.scss']
})
export class UpdatePermissionComponent implements OnInit {

  updateform:FormGroup
  permissionId: any;
  permissionList: any;
  data: any;
  constructor(private RoleSer:RoleService,private fb:FormBuilder,private router:ActivatedRoute) { 
    this.permissionId=router.snapshot.paramMap.get('id')

  }

  ngOnInit(): void {
    this.updateform=this.fb.group({
      Id:[this.permissionId],
      HttpMethod : [],
      HttpPath : [],
    })

    this.RoleSer.UserPermissionList().subscribe(
      (data: any) => {
        this.permissionList = data.response.data.content;
        console.log(this.permissionList)
        this.permissionList.filter((item)=>{
          if(item.id == this.permissionId){
            this.data = item
            this.updateform.patchValue({
              HttpMethod:item.httpMethod,HttpPath:item.httpPath
            })
            console.log("item",item)

          }
          console.log()
        }   )
      },
      (error) => {
        console.log('error', error);
      }
    );


  }

  update(){
    console.log(this.updateform.value)
    this.RoleSer.updateUserPermission(this.updateform.value).subscribe(
      (data: any) => {
        console.log(data)
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
