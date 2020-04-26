/*
 * This is in order to prevent people from accessing the URLs of people's profiles
 * when they don't log in. Authorization.
 */

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public userService: UserService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isLoggedIn() !== true) {
      window.alert('Access not allowed!');
      this.router.navigate(['/setup']);
    }
    return true;
  }
}
