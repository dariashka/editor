import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as cloneDeep from 'lodash/cloneDeep';
import { AuthService } from './auth.service';
import User = Meteor.User;

@Component({
  selector: 'app-user',
  template: `
      <div class="flex-container" *loading="isLoggingIn">
          <mat-card class="profile">
              <h2 [innerHTML]="editMode ? 'Редактировать профиль' : 'Профиль'"></h2>
              <hr/>
              <form #form="ngForm" novalidate>
                  <mat-form-field class="full-width-input">
                      <input
                              matInput
                              name="username"
                              [(ngModel)]="user.username"
                              [placeholder]="'Имя пользователя'"
                              autofocus
                              [disabled]="!editMode"
                              #username="ngModel"
                      >
                  </mat-form-field>
                  <br/>
                  <mat-form-field class="full-width-input">
                      <input
                              matInput
                              name="email"
                              [(ngModel)]="user.emails[0].address"
                              [placeholder]="'Email'"
                              autofocus
                              required
                              [disabled]="!editMode"
                              type="email"
                              pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+\\.([a-zA-Z0-9-])*$"
                              #email="ngModel"
                      >
                      <mat-error *ngIf="email.hasError('pattern')">
                          Введите корректный email
                      </mat-error>
                  </mat-form-field>
                  <div class="form-buttons">
                      <button
                              *ngIf="!editMode"
                              mat-button
                              type="button"
                              color="primary"
                              (click)="editMode = true"
                      >
                          Редактировать профиль
                      </button>
                      <button
                              *ngIf="editMode"
                              mat-button
                              type="button"
                              color="primary"
                              [disabled]="!form.valid"
                              (click)="save()"
                      >
                          Сохранить изменения
                      </button>
                  </div>
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
  public editMode = false;
  public hide = true;
  public password;

  public get user(): User {
    return this._user;
  }

  public set user(value: User) {
    this._user = value;
  }

  constructor(
    private _auth: AuthService,
    private _snackbar: MatSnackBar
  ) {
    this._user = cloneDeep(_auth.currentUser);
  }

  public save() {
    Meteor.call('updateUser', this._user, (err, res) => {
      if (err) {
        this._snackbar.open(err.reason || err);
      } else if (res) {
        this.editMode = false;
      }
    });
  }
}