import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fab',
  template: `
      <div class="fab">
          <button mat-fab (click)="onClick($event)">
              <mat-icon>chat</mat-icon>
          </button>
      </div>`,
  styles: [
      `.fab {
          transition: margin .4s cubic-bezier(.25, .8, .25, 1);
          position: fixed;
          right: 32px;
          bottom: 32px;
          z-index: 99;
          height: 50px;
          width: 50px;
      }

      .mat-fab {
          width: 50px;
          height: 50px;
      }

      /deep/ .mat-fab .mat-button-wrapper {
          padding: 14px 0 !important;
      }

      /deep/ .mat-mini-fab {
          width: 36px;
          height: 36px;
      }

      /deep/ .mat-mini-fab .mat-button-wrapper {
          padding: 7px 0 !important;
      }

      :host.open .fab {
          margin-right: 350px;
      }`
  ]
})
export class FabComponent {
  @Input() @HostBinding('class.open') public isOpen: boolean;
  @Output() public click = new EventEmitter<Event>();

  public onClick(e: Event): void {
    e.stopPropagation();
    this.click.emit(e);
  }
}