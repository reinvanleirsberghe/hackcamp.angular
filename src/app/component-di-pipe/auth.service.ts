import {Injectable} from '@angular/core';
import {LoginCredentials} from './type';

@Injectable()
export class AuthService {

  private TOKEN_KEY = 'hf-token';

  constructor() {
  }

  login(credentials: LoginCredentials) {
    /**
     * Implement the login function by doing a POST Http call to server url + '/login'
     * and the credentials.
     * Hint: use .toPromise
     */
    throw new Error('Not Implemented :p');
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
