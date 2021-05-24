import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Icategory } from './Icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _getcategoryList='https://latifapp.herokuapp.com/api/public/ads-type/list'
  _getCategoryType='https://latifapp.herokuapp.com/api/public/cat-by-adType/type='

  constructor(private _http:HttpClient) {  }

  getCategoryList(){

    return this._http.get<any>(this._getcategoryList);

  }

  getCategoryType(idType):Observable<Icategory[]>{
console.log(this._getCategoryType+idType)
    return this._http.get<Icategory[]>(this._getCategoryType+idType)
    .pipe(
      catchError((err) => {
        return throwError(err.message || 'server issue ');
      })
    );
 

  }



}
