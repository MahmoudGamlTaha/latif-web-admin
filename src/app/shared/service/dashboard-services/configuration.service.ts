import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  _getPolicy=server.url + 'api/public/policy'
  constructor(private _http:HttpClient) { }

  getPolicy(){
    return this._http.get(this._getPolicy)
  }
}
