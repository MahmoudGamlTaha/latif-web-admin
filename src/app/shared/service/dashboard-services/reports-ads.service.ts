import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from 'src/environments/environment';
import { Token } from '../../data/Token';

@Injectable({
  providedIn: 'root'
})
export class ReportsAdsService {

  token
  headers

  _getAllReportedAds = server.url + "api/public/reportedAds/reportedAds/"
  _getReasonOfReportedAds = server.url + "api/public/reasons"
  _createReasonOfReportedAds = server.url + "api/public/reasons/create?reason=" //reason 
  _updateReasonOfReportedAds = server.url + "api/public/reasons/update?"//id  reason 
  _deleteReasonOfReportedAds = server.url + "api/public/reasons/remove?id="//id 

  constructor(private _http: HttpClient) {
    this.token = Token.bearer + Token.myToken;
    // var headers = new HttpHeaders().set("Authorization", token);
    this.headers = new HttpHeaders().set("Authorization", JSON.parse(localStorage.getItem("currentUser")));
  }

  getAllReportedAds() {

    return this._http.get<any[]>(this._getAllReportedAds, { headers: this.headers });

    console.log("URL", this._getAllReportedAds + this.token)
  }

  getReasonOfReportedAds() {
    return this._http.get<any[]>(this._getReasonOfReportedAds, { headers: this.headers });

  }

  createReasonOfReportedAds(data) {
    console.log(data)
    return this._http.post<any[]>(this._createReasonOfReportedAds + data.Reason+'&valueAr='+data.ReasonAr, {}, { headers: this.headers });
  }
  updateReasonOfReportedAds(data) {
    console.log(data)

    return this._http.post<any[]>(this._updateReasonOfReportedAds + 'id=' + data.Id + '&reason=' + data.Reason+ '&reasonAr=' + data.ReasonAr, {}, { headers: this.headers });

  }
  deleteReasonOfReportedAds(reasonId) {
    console.log(reasonId)

    return this._http.post<any[]>(this._deleteReasonOfReportedAds + reasonId, {}, { headers: this.headers });

  }
}
