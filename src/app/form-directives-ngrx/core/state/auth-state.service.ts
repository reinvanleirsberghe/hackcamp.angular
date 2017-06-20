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


  constructor(private store: Store<fromRoot.State>) {
  }

  login(token: string): void {
    this.store.dispatch(new LoginAction(token))
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  getTokenFromStoreSync() {
    let token;
    this.store.select(fromRoot.getAuthToken).take(1).subscribe(t => token = t);
    return token;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.store.select(fromRoot.getAuthIsAuthenticated);
  }
}
