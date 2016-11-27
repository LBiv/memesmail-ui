(function () {
  angular
    .module('memesmailUi')
    .controller(
      'LoginController',
      LoginController);
  
  function LoginController($state) {
    var lc = this;

    lc.inputs = {
      username: '',
      password: ''
    }

    lc.buttons = {
      signIn: signInButton,
      register: registerButton
    }

    activate();

    function signInButton() {
      //FIXME
    }

    function registerButton() {
      $state.go('register');
    }

    function activate() {

    }

  }

})();
