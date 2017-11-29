angular
  .module('cerveza')
  .controller("IndexController", function ($scope, myService2, Cerveza, supersonic, myServiceTest) {
    $scope.cervezas = null;
    $scope.showSpinner = true;
		$scope.test = myServiceTest.get();

    Cerveza.all().whenChanged( function (cervezas) {
        $scope.$apply( function () {
          $scope.cervezas = cervezas;
          $scope.showSpinner = false;
					myService2.set(cervezas);					
					$scope.beers2 = myService2.get();
        });
    });
		
  });
	
	