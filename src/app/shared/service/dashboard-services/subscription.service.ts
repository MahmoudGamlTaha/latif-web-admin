import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';
import { Subscription } from '../../models/subscription';
import { CookiesData } from '../cookies/CookiesData.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  _getsubscriptionList = server.url + 'api/public/subscriptionTypes'
  _createSubscription =  server.url + 'api/public/subscriptionTypes/create'
  token:string
  headers:any
  constructor(private _http: HttpClient, private cookies:CookiesData) {
    this.token = this.cookies.getToken();
    // var headers = new HttpHeaders().set("Authorization", token);
    this.headers = new HttpHeaders().set("Authorization", this.cookies.getToken());
   }
  getsubscriptionList() {
    return this._http.get(this._getsubscriptionList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
  createSubscription(subscription : Subscription){
    return this._http.post(this._createSubscription, subscription, { headers: this.headers });
  }
}
