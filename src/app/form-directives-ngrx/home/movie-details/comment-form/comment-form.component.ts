import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TitleCaseValidator} from '../../../shared/validators/title-case.validator';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Component({
  selector: 'hf-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: []
})
export class CommentFormComponent implements OnInit {
  @Input()
  onSubmit: Function;

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private http: Http) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      author: [null,
        [
          Validators.required,
          TitleCaseValidator.validate
        ]
      ],
      comment: [null,
        [
          Validators.required
        ],
        [
          // Bad word async validators : http://www.purgomalum.com/
          // Perform a http call to check if the value contains bad word
          (c: AbstractControl) => {
            console.log('cccc', c);
            if (!c.value) {
              return Observable.empty();
            }
            return Observable.empty();
            // const error = { badWord: true };
            // const headers = new Headers();
            // headers.append('Access-Control-Allow-Origin', '*');
            //
            // const rqOptions: RequestOptionsArgs = {
            //   headers: headers
            // };
            // const url = `http://www.purgomalum.com/service/containsprofanity?text=${c.value}`;
            // return this.http.get(url)
            //   .map((res: Response) => res.json())
            //   .map((containsProfanity: boolean) => {
            //     return containsProfanity ? error : null
            //   });
          }
        ]
      ]
    })
  }

  /**
   * Dispatch to the parent the form value and clear the form
   * @param value
   */
  submit(value) {
    if (this.onSubmit) {
      this.onSubmit(value);
      this.form.reset({ author: null, comment: null })
    }
  }

}
