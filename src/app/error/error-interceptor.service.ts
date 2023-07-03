import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpClient
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {TokenInterceptor} from "../auth/token-interceptor.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router:Router,
    private httpClint: HttpClient,
    private authService: AuthService,
    private tokenInterceptor: TokenInterceptor
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      if(err.status === 401){
        // this.httpClint.post('https://beker-todo-api-c5103dffe916.herokuapp.com/auth/refreshtoken', {}).pipe(
        //   switchMap((request) => {
        //     this.authService.token = request.
        //     return next.handle(request.clone({
        //       setHeaders: {
        //         Authorization: `Bearer ${this.authService.token}`
        //       }
        //     }))
        //   })
        // )
      }
      const error = err.statusText
      return throwError(() => error)
    }));
  }
}
