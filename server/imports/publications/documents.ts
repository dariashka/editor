import { Documents } from '../../../imports/collections/documents';

Meteor.publish('documentList', function () {
  return Documents.find({}, { sort: { updated: -1 } });
});


Meteor.publish('document', function (id: string) {
  return Documents.find(id);
});