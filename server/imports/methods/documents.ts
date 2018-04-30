import { Meteor } from 'meteor/meteor';

import { Documents } from '../../../imports/collections/documents';

Meteor.methods({
  createDocument(name: string, content: string) {
    return Documents.collection.insert({
      name,
      updated: new Date(),
      content,
    });
  },
  getDocument(_id: string) {
    return Documents.collection.findOne(_id);
  },
  updateDocument(_id, name, content, updated) {
    return Documents.collection.update(_id, {
      name,
      content,
      updated
    });
  },
  removeDocument(_id: string) {
    return Documents.collection.remove({
      _id
    });
  }
});
