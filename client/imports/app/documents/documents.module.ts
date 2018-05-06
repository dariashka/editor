import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { ClipboardModule } from 'ngx-clipboard';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { FabComponent } from './chat/fab.component';
import { MessagesComponent } from './chat/messages.component';
import { SidebarComponent } from './chat/sidebar.component';
import { DocumentAddModalComponent } from './doc-add/doc-add-modal.component';
import { DocumentEditComponent } from './doc-edit/doc-edit.component';
import { ShareComponent } from './doc-edit/share.component';
import { DocumentListComponent } from './doc-list/doc-list.component';

@NgModule({
  imports: [
    SharedModule,
    CKEditorModule,
    ClipboardModule,
  ],
  declarations: [
    ChatComponent,
    MessagesComponent,
    FabComponent,
    DocumentAddModalComponent,
    DocumentEditComponent,
    DocumentListComponent,
    SidebarComponent,
    ShareComponent,
  ],
  entryComponents: [
    DocumentAddModalComponent,
    SidebarComponent,
    ShareComponent
  ]
})
export class DocumentsModule {
}
