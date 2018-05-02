import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {
  }

  public canActivate(): Observable<boolean> {
    if (this._auth.isLoggedIn || !!localStorage.getItem('user')) {
      this._router.navigate(['/']);
    }
    return Observable.of(!(this._auth.isLoggedIn || localStorage.getItem('user')));
  }
}
