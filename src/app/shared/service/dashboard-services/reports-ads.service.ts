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

  constructor(private _http: HttpClient) {
    this.token = Token.bearer + Token.myToken;
    // var headers = new HttpHeaders().set("Authorization", token);
    this.headers = new HttpHeaders().set("Authorization", JSON.parse(localStorage.getItem("currentUser")));
  }

  getAllReportedAds() {

    return this._http.get<any[]>(this._getAllReportedAds, { headers: this.headers });

    console.log("URL", this._getAllReportedAds + this.token)
  }
}
