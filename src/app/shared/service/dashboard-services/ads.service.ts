import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  _getAdsList='https://latifapp.herokuapp.com/api/public/ads/nearest';
  _getAdsType='https://latifapp.herokuapp.com/api/public/ads-type/list';


  constructor(private _http:HttpClient) { }


  getAdsList (){
    return this._http.get(this._getAdsList) .pipe(
      catchError((err) => {
        return throwError(err.message || 'getAdsList server issue ');
      })
    );
  }

  getAdsType (){
    return this._http.get(this._getAdsType) .pipe(
      catchError((err) => {
        return throwError(err.message || 'getAdsType server issue ');
      })
    );
  }

  
}
