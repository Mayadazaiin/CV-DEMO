import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userData = localStorage.getItem('userData');
    const token = userData ? JSON.parse(userData).token : null;

    const clonedRequest = token
      ? req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        })
      : req;

    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        console.error('HTTP Error:', error);


        if (error.status === 401) {
          console.log('Unauthorized access - Token might be expired');

        }

        throw error;
      })
    );
  }
}
