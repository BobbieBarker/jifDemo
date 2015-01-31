'use strict';
angular.module('chadJiffDemo.sign-in')
  .controller('MainCtrl', function ($scope, $rootScope, instagramService) {
    $scope.getLoggedIn = function(){
      console.log('cheesus')
      instagramService.connectInstagram().then(function(){
        if(instagramService.isReady()){
          console.log('fucking cheese')
          $rootScope.$broadcast('auth-login-success')
        }
      }).catch(function(error){
        //bad stuf happened
      })
    }
  });
