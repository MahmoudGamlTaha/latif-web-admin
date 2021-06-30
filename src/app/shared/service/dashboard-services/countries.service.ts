import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';
import { city } from '../../models/city';
import { countries } from '../../models/cityFiltterByCountry';
import { country } from '../../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  _getcitesList = server.url + 'api/public/cites-all'
  _getCountriesList = server.url + 'api/public/countries'
  _createcity = server.url + 'api/public/cites/create'
  _createCountry = server.url + 'api/public/country/create'
  _findByCountryId = server.url + 'api/public/city/find-by-country-id?'
  headers
  token

  constructor(private _http: HttpClient) {

    this.token = JSON.parse(localStorage.getItem('currentUser'));

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  getcitesList() {
    return this._http.get(this._getcitesList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }


  getCountriesList() {
    return this._http.get(this._getCountriesList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  createcity(data:city) {
    return this._http.post(this._createcity, data, { headers: this.headers })
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  createCountry(data:country) {
    return this._http.post(this._createCountry, data, { headers: this.headers })
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  findByCountryId(data: countries) {

    console.log(data)
    let url = this._findByCountryId;

    if (data.id != null && data.id != undefined && data.id != 0 && !isNaN(data.id)) {
      url += 'country=' + data.id;
      return this._http.get(url)
    }
    return this._http.get(this._getcitesList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
}
