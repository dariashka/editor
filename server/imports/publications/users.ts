import { Users } from '../../../imports/collections/users';

Meteor.publish('userList', function () {
  return Users.find({});
});


Meteor.publish('user', function (id: string) {
  return Users.find(id);
});