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

    const body={
      name:data.CategoryName,
      nameAr:data.NameAr,
      type:data.Type,
      active:data.Active,
      icon:data.Icon,
      icon_select:data.Icon_select,
      isExternalLink:data.External,
    }
    const JSONbody=JSON.stringify(body)
    console.log(body)
    return this._http.post(this._createCategory,JSONbody,{
      headers:this.headers
    })
    // .subscribe(
    //   (data)=>{console.log(data)},(err)=>{console.log("err",err)}
    // )
  }

}
