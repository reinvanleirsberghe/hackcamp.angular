import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {ApiService} from './api.service';

@NgModule({
  imports: [
    CommonModule
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
