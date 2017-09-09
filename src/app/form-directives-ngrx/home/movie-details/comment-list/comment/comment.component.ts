import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../type';

@Component({
  selector: 'hf-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment;

  @Input()
  onDeleteClick: Function = () => {
  };

  constructor() {
  }

  ngOnInit() {
  }

}
