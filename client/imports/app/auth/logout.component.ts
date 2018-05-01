import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'cs-logout',
  template: '<div></div>'
})
export class LogoutComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    Meteor.logout(() => {
      this.router.navigate(['/login']);
      this.dialog.closeAll();
    });
  }
}