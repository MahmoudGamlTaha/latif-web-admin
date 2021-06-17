import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.scss']
})
export class CreatePermissionComponent implements OnInit {

  createform:FormGroup
  constructor(private RoleSer:RoleService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createform=this.fb.group({
      HttpMethod : ['',[Validators.minLength(3),Validators.required]],
      HttpPath : ['',[Validators.minLength(3),Validators.required]]
    })

  }
  get HttpMethod() {
    return this.createform.get('HttpMethod');
  }
  get HttpPath() {
    return this.createform.get('HttpPath');
  }
  create(){
    console.log(this.createform.value)
    this.RoleSer.createUserPermission(this.createform.value).subscribe(
      (data: any) => {

        console.log(data)

      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
