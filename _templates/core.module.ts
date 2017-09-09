import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './core/auth.service';
import {AuthGuard} from './core/auth.guard';
import {ApiService} from './core/api.service';
import {HttpService} from './core/HttpService';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

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
    // Something should be put here , you could provide an empty object
    // for the provide store, we will update after

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
    // Something should be put here
  ],
  providers: [
    AuthService,
    AuthGuard,
    ApiService
  ],
  declarations: []
})
export class CoreModule {
}
