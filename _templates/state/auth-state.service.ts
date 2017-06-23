import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import {Store} from '@ngrx/store';
import * as fromRoot from './store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {LoginAction, LogoutAction} from './auth/actions';

@Injectable()
export class AuthState {


  constructor() {
  }

  // Dispatch the LoginAction(token) in to the store
  login(token: string): void {
  }
  // Dispatch the LogoutAction
  logout() {
  }

  // Get the token from store synchronously
  getTokenFromStoreSync() {

  }

  // Check if the user is authenticated in store
  get isAuthenticated(): Observable<boolean> {
    return this.store.select(fromRoot.getAuthIsAuthenticated);
  }
}
