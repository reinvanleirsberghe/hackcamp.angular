import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {ApiService} from './api.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthenticationInterceptor} from './AuthenticationInterceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    // registration
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    AuthService,
    AuthGuard,
    ApiService
  ],
  declarations: []
})
export class CoreModule {
}
