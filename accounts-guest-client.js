// 'use strict'; reinstate when https://github.com/meteor/meteor/issues/2437 is fixed

var constructor = (function() {
    /***
     * Creates an instance of Guests
     * @constructor
     */
    function Guests() {
      /*settings = settings || {};
      _.defaults(settings, this.defaultSettings);

        this._notificationsCollection = new Meteor.Collection(null);
        this._notificationTimeout = undefined;
      this.settings = settings;*/
    }

    /***
     * Adds a Guest User
     */
    Guests.prototype.add = function () {
      if (!Meteor.userId()) {
        res = Accounts.createUser({password: Meteor.uuid(), username: Meteor.uuid(), profile: {guest: "guest", name: 'Guest'}});
        console.log(res);
      }
    };

    /* make anonymous users kinda non-users -- just ids 
    * this allows the account-base "Sign-in" to still appear */
    
    Meteor.user = function () {
      var userId = Meteor.userId();
      if (!userId) {
        return null;
      }
      var user = Meteor.users.findOne(userId);
      if (user !== undefined &&
          user.profile !== undefined &&
          user.profile.guest) {
        return null;
      }
      return user;
    };

  /*Guests.prototype.defaultSettings = {
    hideAnimationProperties: {
      height: 0,
      opacity: 0,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0
    },
    animationSpeed: 400
  };*/


    return Guests;
})();

Guests = new constructor();

