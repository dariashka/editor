import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { Documents } from '../../../../imports/collections/documents';
import { Document } from '../../../../imports/models/document';

@Component({
  selector: 'doc-list',
  templateUrl: 'doc-list.component.html',
  styleUrls: ['doc-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  public documents: Observable<Document[]>;
  public docListSubscription: Subscription;

  public ngOnInit() {
    this.docListSubscription = MeteorObservable.subscribe('documentList')
      .subscribe(() => {
        this.documents = <Observable<Document[]>>Documents.find();
      });
  }

  public ngOnDestroy() {
    if (this.docListSubscription) {
      this.docListSubscription.unsubscribe();
    }
  }

  public removeDocument(_id: string) {
    Meteor.call('removeDocument', _id);
  }
}
