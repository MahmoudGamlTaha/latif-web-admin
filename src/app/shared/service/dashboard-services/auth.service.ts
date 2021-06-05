import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
import { ActivatedRoute, Router } from '@angular/router';
import { server } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Token } from '../../data/Token';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public headers: HttpHeaders;
  public auth_token:any
  /**
   * test login {
      "mobile":"01020187068",
      "password":"1234@"
  }
  * */
  _authLogin = server.url + "login"
  _authregister = server.url + "api/public/account/registration"

  constructor(private _http: HttpClient, private router: ActivatedRoute,private route:Router) {

  }


  LogInUser(data: any) {
    let body = { mobile: data.mobile, password: data.password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    
    const JSONbody=JSON.stringify(body);


      
    console.log("service", data)

    return this._http.post<any>(this._authLogin, JSONbody, {
      headers: headers,
    }).subscribe((res) => {
      

        console.log(res)
        this.auth_token=res.Authorization;
        Token.myToken = this.auth_token;
        Token.bearer =  'Bearer ';
        console.log("this.auth_token",this.auth_token)

      headers.append('Authorization',JSON.stringify(this.auth_token))
      localStorage.setItem('currentUser', JSON.stringify(Token.bearer+Token.myToken));
      this.route.navigate(['dashboard/default'])
      
      
    }
      
      );
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
