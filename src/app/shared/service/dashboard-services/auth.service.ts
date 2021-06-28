import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LoginComponent } from 'src/app/components/auth/login/login.component';

// import { Http, Headers, Response } from '@angular/http';
// import { HttpHeaders, HttpParams } from '@angular/common/http';

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
  public auth_token: any

  /**
   * test login {
      "mobile":"01020187068",
      "password":"1234@"
  } 
  * */
  _authLogin = server.url + "login"
  _authregister = server.url + "api/public/account/registration"

  constructor(private _http: HttpClient, private router: ActivatedRoute,
    private route: Router) {

  }


  LogInUser(data: any) {
    let body = { mobile: data.mobile, password: data.password };
    let exdays = 1;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    const JSONbody = JSON.stringify(body);



    console.log("service", data)

    return this._http.post<any>(this._authLogin, JSONbody, {
      headers: headers,
    }).subscribe((res) => {


      console.log(res)
      this.auth_token = res.Authorization;
      Token.myToken = this.auth_token;
      Token.bearer = 'Bearer ';
      console.log("this.auth_token", this.auth_token)

      headers.append('Authorization', JSON.stringify(this.auth_token))
      localStorage.setItem('currentUser', JSON.stringify(Token.bearer + Token.myToken));
      // this.setCookie('currentUser', JSON.stringify(Token.bearer + Token.myToken), exdays)
      this.route.navigate(['dashboard/default'])


    }, (err) => {
      Token.error = true;
      console.log("myerr", err.error.error)

    }

    )
  }
  // setCookie(cname, cvalue, exdays) {
  //   let d = new Date();
  //   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  //   let expires = "expires=" + d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }

  // signUpUser(data: any): Observable<any> {
  //   // const headers = new Headers({
  //   //   'Content-Type': 'application/json',
  //   //   // 'Authorization': `Bearer ${auth_token}`
  //   // })
  //   return this._http.post<any>(this._authregister, { email: data.email, confirmPassword: data.confirmPassword, mobile: data.mobile, password: data.password, name: data.name })
  //   // { headers: headers }
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }




}
