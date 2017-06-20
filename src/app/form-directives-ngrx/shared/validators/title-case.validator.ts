import {AbstractControl} from '@angular/forms';

export class TitleCaseValidator {

  static  validate(c: AbstractControl): { [key: string]: any } {
    const error = { 'invalidTitleCase': true };
    if (!c.value) {
      return error;
    }
    const firstLetter = c.value[0];
    return firstLetter === firstLetter.toUpperCase() ? null : error;
  }

}
