import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    /**
     * Setup Reactive form with the fields:
     * author and comment
     * @type {FormGroup}
     */
    this.form = new FormGroup({});
  }

  /**
   * Dispatch to the parent the form value and clear the form
   * @param value
   */
  submit(value) {
  }

}
