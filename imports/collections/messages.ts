import { MongoObservable } from 'meteor-rxjs';
import { Message } from '../models/message';

export const Messages = new MongoObservable.Collection<Message>('messages');

const isLoggedIn = () => !!Meteor.userId();

Messages.allow({
  insert: isLoggedIn,
  remove: isLoggedIn,
  update: isLoggedIn
});