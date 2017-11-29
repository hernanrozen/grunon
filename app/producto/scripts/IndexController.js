angular
  .module('producto')
  .controller("IndexController", function ($scope, Producto, supersonic, myService2, myServiceTest) {
    $scope.productos = null;
    $scope.showSpinner = true;
		$scope.cart = [];
		$scope.cartTotal = 0;
		
		
		$scope.callToAddToProductList = function(currObj){
		        productService.addProduct(currObj);
		    };
		

    Producto.all().whenChanged( function (productos) {
        $scope.$apply( function () {
          $scope.productos = productos;
          $scope.showSpinner = false;
					$scope.beerList = myService2.get();
					$scope.test = myServiceTest.set(productos);
					$scope.test = myServiceTest.get();
        });
    });
		
		$scope.addToCart = function(item) {
			$scope.cart.push({'name': item})
			$scope.cartTotal += item.fields.Precio;
		}

		$scope.removeFromCart = function(index) {	
			$scope.products.splice(index, 1);
		}
		
		
  });
	
	