import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';
import { CookiesData } from '../cookies/CookiesData.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  _getRoleList = server.url + 'api/public/roles'
  
  _assUserPermissionList = server.url + 'api/public/assignUserPermission/'
  _UserPermissionList = server.url + 'api/public/userPermission/'

    _getByRoleId = server.url + 'api/public/assignUserPermission/getByRoleId?roleId='

  _createAssUserPermission = server.url + 'api/public/assignUserPermission/create/'//post "roleId":2,  "permissionId":26
  
  _createUserPermission = server.url + 'api/public/userPermission/create/'//post  "httpMethod":"POST",  "httpPath":"/api/public/assignUserPermission/create/"
  _updateUserPermission = server.url + 'api/public/userPermission/update/'//post  "httpMethod":"POST",  "httpPath":"/api/public/assignUserPermission/create/"

  _removeAssUserPermission = server.url + 'api/public/assignUserPermission/remove/'//post "roleId":2,  "permissionId":26
  _removeUserPermission = server.url + 'api/public/userPermission/remove/'//post    id
  _endpoints = server.url + 'api/public/endpoints'

   headers: HttpHeaders;

  constructor(private _http: HttpClient, private cookies : CookiesData) { 
    this.headers=new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization": `${this.cookies.getToken()}`
    })
  }
  getEndpoints(){
    return this._http.get(this._endpoints)
        .pipe(
            catchError((err) => {
            return throwError(err.message || 'server issue ');
         })
       );
  }
  
  getRoleList() {
    return this._http.get(this._getRoleList)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
  getByRoleId(roleId) {
    return this._http.get(this._getByRoleId + roleId ,{headers:this.headers})
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
  UserPermissionList() {
    return this._http.get(this._UserPermissionList,{headers:this.headers})
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

  createAssignPermission(data) {
    return this._http.post(this._createAssUserPermission,
      {roleId:data.RoleId,permissionId:data.PermissionId},
      {headers:this.headers})
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
  createUserPermission(data) {
    return this._http.post(this._createUserPermission,
      {httpMethod:data.HttpMethod,httpPath:data.HttpPath},
      {headers:this.headers})
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }
  updateUserPermission(data) {
    return this._http.post(this._updateUserPermission,
      {id:data.Id,httpMethod:data.HttpMethod,httpPath:data.HttpPath},
      {headers:this.headers})
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
