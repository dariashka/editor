import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { SharedModule } from '../shared/shared.module';
import { DocumentAddModalComponent } from './doc-add/doc-add-modal.component';
import { DocumentEditComponent } from './doc-edit/doc-edit.component';
import { DocumentListComponent } from './doc-list/doc-list.component';

@NgModule({
  imports: [
    SharedModule,
    CKEditorModule,
  ],
  declarations: [
    DocumentAddModalComponent,
    DocumentEditComponent,
    DocumentListComponent,
  ],
  entryComponents: [DocumentAddModalComponent]
})
export class DocumentsModule {
}