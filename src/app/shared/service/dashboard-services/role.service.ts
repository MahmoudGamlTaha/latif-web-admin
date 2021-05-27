import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  _getRoleList='https://latifapp.herokuapp.com/api/public/roles'

  constructor(private _http:HttpClient) { }

  getRoleList(){
        return this._http.get(this._getRoleList)
        .pipe(
          catchError((err) => {
            return throwError(err.message || 'server issue ');
          })
        );
      
    
      }
}
