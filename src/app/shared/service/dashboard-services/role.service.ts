import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  _getRoleList = server.url + 'api/public/roles'
  
  _assUserPermissionList = server.url + 'api/public/assignUserPermission/'
  _UserPermissionList = server.url + 'api/public/UserPermission/'

    _getByRoleId = server.url + 'api/public/assignUserPermission/getByRoleId?roleId='

  _createAssUserPermission = server.url + 'api/public/assignUserPermission/create/'//post "roleId":2,  "permissionId":26
  _createUserPermission = server.url + 'api/public/userPermission/create/'//post  "httpMethod":"POST",  "httpPath":"/api/public/assignUserPermission/create/"
  _removeAssUserPermission = server.url + 'api/public/assignUserPermission/remove/'//post "roleId":2,  "permissionId":26
  _removeUserPermission = server.url + 'api/public/userPermission/remove/'//post    id
  token: any;
  headers: HttpHeaders;

  constructor(private _http: HttpClient) { 

    this.token=JSON.parse(localStorage.getItem('currentUser'))
    this.headers=new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization": `${this.token}`
    })
  }

  
  getRoleList() {
    return this._http.get(this._getRoleList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
  getByRoleId() {
    return this._http.get(this._getByRoleId,{headers:this.headers})
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
  // assUserPermissionList() {
  //   return this._http.get(this._assUserPermissionList,{headers:this.headers})
  //     .pipe(
  //       catchError((err) => {
  //         return throwError(err.message || 'server issue ');
  //       })
  //     );
  // }
  // UserPermissionList() {
  //   return this._http.get(this._UserPermissionList,{headers:this.headers})
  //     .pipe(
  //       catchError((err) => {
  //         return throwError(err.message || 'server issue ');
  //       })
  //     );
  // }

  createAssUserPermission(data) {
    return this._http.post(this._createAssUserPermission,{},{headers:this.headers})
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
  createUserPermission(data) {
    return this._http.post(this._createUserPermission,{},{headers:this.headers})
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  removeAssUserPermission(data) {
    return this._http.post(this._removeAssUserPermission,{},{headers:this.headers})
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  removeUserPermission(data) {
    return this._http.post(this._removeUserPermission,{},{headers:this.headers})
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
}
