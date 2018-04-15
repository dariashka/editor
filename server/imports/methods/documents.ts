import { Meteor } from 'meteor/meteor';

import { Documents } from '../../../imports/collections/documents';

Meteor.methods({
  createDocument(name: string, content: string) {
    Documents.insert({
      name,
      content
    });
  },
  removeDocument(_id: string) {
    Documents.remove({
      _id
    });
  }
});
