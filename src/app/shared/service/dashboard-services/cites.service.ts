import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitesService {

  _getcitesList='https://latifapp.herokuapp.com/api/public/cites'

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
