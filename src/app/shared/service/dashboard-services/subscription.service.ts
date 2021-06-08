import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  _getsubscriptionList = server.url + 'api/public/subscriptionTypes'

  constructor(private _http: HttpClient) { }

  getsubscriptionList() {
    return this._http.get(this._getsubscriptionList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );


  }
}
