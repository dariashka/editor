import { Meteor } from 'meteor/meteor';

import { Documents } from '../../../imports/collections/documents';

Meteor.publish('documentList', function() {
  return Documents.find({});
});
