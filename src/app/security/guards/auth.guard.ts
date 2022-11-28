import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   *
   */
  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   * 
   * @param route ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   * @returns boolean | urlTree
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.authService.isLogged || this.router.parseUrl('/login');
  }

}
