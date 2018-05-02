import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { FabComponent } from './chat/fab.component';
import { MessagesComponent } from './chat/messages.component';
import { SidebarComponent } from './chat/sidebar.component';
import { DocumentAddModalComponent } from './doc-add/doc-add-modal.component';
import { DocumentEditComponent } from './doc-edit/doc-edit.component';
import { DocumentListComponent } from './doc-list/doc-list.component';

@NgModule({
  imports: [
    SharedModule,
    CKEditorModule,
  ],
  declarations: [
    ChatComponent,
    MessagesComponent,
    FabComponent,
    DocumentAddModalComponent,
    DocumentEditComponent,
    DocumentListComponent,
    SidebarComponent,
  ],
  entryComponents: [
    DocumentAddModalComponent,
    SidebarComponent
  ]
})
export class DocumentsModule {
}
