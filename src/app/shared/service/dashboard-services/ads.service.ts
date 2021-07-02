import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';
import { adsFilter } from '../../models/adsFilter';
import { CookiesData } from '../cookies/CookiesData.service';

@Injectable({
  providedIn: 'root',
})
export class AdsService {

  _getAdsList = server.url + 'api/public/ads/nearest';
  _getAdsType = server.url + 'api/public/ads-type/list';
  _getAdsByIdType = server.url + 'api/public/ads/ad-by-Id?id=';
  _changeStateOfAds = server.url + 'api/public/ads/adActivation?';
  token;
  headers;
  constructor(private _http: HttpClient, private cookie:CookiesData) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.cookie.getToken()}`
    })
  }

  changeStateOfAds(adsId, status) {
    const body = {
      id: adsId,
      activate: status,
    }
    return this._http.post(this._changeStateOfAds + 'activate=' + status + '&' + 'id=' + adsId,
      {},
      { headers: this.headers })
  }



  getAdsList() {
    return this._http.get(this._getAdsList).pipe(
      catchError((err) => {
        return throwError(err.message || 'getAdsList server issue ');
      })
    );
  }

  getAdsType() {
    return this._http.get(this._getAdsType).pipe(
      catchError((err) => {
        return throwError(err.message || 'getAdsType server issue ');
      })
    );
  }

  getAdsByIdType(AdsId: number): Observable<any[]> {
    return this._http.get<any>(this._getAdsByIdType + AdsId).pipe(
      catchError((err) => {
        return throwError(err.message || 'getAdsType server issue ');
      })
    );
  }
  public getFilterAds(adsFilter: adsFilter): Observable<any[]> {
    let adsUrl = server.url + 'api/public/ads/nearest?pageSize=20';
    if (adsFilter.category != undefined && adsFilter.category > 0) {
      adsUrl += '&category=' + adsFilter.category;
    }
    if (adsFilter.type != undefined && adsFilter.type != 'ALL') {
      adsUrl += '&type=' + adsFilter.type;
    }
    if (adsFilter.page != undefined) {
      adsUrl += '&page=' + adsFilter.page;
    }
    console.log(adsUrl);
    return this._http.get<any[]>(adsUrl);
  }
}
