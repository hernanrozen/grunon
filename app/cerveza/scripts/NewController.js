angular
  .module('cerveza')
  .controller("NewController", function ($scope, Cerveza, supersonic) {
    $scope.cerveza = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newcerveza = new Cerveza($scope.cerveza);
      newcerveza.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });