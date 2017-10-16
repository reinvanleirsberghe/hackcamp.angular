import {Component, OnInit} from '@angular/core';
import {LoginCredentials} from '../type';

@Component({
  selector: 'hf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials: LoginCredentials = { email: '', password: '' };
  public errorLogin = false;

  constructor() {
  }

  ngOnInit() {
  }

  login(credentials: LoginCredentials) {
    /**
     * Call the login function of AuthService with the credentials
     * - success => redirect to home
     * - fail => display error login¬
     */

  }

}
