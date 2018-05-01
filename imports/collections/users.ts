import { MongoObservable } from 'meteor-rxjs';
import User = Meteor.User;

export const Users = new MongoObservable.Collection<User>('user');


Users.collection.allow({
  insert: () => true,
  remove: () => true,
  update: () => true,
});