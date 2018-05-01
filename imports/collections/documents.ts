import { MongoObservable } from 'meteor-rxjs';

import { Document } from '../models/document';

export const Documents = new MongoObservable.Collection<Document>('documents');

const isLoggedIn = () => !!Meteor.userId();

Documents.allow({
  insert: isLoggedIn,
  remove: isLoggedIn,
  update: isLoggedIn
});