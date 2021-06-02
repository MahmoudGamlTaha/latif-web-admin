import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';
// import { HttpHeaders, HttpParams } from '@angular/common/http';


export interface authResponseData {

  idToken: String;
  email: string;
  refreshToken: string;
  expireesIn: string;
  localId: string

}

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { server } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public headers: HttpHeaders;

  /**
   * test login {
      "mobile":"01020187068",
      "password":"1234@"
  }
  * */
  _authLogin = server.url + "login"
  _authregister = server.url + "api/public/account/registration"

  constructor(private _http: HttpClient, private router: ActivatedRoute) {

  }


  LogInUser(data: any): Observable<any> {
    // const headers = new Headers({
    //   'Content-Type': 'application/json',
    //    'Authorization': `Bearer ${auth_token}`
    // })
    this.headers = new HttpHeaders()
      .set('Authorization', '')
      .set('Content-Type', 'application/json');
    const options = {
      headers: this.headers,
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
      responseType: "json"
    };
    console.log("service", data)
    return this.remoteLogin(data);
    let body = { mobile: data.mobile, password: data.password };
    return this._http.post(this._authLogin, { body }, { headers: this.headers })
    // return this._http.post(this._authLogin+'?'+'mobile='+email+'&password='+password,'' )
    // 
    // { headers: headers }

  }
  public remoteLogin(data: any): Observable<any> {

    let body = { mobile: data.mobile, password: data.password }
    return this._http.post(this._authLogin, {
      body
    }, {
      headers: new HttpHeaders()
        .set('Authorization', 'ttr')
        .set('Content-Type', 'application/json'),

      observe: 'response'
    })
    /*.subscribe(res => {
        let token = res.headers.get('Authorization')
        console.log("res",res);
        console.log(res.headers);
        console.log(token);
    });*/
  }
  signUpUser(data: any): Observable<any> {
    // const headers = new Headers({
    //   'Content-Type': 'application/json',
    //   // 'Authorization': `Bearer ${auth_token}`
    // })
    return this._http.post<authResponseData>(this._authregister, { email: data.email, confirmPassword: data.confirmPassword, mobile: data.mobile, password: data.password, name: data.name })
    // { headers: headers }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }




}
