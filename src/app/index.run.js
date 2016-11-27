(function() {
  'use strict';

  angular
    .module('memesmailUi')
    .run(runBlock)
    .run(addAuth);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

  function addAuth($rootScope, $state, AuthorizationService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, stateParams) {
      if(toState.auth && !AuthorizationService.isAuthorized(toState['auth']['type'])) {
        event.preventDefault();
        $state.go(toState.auth.otherwise);
      }
    });
  }

})();
