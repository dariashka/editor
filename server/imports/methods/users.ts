import { Meteor } from 'meteor/meteor';
import { Users } from '../../../imports/collections/users';
import User = Meteor.User;

Meteor.methods({
  updateUser(updatedUser: User) {
    return Users.update(Meteor.userId(), {
      $set: {
        username: updatedUser.username,
        emails: updatedUser.emails
      }
    });
  },
});
