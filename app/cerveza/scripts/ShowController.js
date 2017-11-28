angular
  .module('cerveza')
  .controller("ShowController", function ($scope, Cerveza, supersonic) {
    $scope.cerveza = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Cerveza.find($scope.dataId).then( function (cerveza) {
        $scope.$apply( function () {
          $scope.cerveza = cerveza;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.cerveza.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });