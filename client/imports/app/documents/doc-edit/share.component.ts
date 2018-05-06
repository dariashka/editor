import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-share',
  template: `
      <mat-form-field class="full-width-input">
          <input
                  matInput
                  name="username"
                  [(ngModel)]="location"
                  [placeholder]="'Ссылка на документ'"
                  autofocus
                  #locationInput
                  readonly
          >
          <button
                  mat-button
                  matSuffix
                  [ngxClipboard]="locationInput"
                  aria-label="Clear"
                  (cbOnSuccess)="copied()"
          >
              <mat-icon>content_copy</mat-icon>
          </button>
      </mat-form-field>`
})
export class ShareComponent {
  public location;

  constructor(
    private _snackbar: MatSnackBar,
    private _dialogRef: MatDialogRef<ShareComponent>
  ) {
    this.location = window.location;
  }

  public copied() {
    this._snackbar.open('Скопировано!');
    this._dialogRef.close();
  }
}