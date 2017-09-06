import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'hf-app',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../assets/css/header.css',
    '../../assets/css/movie.css',
    '../../assets/css/movieComments.css',
    '../../assets/css/movieCommentForm.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  logo = '../assets/images/hackflix_logo.svg';

  ngOnInit(): void {
  }
}

