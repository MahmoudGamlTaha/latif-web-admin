import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PoliciesService } from 'src/app/shared/service/dashboard-services/policies.service';

@Component({
  selector: 'app-create-vendors',
  templateUrl: './create-vendors.component.html',
  styleUrls: ['./create-vendors.component.scss']
})
export class CreateVendorsComponent implements OnInit {

  policyData;
  constructor(private policiesServ:PoliciesService) {
    
    this.policiesServ.getPolicy().subscribe(
      (data:any)=>{
        this.policyData=data.response.data
        console.log(data)
      }
    )

  }

  ngOnInit() { }

}
