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
    return Observable.timer(50)
      .switchMap(() => {
        if (!(this._auth.isLoggedIn)) {
          this._router.navigate(['/login']);
        }
        return Observable.of(this._auth.isLoggedIn);
      });
  }
}