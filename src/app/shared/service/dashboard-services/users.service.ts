import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token: any;
  headers: any;
  _userList = server.url + 'api/usersList/all'
  _activateUser = server.url + 'api/activate-user?'

  constructor(private _http: HttpClient) {
    this.token = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  userList() {
    return this._http.get<any[]>(this._userList, { headers: this.headers });
  }

  activate(id, active) {
    return this._http.post<any[]>(this._activateUser + "active=" + active + "&user_id=" + id, {}, { headers: this.headers });
  }

}
