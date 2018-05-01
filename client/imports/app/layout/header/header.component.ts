import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { DocumentAddModalComponent } from '../../documents/doc-add/doc-add-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  public get isHome() {
    return this._activatedRoute.snapshot.children[0] && this._activatedRoute.snapshot.children[0].routeConfig.path === 'documents';
  }

  public get currentUser() {
    return this._auth.currentUser;
  }

  public get isLoggedIn() {
    return this._auth.isLoggedIn;
  }


  constructor(
    private _dialog: MatDialog,
    private _auth: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  public createNewDocument() {
    let dialogRef = this._dialog.open(DocumentAddModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}