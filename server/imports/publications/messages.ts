import { Meteor } from 'meteor/meteor';
import { Messages } from '../../../imports/collections/messages';


Meteor.publish('messages', function () {
  return Messages.find({});
});


Meteor.publish('messagesByDocument', function (id: string) {
  return Messages.find({}, { sort: { date: 1 } });
});

Meteor.publish('message', function (id: string) {
  return Messages.find(id);
});