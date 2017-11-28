angular
  .module('cerveza')
  .controller("EditController", function ($scope, Cerveza, supersonic) {
    $scope.cerveza = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Cerveza.find(steroids.view.params.id).then( function (cerveza) {
      $scope.$apply(function() {
        $scope.cerveza = cerveza;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.cerveza.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
