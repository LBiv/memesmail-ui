(function () {
  angular
    .module('memesmailUi')
    .controller(
      'RegisterController',
      RegisterController);
  
  function RegisterController($state) {
    var rc = this;

    rc.inputs = {
      username: '',
      passwordFirst: '',
      passwordSecond: ''
    };

    rc.buttons = {
      signIn: signInButton,
      register: registerButton
    };

    activate();

    function signInButton() {
      $state.go('login');
    }

    function registerButton() {
    // FIXME
    }

    function activate() {

    }

  }

})();
