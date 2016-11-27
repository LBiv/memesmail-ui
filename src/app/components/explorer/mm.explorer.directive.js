(function () {
  angular
    .module('memesmailUi')
    .directive('mmExplorer', explorer);

  function explorer() {

    var directive = {
      restrict: 'E',
      scope: {},
      bindToController: {
        current: '=',
        childrenof: '=',
        parentsof: '=',
        getdata: '&'
      },
      templateUrl: 'app/components/explorer/mm-explorer.html',
      controller: ExplorerController,
      controllerAs: 'exc'
    };

    return directive;
  }

  function ExplorerController() {
    var exc = this;

    exc.parentList = [];
    exc.childrenList = [];
    exc.selectFolder = selectFolder;

    activate();

    function selectFolder(id) {

    }

    function activate() {

      exc.parentList = [
        {
          name: 'Hello1',
          id: 'id1'
        },
        {
          name: 'Hello2',
          id: 'id2'
        },
        {
          name: 'Hello3',
          id: 'id2'
        }
      ];

      exc.childList = [
        {
          name: 'Hello4',
          id: 'id4'
        },
        {
          name: 'Hello5',
          id: 'id5'
        },
        {
          name: 'Hello6',
          id: 'id6'
        },
        {
          name: 'Hello7',
          id: 'id7'
        }
      ];
    }
  }

})();
