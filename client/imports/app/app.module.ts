import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login.component';
import { LoginGuard } from './auth/login.guard';
import { LogoutComponent } from './auth/logout.component';
import { UserComponent } from './auth/user.component';
import { DocumentEditComponent } from './documents/doc-edit/doc-edit.component';
import { DocumentListComponent } from './documents/doc-list/doc-list.component';
import { DocumentsModule } from './documents/documents.module';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    DocumentsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          component: LoginComponent,
          canActivate: [LoginGuard]
        }, {
        path: 'logout',
        component: LogoutComponent
      }, {
        path: 'documents',
        canActivate: [AuthGuard],
        component: DocumentListComponent
      }, {
        path: 'user',
        canActivate: [AuthGuard],
        component: UserComponent
      }, {
        path: ':id',
        canActivate: [AuthGuard],
        component: DocumentEditComponent
      }, {
        path: '',
        redirectTo: 'documents',
        pathMatch: 'full'
      }, {
        path: '**',
        component: PageNotFoundComponent
      }
      ]),
    AccountsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    LayoutComponent,
    PageNotFoundComponent,
    UserComponent,
  ],
  bootstrap:
    [
      AppComponent
    ],
  providers: [
    LoginGuard,
    AuthGuard,
    AuthService
  ]
})

export class AppModule {
}
