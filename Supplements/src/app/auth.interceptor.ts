/*
 * This is part of the authorization.
 */

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { UserService } from './users.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.userService.getAccessToken();
    req = req.clone({
      setHeaders: {
        Authorization: `JWT ${accessToken}`,
      },
    });
    return next.handle(req);
  }
}
