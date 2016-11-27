angular
  .module('memesmailUi')
  .service(
    'AuthorizationService',
    function (AUTH_TYPE, UserService) {

      // This service constructs URLs for remote calls.
      this.isAuthorized = isAuthorized;

      function isAuthorized(type) {
        if (type == AUTH_TYPE.USER_SIGNED_IN) {
          return UserService.isSignedIn();
        }

      }

    });
