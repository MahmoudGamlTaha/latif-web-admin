import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from 'src/environments/environment';
import { Token } from '../../data/Token';

@Injectable({
  providedIn: 'root'
})
export class ReportsAdsService {

  constructor(private _http:HttpClient) { }

  _getAllReportedAds= server.url+"api/public/reportedAds/reportedAds/"

  getAllReportedAds() {
    let token =  Token.bearer + Token.myToken;
    // var headers = new HttpHeaders().set("Authorization", token);
    var headers = new HttpHeaders().set("Authorization", JSON.parse(localStorage.getItem("currentUser")));

    return this._http.get<any[]>(this._getAllReportedAds, {headers:headers});

    console.log("URL",this._getAllReportedAds+token)
  }
}
