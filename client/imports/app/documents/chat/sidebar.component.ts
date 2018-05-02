import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  template: `
      <div class="sidebar" [class.open]="isOpen">
          <ng-content></ng-content>
      </div>
      <div
              *ngIf="isOpen"
              class="backdrop"
              (click)="isOpenChange.emit()"
      >
      </div>`,
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent {
  @Input() @HostBinding('class.open') public isOpen;
  @Output() isOpenChange = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

}