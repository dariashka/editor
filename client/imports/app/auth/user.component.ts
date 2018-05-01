import { Component } from '@angular/core';
import * as cloneDeep from 'lodash/cloneDeep';
import { AuthService } from './auth.service';
import User = Meteor.User;

@Component({
  selector: 'app-user',
  template: `
      <div class="flex-container" *loading="isLoggingIn">
          <mat-card class="profile">
              <h2>Профиль</h2>
              <hr/>
              <form #form="ngForm" novalidate>
                  <mat-form-field class="full-width-input">
                      <input
                              matInput
                              name="username"
                              [(ngModel)]="user.username"
                              [placeholder]="'Имя пользователя'"
                              autofocus
                              [disabled]="true"
                              #username="ngModel"
                      >
                  </mat-form-field>
                  <br/>
                  <mat-form-field class="full-width-input">
                      <input
                              matInput
                              name="email"
                              [ngModel]="user.emails[0].address"
                              [placeholder]="'Email'"
                              autofocus
                              [disabled]="true"
                              type="email"
                              #email="ngModel"
                      >
                  </mat-form-field>
              </form>
          </mat-card>
      </div>
  `,
  styles: [
      `
          form {
              max-width: 75%;
              margin: 20px auto;
          }

    `
  ]
})
export class UserComponent {
  private _user: User;

  public get user(): User {
    return this._user;
  }

  public set user(value: User) {
    this._user = value;
  }

  constructor(private _auth: AuthService) {
    this._user = cloneDeep(_auth.currentUser);
  }
}