import {Component, OnInit} from '@angular/core';
import {LoginCredentials} from '../../type';
import {AuthService} from '../../core/auth.service';
import {Validators} from '@angular/forms';

@Component({
  selector: 'hf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials: LoginCredentials = { email: '', password: '' };
  public errorLogin = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    // Create the form and handle all validations. Hint: FormGroup and FormBuilder
  }

  login(credentials: LoginCredentials) {
    /**
     * Call the login function of AuthService with the credentials
     * - success => redirect to home
     * - fail => display error login
     */
    this.auth.login(credentials)
      .subscribe(res => {
        this.errorLogin = false;
        this.router.navigate(['/home'])
      }, err => {
        this.errorLogin = true;
      });
  }

}
