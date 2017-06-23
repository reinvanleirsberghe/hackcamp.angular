import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmailValidatorDirective} from './validators/email-validator.directive';
import {HeaderComponent} from './header/header.component';
import {ShortenPipe} from './pipes/shorten.pipe';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    EmailValidatorDirective,
    HeaderComponent,
    ShortenPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    EmailValidatorDirective,
    HeaderComponent,
    ShortenPipe
  ]
})
export class SharedModule {
}
