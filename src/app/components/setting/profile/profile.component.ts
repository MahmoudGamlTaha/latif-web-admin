import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/service/dashboard-services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id
  email
  firstName
  lastName
  address
  city
  state
  phone
  username
  country
  emailVerified
  avatar
  registrationDate
  constructor(private profileSer: ProfileService) { }

  ngOnInit() {

    this.profileSer.getProfileDetails().subscribe(
      (data: any) => {
        console.log(data)
        this.id = data.response.data.id
        this.email = data.response.data.email
        this.firstName = data.response.data.firstName
        this.lastName = data.response.data.lastName
        this.address = data.response.data.address
        this.city = data.response.data.city
        this.state = data.response.data.state
        this.phone = data.response.data.phone
        this.username = data.response.data.id
        this.country = data.response.data.country
        this.emailVerified = data.response.data.emailVerified
        this.avatar = data.response.data.avatar
        this.registrationDate = data.response.data.registrationDate
      }
    )
  }

}
