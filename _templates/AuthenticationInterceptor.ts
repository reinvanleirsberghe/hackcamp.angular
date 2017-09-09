import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import {Observable} from 'rxjs/Observable';
import {AuthState} from './state/auth-state.service';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private auth: AuthState) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.setAuthorizationHeader(req))
      .catch((event) => {
        if (event instanceof HttpErrorResponse) {
          return this.catch401(event);
        }
      });
  }

  // Request Interceptor to append Authorization Header
  private setAuthorizationHeader(req: HttpRequest<any>): HttpRequest<any> {
    // Make a clone of the request then append the Authorization Header
    // Other way of writing :
    // return req.clone({headers: req.headers.set('Authorization', this.auth.getTokenFromStoreSync() )});
    return req.clone({ setHeaders: { Authorization: this.auth.getTokenFromStoreSync() } });
  }

  // Response Interceptor
  private catch401(error: HttpErrorResponse): Observable<any> {
    // Check if we had 401 response
    if (error.status === 401) {
      // redirect to Login page for example
      this.auth.logout();

      this.router.navigate(['/login']);
      return Observable.empty();
    }
    return Observable.throw(error);
  }
}
