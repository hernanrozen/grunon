angular
  .module('cerveza')
  .controller("IndexController", function ($scope, myService, Cerveza, supersonic) {
    $scope.cervezas = null;
    $scope.showSpinner = true;
		
		$scope.beerList = myService.get();

    Cerveza.all().whenChanged( function (cervezas) {
        $scope.$apply( function () {
          $scope.cervezas = cervezas;
          $scope.showSpinner = false;
					myService.set(cervezas);
        });
    });
  });
	
	