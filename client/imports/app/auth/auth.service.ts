import { Injectable, NgZone } from '@angular/core';

declare var Package;
declare var _;

@Injectable()
export class AuthService {
  public services;
  public currentUser;
  public currentUserId;

  public get isLoggedIn(): boolean {
    return !!Meteor.user();
  }

  public get isLoggingIn(): boolean {
    return Meteor.loggingIn();
  }

  public autorunComputation: Tracker.Computation;

  constructor(private zone: NgZone) {
    this._initAutorun();
    this.services = this._getLoginServices();
  }

  private _initAutorun(): void {
    this.autorunComputation = Tracker.autorun(() => {
      this.zone.run(() => {
        this.currentUser = Meteor.user();
        this.currentUserId = Meteor.userId();
      });
    });
  }

  private _getLoginServices(): Array<any> {
    const services = Package['accounts-oauth'] ? Accounts['oauth'].serviceNames() : [];
    services.sort();

    return _.map(services, function (name) {
      return { name: name };
    });
  }
}
