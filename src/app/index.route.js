(function() {
  'use strict';

  angular
    .module('memesmailUi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, AUTH_TYPE) {
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
      })
      .state('home', {
        url: '/home/',
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'hc',
        auth: {
          type: AUTH_TYPE.USER_SIGNED_IN,
          otherwise: 'login'
        }
      });

    $urlRouterProvider.otherwise('/home/');
  }

})();
