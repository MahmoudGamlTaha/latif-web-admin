import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs'; 
import { Token } from '../../data/Token';
import { AuthService } from './auth.service';

 
@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(
    private router: Router,
    private authSer: AuthService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser =Token.bearer + Token.myToken
    if (currentUser) {
        // authorised so return true
        return true;
    }

       // not logged in 
    this.router.navigate(['/auth/login']);
    return false;
    
  
}
}