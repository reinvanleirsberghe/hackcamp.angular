import {Component, OnInit} from '@angular/core';
import {LoginCredentials} from '../../type';
import {ApiService} from '../../core/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'hf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials: LoginCredentials = { email: '', password: '' };
  public errorLogin = false;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(credentials: LoginCredentials) {
    /**
     * Call the login function of AuthService with the credentials
     * - success => redirect to home
     * - fail => display error login¬
     */
    this.auth.login(credentials)
      .then(res => {
        this.errorLogin = false;
        this.router.navigate(['/home'])
      })
      .catch(err => {
        this.errorLogin = true;
      });
  }

}
