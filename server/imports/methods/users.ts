import { Meteor } from 'meteor/meteor';
import { Users } from '../../../imports/collections/users';

// Users.collection.allow({
//   update: ((userId, doc) => true)
// });

Meteor.methods({
  setNickname(nickname: string) {
    return Users.update(Meteor.userId(), {
      nickname
    });
  },
});
