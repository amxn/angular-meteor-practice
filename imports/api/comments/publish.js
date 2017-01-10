import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.publish('comments', function() {
    return Meteor.comments.find({}); });
}
