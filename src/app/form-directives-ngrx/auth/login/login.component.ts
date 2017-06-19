import {Component, OnInit} from '@angular/core';
import {LoginCredentials} from '../../type';
import {Router} from '@angular/router';
import {AuthService} from '../../core/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'hf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials: LoginCredentials = { email: '', password: '' };
  public errorLogin = false;
  public form: FormGroup;

  constructor(private auth: AuthService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null,
        [
          Validators.required,
          Validators.email
        ],
        []
      ],
      password: [null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24)
        ],
        []
      ],
    })
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
