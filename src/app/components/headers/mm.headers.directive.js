(function () {
  angular
    .module('memesmailUi')
    .directive('mmHeaders', headers);

  function headers() {

    var directive = {
      restrict: 'E',
      scope: {},
      bindToController: {
//        headers: '=',
        setcontent: '&'
      },
      templateUrl: 'app/components/headers/mm-headers.html',
      controller: HeadersController,
      controllerAs: 'hdc'
    };

    return directive;
  }

  function HeadersController() {
    var hdc = this;

    hdc.headers = [];

    activate();

    function selectFolder(id) {

    }

    function activate() {

      hdc.headers = [
        {
          title: 'Title1',
          from: 'sender1',
          bodyId: 'bodyId1',
          keyId: 'keyId1'
        },
        {
          title: 'Title2',
          from: 'sender2',
          bodyId: 'bodyId2',
          keyId: 'keyId2'
        },
        {
          title: 'Title3',
          from: 'sender3',
          bodyId: 'bodyId3',
          keyId: 'keyId3'
        }
      ];

    }
  }

})();
