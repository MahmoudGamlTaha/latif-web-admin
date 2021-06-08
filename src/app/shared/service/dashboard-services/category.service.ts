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


  _getPetCategory = server.url + 'api/public/pet-category'//GET  
  _getAccCategory = server.url + 'api/public/acc-category'//GET  
  _getAllCategory = server.url + 'api/public/category/0'//GET  
  _getFindCategoryById = server.url + 'api/public/category/find-by-id/id=4'//GET  
  _deleteCategory = server.url + 'api/public/category/delete?id=11' //POST  ( params-url )
  _createCategory = server.url + 'api/public/category/create' //POST ( body )
  _updateCategory = server.url + 'api/public/category/update' //POST ( body )  


  constructor(private _http: HttpClient) { }

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





}
