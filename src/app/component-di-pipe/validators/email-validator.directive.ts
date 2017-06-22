import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, Validator} from '@angular/forms';

@Directive({
  selector: '[hf-email][formControlName],[hf-email][formControl],[hf-email]',
  providers: [
    { provide: 'YOLO', useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})
export class EmailValidatorDirective implements Validator {

  constructor() {
  }

  // Implement the email validator, you will found below the error to send back and the REGEX to use
  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  validate(c: AbstractControl): { [key: string]: any } {
    const error = { 'invalidEmail': true };
  }
}
