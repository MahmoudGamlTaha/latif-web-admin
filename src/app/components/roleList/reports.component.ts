import { Component, OnInit } from '@angular/core';
import * as chartData from '../../shared/data/chart';
import { reportDB } from 'src/app/shared/tables/report';
import { RoleService } from 'src/app/shared/service/dashboard-services/role.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public roleList = [];
  isLoading: boolean = true ;

  constructor(private RoleSer:RoleService) {
    // this.report = reportDB.report;
  }


  public settings = {
    actions: {
      position: 'right'
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

}
