import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {ApiService} from './api.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './state/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HttpModule} from '@angular/http';
import {AuthState} from './state/auth-state.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationInterceptor} from './AuthenticationInterceptor';
import {environment} from '../../../environments/environment';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  providers: [
    // registration
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    AuthService,
    AuthState,
    AuthGuard,
    ApiService,
  ],
  declarations: []
})
export class CoreModule {
}
