import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'hf-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})
export class AppComponent implements OnInit {

  logo = '../assets/images/logo.svg';

  ngOnInit(): void {
  }
}

