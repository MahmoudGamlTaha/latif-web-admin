import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { CookiesData } from '../cookies/CookiesData.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  _getProfileDetails = server.url + 'api/public/account/profile'
  headers
  token: any;
  constructor(private _http: HttpClient,  private cookies: CookiesData) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.cookies.getToken()}`
    })
  }

  getProfileDetails() {

    return this._http.get(this._getProfileDetails, { headers: this.headers })
  }
}
