import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[hf-title-case][formControlName],[hf-title-case][formControl],[hf-title-case][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => TitleCaseValidatorDirective), multi: true }
  ]
})
export class TitleCaseValidatorDirective implements Validator {

  constructor() {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const error = { 'invalidTitleCase': true };
    if (!c.value) {
      return error;
    }
    const firstLetter = c.value[0];
    return firstLetter === firstLetter.toUpperCase() ? null : error;
  }

}
