import {Inject, Injectable} from '@angular/core';
import {SERVER_URL_TOKEN} from './di';
import {Http, Response} from '@angular/http';
import {LoginCredentials} from './type';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

  private TOKEN_KEY = 'hf-token';

  constructor(private http: Http,
              @Inject(SERVER_URL_TOKEN) private serverUrl: string) {
  }

  login(credentials: LoginCredentials): Promise<any> {
    /**
     * Implement the login function by doing a POST Http call to server url + '/login'
     * and the credentials.
     * Hint: use .toPromise
     */
    return this.http.post(`${this.serverUrl}/login`, credentials)
      .toPromise()
      .then((res: Response) => res.json())
      .then((res: { token: string }) => {
        this.setAuthTokenInLocalStorage(res.token);
      })
      .catch((err) => {
        this.setAuthTokenInLocalStorage(null);
        throw new Error('Getting Authentication Token ');
      });
  }

  get isAuthenticated(): boolean {
    return !!this.getAuthTokenFromLocalStorage();
  }

  setAuthTokenInLocalStorage(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAuthTokenFromLocalStorage(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
