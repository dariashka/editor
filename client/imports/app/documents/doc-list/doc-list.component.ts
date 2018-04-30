import { Component, OnDestroy, OnInit } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { Observable, Subscription } from 'rxjs';
import { Documents } from '../../../../../imports/collections/documents';
import { Document } from '../../../../../imports/models/document';

import * as moment from 'moment';
import 'moment/locale/ru';
@Component({
  selector: 'doc-list',
  templateUrl: 'doc-list.component.html',
  styleUrls: ['doc-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  public documents: Observable<Document[]>;
  public docListSubscription: Subscription;

  public ngOnInit() {
    moment.locale('ru');
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

  public getTimeCount(date: Date) {
    return moment(date).fromNow();
  }
}
