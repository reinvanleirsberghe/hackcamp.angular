import {Component, OnInit} from '@angular/core';
import {LoginCredentials} from '../type';

@Component({
  selector: 'hf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials: LoginCredentials = { email: '', password: '' };

  constructor() {
  }

  ngOnInit() {
  }

  login(credentials: LoginCredentials) {
    console.log('login');
  }

}
