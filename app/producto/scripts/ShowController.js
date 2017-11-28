angular
  .module('producto')
  .controller("ShowController", function ($scope, Producto, supersonic) {
    $scope.producto = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Producto.find($scope.dataId).then( function (producto) {
        $scope.$apply( function () {
          $scope.producto = producto;
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
      $scope.producto.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });