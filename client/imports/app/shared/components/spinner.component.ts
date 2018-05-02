import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
      <div class="spinner">
          <mat-progress-spinner
                  mode="indeterminate"
                  [diameter]="'15'"
          ></mat-progress-spinner>
      </div>`,
  styles: [
      `
          mat-progress-spinner {
              margin-left: auto;
              margin-right: auto;
          }`
  ]
})
export class SpinnerComponent {
}
