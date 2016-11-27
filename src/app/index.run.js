(function() {
  'use strict';

  angular
    .module('memesmailUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
