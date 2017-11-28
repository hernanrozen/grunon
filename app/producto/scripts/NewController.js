angular
  .module('producto')
  .controller("NewController", function ($scope, Producto, supersonic) {
    $scope.producto = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newproducto = new Producto($scope.producto);
      newproducto.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });