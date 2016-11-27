(function() {
  'use strict';

  angular
    .module('memesmailUi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login/',
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginController',
        controllerAs: 'lc'
      })
      .state('register', {
        url: '/register/',
        templateUrl: 'app/components/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'rc'
      });

    $urlRouterProvider.otherwise('/login/');
  }

})();
