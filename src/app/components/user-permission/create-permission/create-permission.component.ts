import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';
import { UrlDesc } from './UrlDesc';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.scss']
})
export class CreatePermissionComponent implements OnInit {

  createform:FormGroup
  endPoints: UrlDesc;
  endPointsList: any
  public endPointsListPath: UrlDesc[]= [];
  pathMethod: any;
  
  constructor(private RoleSer:RoleService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createform=this.fb.group({
      HttpMethod : ['',[Validators.minLength(3),Validators.required]],
      HttpPath : ['',[Validators.minLength(3),Validators.required]]
    })
  
    this.RoleSer.getEndpoints().subscribe((data)=>{

      this.endPointsList = data;
      this.endPointsList.forEach(item => {
        
        let urlDesc:UrlDesc;
        let splitItem = item.split(" ")
        
          urlDesc= {
            http_Method:splitItem[0],
            http_Path:splitItem[1]
          } ;   

        this.endPointsListPath.push(urlDesc);

      }); 
    })
    console.log(this.endPointsListPath)
  }
  pathSelected(event){
    console.log(event.target.value)
    this.pathMethod=event.target.value;
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
