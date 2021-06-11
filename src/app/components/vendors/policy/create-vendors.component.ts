import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigurationService } from 'src/app/shared/service/dashboard-services/configuration.service';

@Component({
  selector: 'app-create-vendors',
  templateUrl: './create-vendors.component.html',
  styleUrls: ['./create-vendors.component.scss']
})
export class CreateVendorsComponent implements OnInit {

  policyData;
  constructor(private configSer:ConfigurationService) {
    
    this.configSer.getPolicy().subscribe(
      (data:any)=>{
        this.policyData=data.response.data
        console.log(data)
      }
    )

  }

  ngOnInit() { }

}
