import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'doc-add',
  templateUrl: 'doc-add-modal.component.html'
})
export class DocumentAddModalComponent {
  public name: string;

  constructor(
    private _dialogRef: MatDialogRef<DocumentAddModalComponent>,
    private _router: Router
  ) {
  }

  public createDocument() {
    Meteor.call('createDocument', this.name, '', (err, res) => {
      if (res) {
        this._dialogRef.close();
        this._router.navigate([res]);
      }
    });
  }
}