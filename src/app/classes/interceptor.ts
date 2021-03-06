import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthService} from '../services/auth/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getAccessToken()}`
      }
    });
    return next.handle(request);
  }
}
