import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SpinnerComponent } from './components/spinner.component';
import { LoadingDirective } from './directives/loading.directive';
import { ApplyPipe } from './pipes/apply.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    ApplyPipe,
    LoadingDirective,
    SpinnerComponent
  ],
  exports: [
    ApplyPipe,
    CommonModule,
    LoadingDirective,
    MaterialModule,
    FormsModule,
    RouterModule,
  ],
  entryComponents: [SpinnerComponent]
})
export class SharedModule {
}