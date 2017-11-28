angular
  .module('producto')
  .controller("EditController", function ($scope, Producto, supersonic) {
    $scope.producto = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Producto.find(steroids.view.params.id).then( function (producto) {
      $scope.$apply(function() {
        $scope.producto = producto;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.producto.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
