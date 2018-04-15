import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DocumentComponent } from './doc-add/doc-add.component';
import { DocumentListComponent } from './doc-list/doc-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,//t
    RouterModule.forRoot([
      {
        path: 'documents',
        component: DocumentListComponent
      },
      {
        path: 'create',
        component: DocumentComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/documents',
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DocumentComponent,
    DocumentListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
