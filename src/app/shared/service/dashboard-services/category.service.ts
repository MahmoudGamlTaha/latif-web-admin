import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../../data/Token';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';
import { Icategory } from './Icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _getcategoryList = server.url + 'api/public/ads-type/list'
  _getCategoryType = server.url + 'api/public/cat-by-adType/type='
  _createCategory = server.url + 'api/public/category/create'
  _deleteCategory = server.url + 'api/public/category/delete?id='

  token
  headers
  constructor(private _http: HttpClient) { 

    this.token = JSON.parse(localStorage.getItem('currentUser')) ;

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

  }

  getCategoryList(): Observable<Icategory[]> {


    return this._http.get<Icategory[]>(this._getcategoryList);
  }

  getCategoryType(idType): Observable<Icategory[]> {
    console.log(this._getCategoryType + idType)
    return this._http.get<Icategory[]>(this._getCategoryType + idType)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  createCategory(data){
    return this._http.post(this._createCategory,data,{
      headers:this.headers
    })
    // .subscribe(
    //   (data)=>{console.log(data)},(err)=>{console.log("err",err)}
    // )
  }

  deleteCategory(CategoryId) {
    return this._http.post(this._deleteCategory+CategoryId,{}, { headers: this.headers })
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }


}
