import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from './core/auth.service';


@Component({
  selector: 'hf-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../assets/css/movie.css',
    '../../assets/css/movieComments.css',
    '../../assets/css/movieCommentForm.css',
  ],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit {

  logo = '../assets/images/hackflix_logo.svg';

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    /**
     * If we have already logged one time, we should reconnect the user
     * directly
     * Hint: loginFromLocalStorage
     */
    this.auth.loginFromLocalStorage();
  }
}

