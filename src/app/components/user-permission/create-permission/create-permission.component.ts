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
  endPointsList: any;
  endPointsListSplit: any;
  endPointsListMethod: [];
  endPointsListPath: [];
  constructor(private RoleSer:RoleService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createform=this.fb.group({
      HttpMethod : ['',[Validators.minLength(3),Validators.required]],
      HttpPath : ['',[Validators.minLength(3),Validators.required]]
    })

    this.RoleSer.getEndpoints().subscribe((data)=>{

      this.endPointsList=data;
      this.endPointsList.filter((item)=>{
        this.endPointsListSplit=item.split(" ")
        // this.endPointsListMethod
        // this.endPointsListPath
        console.log("method",this.endPointsListSplit[0])
        console.log("path",this.endPointsListSplit[1])

      })
      console.log(data)
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
