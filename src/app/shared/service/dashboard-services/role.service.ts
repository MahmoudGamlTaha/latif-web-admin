import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  _getRoleList = server.url + 'api/public/roles'

  constructor(private _http: HttpClient) { }

  getRoleList() {
    return this._http.get(this._getRoleList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );


  }
}
