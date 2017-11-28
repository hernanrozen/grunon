angular
  .module('producto')
  .controller("IndexController", function ($scope, Producto, supersonic) {
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
	
	