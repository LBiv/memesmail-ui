(function () {
  angular
    .module('memesmailUi')
    .controller(
      'HomeController',
      HomeController);
  
  function HomeController(
    $state,
    UserService) {

    var hc = this;

    hc.displays = {
      userName: ''
    };

    hc.buttons = {
      settingsMenu: settingsMenuButton,
      refresh: refreshButton
    }

    activate();

    function settingsMenuButton($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    }

    function refreshButton() {
    //FIXME
    }

    function activate() {

      if (!UserService.isSignedIn()) {
        $state.go('login');
      }

      hc.displays.userName = UserService.getUserName();

    }
  }

})();
