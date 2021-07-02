//npm i ngx-cookie-service@2.1.0
import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'
@Injectable({
    providedIn: 'root',
  })
export class CookiesData{
   tokenKey:string = "token";
    constructor(private cookiesService:CookieService){
    }
   public setToken(token:string){
       this.cookiesService.set(this.tokenKey, token);
   }
   public checkToken() : boolean{
       let checkExist:boolean  = this.cookiesService.check("token");
       return checkExist;
   }

   public getToken(): string{
      let token:string = null;
      if(this.checkToken()){
         token = this.cookiesService.get(this.tokenKey);
      }   
      return token; 
   }
}