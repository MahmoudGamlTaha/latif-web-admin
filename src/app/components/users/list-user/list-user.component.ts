import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/service/dashboard-services/users.service';
import { userListDB } from 'src/app/shared/tables/list-users';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public user_list = []

  constructor(private userSer:UsersService) {
    this.userSer.userList().subscribe(
      (data:any)=>{
        this.user_list =data.response.data
        console.log(this.user_list)
      },(err)=>{console.log("err",err)}
    );
  }

  public settings = {
    subHeaders:false,
    actions:{
      position:"right",
      edit:false
  },
    columns: {
      id: {
        title: 'id',
      },
      
      firstName: {
        title: 'Name',
      },
      phone: {
        title: 'phone'
      },
      email: {
        title: 'Email'
      },
      username: {
        title: 'username'
      },
      active: {
        title: 'Active',
        type: 'custom',
        filter: false,
        renderComponent: StatusComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            // alert(`${row.active} saved!`)
          });},
        // valuePrepareFunction: (cell, row) => {
          
        //   console.log(row.active)
        //   if(row.active){return row.active }else{

        //   }
        //   },
          width:"15px"
      },
      registrationDate: {
        title: 'registrationDate'
      },
    },
  };

  ngOnInit() {
  }

}

