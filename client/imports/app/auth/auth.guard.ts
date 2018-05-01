import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) {
  }

  public canActivate(_, state: RouterStateSnapshot): Observable<boolean> {
    if (!(this._auth.isLoggedIn || localStorage.getItem('user'))) {
      this._router.navigate(['/login']);
    }
    return Observable.of(this._auth.isLoggedIn || !!localStorage.getItem('user'));
  }
}