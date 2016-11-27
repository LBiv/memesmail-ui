angular
  .module('memesmailUi')
  .service(
    'UserService',
    function (AUTH_TYPE) {

      // This service is for managing data immediately related to user identity.
      this.isSignedIn = isSignedIn;

      this.getUserName = getUserName;



      function isSignedIn() {
        return true;
      }

      function getUserName() {
        return 'test@example.com';
      }

    });

