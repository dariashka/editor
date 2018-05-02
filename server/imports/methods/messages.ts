import { Messages } from '../../../imports/collections/messages';

Meteor.methods({
  sendMessage: function (documentId: string, messageText: string, authorId: string) {
    return Messages.insert({
      body: messageText,
      date: new Date(),
      authorId: authorId,
      docId: documentId
    });
  }
});
