import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitesService {

  _getcitesList = server.url + 'api/public/cites'

  constructor(private _http:HttpClient) { }

  getcitesList(){
        return this._http.get(this._getcitesList)
        .pipe(
          catchError((err) => {
            return throwError(err.message || 'server issue ');
          })
        );
      
    
      }
}
