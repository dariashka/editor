export const Users = Meteor.users;


Users.allow({
  insert: () => true,
  remove: () => true,
  update: () => true,
});