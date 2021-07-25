import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { id } from '@swimlane/ngx-charts';
import { server } from 'src/environments/environment';
import { CookiesData } from '../cookies/CookiesData.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token: any;
  headers: any;
  _userList = server.url + 'api/usersList/all';
  _activateUser = server.url + 'api/activate-user?';
  _userDetail = server.url + 'api/public/account/details';
  _userSuspend = server.url + 'api/public/account/suspend';

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
  findUserDetails(id){
    console.log(this._userDetail);
    return this._http.get<any>(this._userDetail+ "?id=" + id,{headers : this.headers});
  }
  suspendUser(poser:boolean, id:number){
    return this._http.post(this._userSuspend + "?user_id=" + id +"&poser="+poser,{},  { headers: this.headers });
  }

}
