import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';
import { CookiesData } from '../cookies/CookiesData.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token: any;
  headers: any;
  _userList = server.url + 'api/usersList/all'
  _activateUser = server.url + 'api/activate-user?'

  constructor(private _http: HttpClient, private cookies:CookiesData) {
       this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.cookies.getToken()}`
    })
  }

  userList() {
    return this._http.get<any[]>(this._userList, { headers: this.headers });
  }

  activate(id, active) {
    return this._http.post<any[]>(this._activateUser + "active=" + active + "&user_id=" + id, {}, { headers: this.headers });
  }

}
