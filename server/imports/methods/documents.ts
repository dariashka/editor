import { Meteor } from 'meteor/meteor';

import { Documents } from '../../../imports/collections/documents';

Meteor.methods({
  createDocument(name: string, content: string, authorId: string) {
    return Documents.collection.insert({
      name,
      updated: new Date(),
      content,
      authorId
    });
  },
  getDocument(_id: string) {
    return Documents.collection.findOne(_id);
  },
  updateDocument(_id, name, content, updated, authorId) {
    return Documents.collection.update(_id, {
      name,
      content,
      updated,
      authorId
    });
  },
  removeDocument(_id: string) {
    return Documents.collection.remove({
      _id
    });
  }
});
