angular
  .module('cerveza')
  .controller("IndexController", function ($scope, Cerveza, supersonic) {
    $scope.cervezas = null;
    $scope.showSpinner = true;
		

    Cerveza.all().whenChanged( function (cervezas) {
        $scope.$apply( function () {
          $scope.cervezas = cervezas;
          $scope.showSpinner = false;
        });
    });
  });