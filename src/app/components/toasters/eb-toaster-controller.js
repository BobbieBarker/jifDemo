'use strict';
angular.module('chadTools.toasters', [])
  .controller('toasterCtrl', function($scope, message){
    $scope.message = message;
  });
