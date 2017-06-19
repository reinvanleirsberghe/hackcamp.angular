import {Inject, Injectable} from '@angular/core';
import {SERVER_URL_TOKEN} from '../di';
import {Http, Response} from '@angular/http';
import {LoginCredentials} from '../type';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import {Store} from '@ngrx/store';
import * as fromRoot from './state/store';
import {LoginAction, LogoutAction} from './state/auth/actions';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  private TOKEN_KEY = 'hf-token';

  constructor(private http: Http,
              @Inject(SERVER_URL_TOKEN) private serverUrl: string,
              private store: Store<fromRoot.State>) {
  }

  login(credentials: LoginCredentials): Observable<void> {
    /**
     * Implement the login function by doing a POST Http call to server url + '/login'
     * and the credentials.
     * - success => set auth token in local storage with received token and dispatch LoginAction
     * - fail => set auth token in local storage to null and dispatch LogoutAction
     */
    return this.http.post(`${this.serverUrl}/login`, credentials)
      .map((res: Response) => res.json())
      .map((res: { token: string }) => {
        this.setAuthTokenInLocalStorage(res.token);
        this.store.dispatch(new LoginAction(res.token))
      })
      .catch((err) => {
        this.setAuthTokenInLocalStorage(null);
        this.store.dispatch(new LogoutAction());

        return Observable.throw(new Error('Getting Authentication Token '))
      });
  }

  /**
   * Dispatch LoginAction if we had a token in local storage
   */
  loginFromLocalStorage() {
    const token = this.getAuthTokenFromLocalStorage();
    if (token) {
      this.store.dispatch(new LoginAction(token))
    }
  }

  /**
   * Get from store the isAuthenticated value
   * Hint: getAuthIsAuthenticated
   * @returns {Observable<R>}
   */
  get isAuthenticated(): Observable<boolean> {
    return this.store.select(fromRoot.getAuthIsAuthenticated);
  }

  setAuthTokenInLocalStorage(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAuthTokenFromLocalStorage(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

}
