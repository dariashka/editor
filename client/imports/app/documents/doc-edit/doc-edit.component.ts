import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeteorObservable } from 'meteor-rxjs';
import { Subscription } from 'rxjs/Subscription';
import { Documents } from '../../../../../imports/collections/documents';
import { Document } from '../../../../../imports/models/document';

@Component({
  selector: 'app-doc-edit',
  templateUrl: 'doc-edit.component.html',
  styleUrls: ['doc-edit.component.scss']
})
export class DocumentEditComponent implements OnInit {
  private _documentSub: Subscription;
  public document: Document;
  public nameEditMode = false;

  @ViewChild('editor') public editor;

  constructor(private _route: ActivatedRoute) {
  }

  public ngOnInit() {
    const id = this._route.snapshot.params.id;
    this._documentSub = MeteorObservable.subscribe('document', id).subscribe(() => {
      MeteorObservable.autorun().zone().subscribe(() => {
        this.document = Documents.findOne(id);
      });
    });
  }

  public onEditorChange(content) {
    Meteor.call(
      'updateDocument',
      this.document._id,
      this.document.name,
      content,
      new Date()
    );
  }

  public changeEditMode() {
    this.nameEditMode = !this.nameEditMode;
  }

  public onNameChange(event: Event) {
    const name = event.srcElement['value'];
    Meteor.call(
      'updateDocument',
      this.document._id,
      name,
      this.document.content,
      new Date(),
    );
  }
}