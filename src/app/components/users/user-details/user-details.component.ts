import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/service/dashboard-services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
   public user:User;
   public isLoading:boolean;
  constructor( private router: ActivatedRoute, private userService:UsersService) {
           this.user = new User();
           this.user.id = parseInt(this.router.snapshot.paramMap.get("id"));
           this.isLoading = false;
           this.getUserDetails();
                    
   }
   getUserDetails(){
     this.userService.findUserDetails(this.user.id).subscribe((data:any)=>{
       this.user.city = data.response.data.city;
       this.user.email = data.response.data.email;
       this.user.role = data.response.data.role;
       this.user.phone = data.response.data.phone;
       this.user.firstName = data.response.data.firstName;
       this.user.registrationDate = data.response.data.registrationDate;
       this.user.zip = data.response.data.zip;
       this.user.userName = data.response.data.userName;
       this.user.emailVerified = data.response.data.emailVerified;
       this.user.prodCount = data.response.data.prodCount;
       this.user.roles = data.response.data.roles;
       this.user.lastName = data.response.data.lastName;
       this.user.active = data.response.data.active;
       this.user.adsPoser = data.response.data.adsPoserStatus;
       this.isLoading = true;

    });
    console.log(this.user);
   }
  ngOnInit(): void {
  }
  public onClick(event){

  }
  

}
