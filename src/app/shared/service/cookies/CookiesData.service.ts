//npm i ngx-cookie-service@2.1.0
import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'
@Injectable({
    providedIn: 'root',
  })
export class CookiesData{
   tokenKey:string = "token";
   userKey:string = "userId";
    constructor(private cookiesService:CookieService){
    }
   public setToken(token:string){
       this.cookiesService.set(this.tokenKey, token);
   }
   public setUserId(userId){
      this.cookiesService.set(this.userKey, userId);
   }
   public checkToken() : boolean{
       let checkExist:boolean  = this.cookiesService.check(this.tokenKey);
       return checkExist;
   }
   public checkUser() : boolean{
      let checkExist:boolean  = this.cookiesService.check(this.userKey);
      return checkExist;
  }
 
  public getUser(): string{
   let user:string = null;
   if(this.checkUser()){
      user = this.cookiesService.get(this.userKey);
   }   
   return user; 
}
   public getToken(): string{
      let token:string = null;
      if(this.checkToken()){
         token = 'Bearer ' + this.cookiesService.get(this.tokenKey);
      }   
      return token; 
   }
}