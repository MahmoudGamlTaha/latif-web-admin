import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs'; 
import { AuthService } from './auth.service';
import { JWTTokenService } from './jwttoken.service';

 
@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private loginService: AuthService,
              private jwtService: JWTTokenService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable | Promise | boolean {
      if (this.jwtService.getUser()) {
          if (this.jwtService.isTokenExpired()) {
            // Should Redirect Sig-In Page
          } else {
            return true;
          }
      } else {
        return new Promise((resolve) => {
          this.loginService.LogInUser().then((e) => {
             resolve(true);
          }).catch((e) => {
            // Should Redirect Sign-In Page
          });
        });
      }
  }
}