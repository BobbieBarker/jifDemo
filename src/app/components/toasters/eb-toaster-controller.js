'use strict';
angular.module('chadTools.toasters', [])
  .controller('toasterCtrl', function(message){
    var toaster = this;
    toaster.message = message;
  });
