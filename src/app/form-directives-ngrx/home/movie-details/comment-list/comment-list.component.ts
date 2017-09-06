import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../type';

@Component({
  selector: 'hf-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: []
})
export class CommentListComponent implements OnInit {
  @Input()
  comments: Comment[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
