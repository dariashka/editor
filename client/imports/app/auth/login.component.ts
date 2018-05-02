import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { AuthService } from './auth.service';

export interface LoginCredentials {
  email: string;
  password: string;
  username?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  public hide = true;
  public mode = 'login';
  public credentials: LoginCredentials = {
    email: '',
    password: '',
    username: '',
  };

  public get isLoggingIn() {
    if (this._auth.isLoggedIn) {
      this._router.navigate(['/']);
    }

    return this._auth.isLoggingIn;
  }

  constructor(
    private _snackbar: MatSnackBar,
    private _router: Router,
    private _auth: AuthService
  ) {
  }

  public login() {
    Meteor.loginWithPassword(
      this.credentials.email,
      this.credentials.password,
      (error) => {
        if (!error) {
          localStorage.setItem('user', this._auth.currentUserId);
          this._router.navigate(['/documents']);
        } else {
          this._handleError(error);
        }
      }
    );
  }

  public signup() {
    Accounts.createUser(this.credentials, (error, result) => {
      if (result) {
        this._router.navigate(['/documents']);
      } else if (error) {
        this._handleError(error);
      }
    });
  }

  private _handleError(error?) {
    if (error) {
      this._snackbar.open(error.reason || 'Unknown error', '', {
        duration: 500
      });
    } else {
      this._router.navigate(['/documents']);
    }
  }
}
