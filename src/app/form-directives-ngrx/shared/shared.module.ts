import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmailValidatorDirective} from './validators/email-validator.directive';
import {HeaderComponent} from './header/header.component';
import {ShortenPipe} from './pipes/shorten.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
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
    ShortenPipe,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
