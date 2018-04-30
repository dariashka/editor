import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DocumentEditComponent } from './documents/doc-edit/doc-edit.component';
import { DocumentListComponent } from './documents/doc-list/doc-list.component';
import { DocumentsModule } from './documents/documents.module';
import { HeaderComponent } from './layout/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    DocumentsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'documents',
        component: DocumentListComponent
      },
      {
        path: ':id',
        component: DocumentEditComponent,
      },
      {
        path: '',
        redirectTo: '/documents',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
