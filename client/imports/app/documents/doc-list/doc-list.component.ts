import { Component, OnDestroy, OnInit } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { Observable, Subscription } from 'rxjs';
import { Documents } from '../../../../../imports/collections/documents';
import { Document } from '../../../../../imports/models/document';

import * as moment from 'moment';
import 'moment/locale/ru';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'doc-list',
  templateUrl: 'doc-list.component.html',
  styleUrls: ['doc-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  public documents: Observable<Document[]>;
  public docListSubscription: Subscription;

  public get myId() {
    return this._auth.currentUserId;
  }

  constructor(private _auth: AuthService) {
  }

  public ngOnInit() {
    moment.locale('ru');
    this.docListSubscription = MeteorObservable.subscribe('documentList')
      .subscribe(() => {
        this.documents = <Observable<Document[]>>Documents.find(
          {},
          { sort: { updated: -1 } }
        );
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

  public getAuthor(id: string) {
    const author = Meteor.users.findOne(id);
    return author && (author.username || author.emails[0].address);
  }
}
