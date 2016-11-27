angular
  .module('memesmailUi')
  .service(
    'UserService',
    function (AUTH_TYPE) {

      // This service is for managing data immediately related to user identity.
      this.isSignedIn = isSignedIn;



      function isSignedIn() {
        return false;
      }

    });

